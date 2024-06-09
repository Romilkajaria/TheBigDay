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


        public UserService(ILogger<StoreController> logger, IServiceProvider serviceProvider, RoleManager<IdentityRole> roleManager, UserManager<User> userManager)
		{
            _logger = logger;
            _serviceProvider = serviceProvider;
            _roleManager = roleManager;
            _userManager = userManager;
            _context = new DatabaseContext(
                    serviceProvider.GetRequiredService<
                        DbContextOptions<DatabaseContext>>());
        }

        public async Task<Response> RegisterAdminAsync(Register model, string topRole = UserRoles.StoreAdmin)
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
                    string defaultNotYetSet = "";

                    // set up default store values
                    Store store = new Store()
                    {
                        IsDeleted = false,
                        AddressLine1 = defaultNotYetSet,
                        AddressLine2 = defaultNotYetSet,
                        Email = defaultNotYetSet,
                        ContactNum = defaultNotYetSet,
                        AfterHoursContactName = defaultNotYetSet,
                        AfterHoursContactNum = defaultNotYetSet,
                        State = defaultNotYetSet,
                        Suburb = defaultNotYetSet,
                        Postcode = defaultNotYetSet,
                        Country = defaultNotYetSet,
                        Name = defaultNotYetSet,
                        IsActive = false, // we will activate them manually on signup
                        HasCompletedStoreSetup = false,
                    };


                    // TODO: doesnt work if the storeId is passed in. tries to create a new store.
                    User user = new User()
                    {
                        Email = model.User.Email,
                        SecurityStamp = Guid.NewGuid().ToString(),
                        UserName = model.User.FirstName + model.User.LastName,
                        FirstName = model.User.FirstName,
                        LastName = model.User.LastName,
                        AddressLine1 = defaultNotYetSet,
                        AddressLine2 = defaultNotYetSet,
                        Suburb = defaultNotYetSet,
                        State = defaultNotYetSet,
                        Country = defaultNotYetSet,
                        Postcode = defaultNotYetSet,
                        DOB = new DateTime(),
                        PhoneNumber = defaultNotYetSet,
                        HasCompletedProfile = false,
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

                    if (!await _roleManager.RoleExistsAsync(topRole))
                        await _roleManager.CreateAsync(new IdentityRole(topRole));
                    if (!await _roleManager.RoleExistsAsync(UserRoles.User))
                        await _roleManager.CreateAsync(new IdentityRole(UserRoles.User));

                    if (await _roleManager.RoleExistsAsync(topRole))
                    {
                        await _userManager.AddToRoleAsync(user, topRole);
                    }
                    if (await _roleManager.RoleExistsAsync(UserRoles.User))
                    {
                        await _userManager.AddToRoleAsync(user, UserRoles.User);
                    }

                    return new Response { Status = "Success", Message = "User created successfully!" };
                }

            }
            catch (Exception ex) { }

            return new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." };
        }
    }
}

