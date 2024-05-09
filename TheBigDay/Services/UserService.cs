using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TheBigDay.Controllers;
using TheBigDay.DBContext;
using TheBigDay.Interfaces;
using TheBigDay.Models;
using TheBigDay.Models.AuthModels;

namespace TheBigDay.Services
{
	public class UserService : IUserService
	{
        private readonly ILogger<StoreController> _logger;
        private readonly DatabaseContext _context;
        private readonly IServiceProvider _serviceProvider;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;


        public UserService(ILogger<StoreController> logger, IServiceProvider serviceProvider, RoleManager<IdentityRole> roleManager)
		{
            _logger = logger;
            _serviceProvider = serviceProvider;
            _roleManager = roleManager;
            _context = new DatabaseContext(
                    serviceProvider.GetRequiredService<
                        DbContextOptions<DatabaseContext>>());
        }

        public async Task<Response> RegisterAdminAsync(Register model)
        {
            var userExists = await _userManager.FindByEmailAsync(model.User.Email);
            if (userExists != null)
                return new Response { Status = "Error", Message = "User already exists!" };

            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    var store = context.Store.FirstOrDefault((s) => s.Id == model.User.StoreId);

                    if (store == null && model.Store != null)
                    {
                        store = new Store()
                        {
                            IsDeleted = false,
                            AddressLine1 = model.Store.AddressLine1!,
                            AddressLine2 = model.Store.AddressLine2,
                            Email = model.Store.Email!,
                            ContactNum = model.Store.ContactNum!,
                            AfterHoursContactName = model.Store.AfterHoursContactNum,
                            AfterHoursContactNum = model.Store.AfterHoursContactNum!,
                            State = model.Store.State!,
                            Suburb = model.Store.Suburb!,
                            Postcode = model.Store.Postcode!,
                            Country = model.Store.Country!,
                            Name = model.Store.Name,
                            IsActive = false, // we will activate them manually on signup
                        };
                    }

                    // TODO: doesnt work if the storeId is passed in. tries to create a new store.
                    User user = new User()
                    {
                        Email = model.User.Email,
                        SecurityStamp = Guid.NewGuid().ToString(),
                        UserName = model.User.FirstName + model.User.LastName,
                        FirstName = model.User.FirstName,
                        LastName = model.User.LastName,
                        AddressLine1 = model.User.AddressLine1,
                        AddressLine2 = model.User.AddressLine2,
                        Suburb = model.User.Suburb,
                        State = model.User.State,
                        Country = model.User.Country,
                        Postcode = model.User.Postcode,
                        DOB = model.User.DOB,
                        PhoneNumber = model.User.PhoneNumber,
                    };

                    if (store!.Id != Guid.Empty)
                    {
                        user.StoreId = store.Id;
                    }
                    else
                    {
                        user.Store = store;
                    }

                    var result = await _userManager.CreateAsync(user, model.User.Password);
                    if (!result.Succeeded)
                        return new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." };

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

                    return new Response { Status = "Success", Message = "User created successfully!" };
                }

            }
            catch (Exception ex) { }

            return  new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." };
        }
    }
}

