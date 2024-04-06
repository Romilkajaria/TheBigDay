using Azure.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TheBigDay.DBContext;
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

        public StoreAuthenticateController(
            UserManager<User> userManager,
            RoleManager<IdentityRole> roleManager,
            IServiceProvider serviceProvider,
            IConfiguration configuration)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
            _serviceProvider = serviceProvider;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] Login model)
        {
            Store? store = null;

            var identityUser = await _userManager.FindByEmailAsync(model.Email!);
            if (identityUser != null && await _userManager.CheckPasswordAsync(identityUser, model.Password!))
            {
                var userRoles = await _userManager.GetRolesAsync(identityUser);

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
                    var user = context.User.FirstOrDefault((u) => u.Id == identityUser.Id);

                        if(user != null)
                        {
                            store = context.Store.FirstOrDefault((s) => s.Users.Contains(user));
                        }
                    
                }
                } catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Error when getting store for user!" });
                }
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo,
                    store = store.Id,
                });
            }
            return Unauthorized();
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] Register model)
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
                        UserName = model.Username,
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
                    };
                    var result = await _userManager.CreateAsync(user, model.Password!);
                    if (!result.Succeeded)
                        return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });
                }

            }
            catch (Exception ex) { }


            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }

        [HttpPost]
        [Route("register-admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] Register model)
        {
            var userExists = await _userManager.FindByEmailAsync(model.Email);
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
                        store = new Store()
                        {
                            IsDeleted = false,
                            AddressLine1 = model.AddressLine1!,
                            AddressLine2 = model.AddressLine2,
                            Email = model.Email!,
                            ContactNum = model.PhoneNumber!,
                            AfterHoursContactName = model.FirstName + " " + model.LastName,
                            AfterHoursContactNum = model.PhoneNumber!,
                            State = model.State!,
                            Suburb = model.Suburb!,
                            Postcode = model.Postcode!,
                            Country = model.Country!,
                            Name = "[Your New Store]",
                            IsActive = false, // we will activate them manually on signup
                        };
                    }

                    // TODO: doesnt work if the storeId is passed in. tries to create a new store.
                    User user = new User()
                    {
                        Email = model.Email,
                        SecurityStamp = Guid.NewGuid().ToString(),
                        UserName = model.Username,
                        FirstName = model.FirstName!,
                        LastName = model.LastName!,
                        AddressLine1 = model.AddressLine1!,
                        AddressLine2 = model.AddressLine2,
                        Suburb = model.Suburb!,
                        State = model.State!,
                        Country = model.Country!,
                        Postcode = model.Postcode!,
                        DOB = model.DOB,
                        PhoneNumber = model.PhoneNumber!,
                    };

                    if(store.Id != null)
                    {
                        user.StoreId = store.Id;
                    } else
                    {
                        user.Store = store;
                    }

                    var result = await _userManager.CreateAsync(user, model.Password!);
                    if (!result.Succeeded)
                        return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

                    if (!await _roleManager.RoleExistsAsync(UserRoles.StoreAdmin))
                        await _roleManager.CreateAsync(new IdentityRole(UserRoles.StoreAdmin));
                    if (!await _roleManager.RoleExistsAsync(UserRoles.User))
                        await _roleManager.CreateAsync(new IdentityRole(UserRoles.User));

                    if (await _roleManager.RoleExistsAsync(UserRoles.StoreAdmin))
                    {
                        await _userManager.AddToRoleAsync(user, UserRoles.StoreAdmin);
                    }
                    if (await _roleManager.RoleExistsAsync(UserRoles.User))
                    {
                        await _userManager.AddToRoleAsync(user, UserRoles.User);
                    }

                    return Ok(new Response { Status = "Success", Message = "User created successfully!" });
                }

            } catch (Exception ex) { }

            return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });
        }

        [HttpGet]
        [Route("ping")]
        public IActionResult Ping()
        {
            return Ok(User.Identity.IsAuthenticated);
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