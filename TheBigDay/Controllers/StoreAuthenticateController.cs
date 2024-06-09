using Azure.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Graph.TermStore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TheBigDay.DBContext;
using TheBigDay.Interfaces;
using TheBigDay.Models;
using TheBigDay.Models.AuthModels;

namespace TheBigDay.Controllers
{
    [Route("api/store/authenticate")]
    [ApiController]
    public class StoreAuthenticateController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;
        private readonly IServiceProvider _serviceProvider;
        private readonly IUserService _userService;

        public StoreAuthenticateController(
            UserManager<User> userManager,
            RoleManager<IdentityRole> roleManager,
            IServiceProvider serviceProvider,
            IConfiguration configuration,
            IUserService userService)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
            _serviceProvider = serviceProvider;
            _userService = userService;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] Login model)
        {
            User? user = null;

            var identityUser = await _userManager.FindByEmailAsync(model.Email!);
            if (identityUser != null && await _userManager.CheckPasswordAsync(identityUser, model.Password!))
            {
                var userRoles = await _userManager.GetRolesAsync(identityUser);

                // Check the request origin
                var requestOrigin = Request.Headers["Origin"].ToString();

                // If the origin is "https://localhost:4203", apply the Admin role restriction
                if (requestOrigin == "http://localhost:4203" && !userRoles.Contains("AppAdmin"))
                {
                    return Unauthorized(new Response { Status = "Error", Message = "You do not have sufficent permissions for this app." });
                }

                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, identityUser.UserName!),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var token = GetToken(authClaims);

                try
                {
                    using (var context = new DatabaseContext(
                    _serviceProvider.GetRequiredService<
                        DbContextOptions<DatabaseContext>>()))
                    { 
                        user = context.User.FirstOrDefault((u) => u.Id == identityUser.Id);
                    }
                } catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Error getting user details!" + ex });
                }

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo,
                    user,
                });
            }
            return Unauthorized();
        }

#if DEBUG
        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUser model)
        {
            var userExists = await _userManager.FindByEmailAsync(model.Email!);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    var store = context.Store.FirstOrDefault((s) => s.Id == model.StoreId);

                    if(store == null)
                    {
                        return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Cannot register a user without a store" });
                    }

                    User user = new User()
                    {
                        Email = model.Email,
                        SecurityStamp = Guid.NewGuid().ToString(),
                        UserName = model.FirstName + " " + model.LastName,
                        FirstName = model.FirstName!,
                        LastName = model.LastName!,
                        AddressLine1 = model.AddressLine1!,
                        AddressLine2 = model.AddressLine2,
                        Suburb = model.Suburb!,
                        State = model.State!,
                        Country = model.Country!,
                        Postcode = model.Postcode!,
                        DOB = model.DOB,
                        StoreId = store.Id,
                        PhoneNumber = model.PhoneNumber!,
                        IsDeleted = false,
                        HasCompletedProfile = false
                    };
                    var result = await _userManager.CreateAsync(user, model.Password!);
                    if (!result.Succeeded)
                        return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });
                }

            }
            catch (Exception ex) { }


            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }
#endif
        [HttpPost]
        [Route("register-admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] Register model)
        {
            return Ok(await _userService.RegisterAdminAsync(model));
        }

#if DEBUG
        [HttpPost]
        [Route("register-god-admin")]
        public async Task<IActionResult> RegisterGodAdmin([FromBody] Register model)
        {
            return Ok(await _userService.RegisterAdminAsync(model, UserRoles.AppAdmin));
        }
#endif
        [HttpPut]
        public IActionResult UpdateUser([FromBody] User user)
        {
            using (var context = new DatabaseContext(
                    _serviceProvider.GetRequiredService<
                       DbContextOptions<DatabaseContext>>()))
            {
                try
                {
                    var sourceUser = context.User.FirstOrDefault(u => u.Id == user.Id);

                    if(sourceUser != null)
                    {
                        if(!user.AddressLine1.IsNullOrEmpty() &&
                            !user.Suburb.IsNullOrEmpty() &&
                            !user.State.IsNullOrEmpty() &&
                            !user.Country.IsNullOrEmpty() &&
                            !user.Postcode.IsNullOrEmpty())
                        {
                            user.HasCompletedProfile = true;
                        }

                        context.Entry(sourceUser).CurrentValues.SetValues(user);
                        context.User.Update(sourceUser);
                    }
                    throw new Exception("Failed to find user");
                }
                catch(Exception ex)
                {
                    throw new Exception("Failed to update user details", ex);
                }
            }
        }

        private JwtSecurityToken GetToken(List<Claim> authClaims)
        {
            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
                issuer: _configuration["JWT:ValidIssuer"],
                audience: _configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddHours(3),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );

            return token;
        }
    }
}
