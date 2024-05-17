using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TheBigDay.Controllers;
using TheBigDay.DBContext;
using TheBigDay.Interfaces;
using TheBigDay.Models;
using TheBigDay.Models.AuthModels;

namespace TheBigDay.Services
{
    public class SeedTestStores
    {
        private readonly ILogger<StoreController> _logger;
        private readonly DatabaseContext _context;
        private readonly IUserService _userService;

        public SeedTestStores(ILogger<StoreController> logger, IServiceProvider serviceProvider, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
            _context = new DatabaseContext(
                    serviceProvider.GetRequiredService<
                        DbContextOptions<DatabaseContext>>());

        }

        public void SeedStores()
        {
            try
            {
                RegisterAdminUser();
                AddProducts();
                AddServices();
                CreatePackages();
            }
            catch (Exception ex)
            {
                throw new Exception("failed to seed test stores", ex);
            }
        }

        public void RegisterAdminUser()
        {
            var model = new Register()
            {
                User = new RegisterUser()
                {
                    PhotoPath = null,
                    FirstName = "Romil",
                    LastName = "Kajaria",
                    AddressLine1 = "14 Oldfield Chase",
                    AddressLine2 = null,
                    Suburb = "Brabham",
                    State = "WA",
                    Country = "Australia",
                    Postcode = "6055",
                    DOB = DateTime.ParseExact("1994-12-28T16:00:00", "yyyy-MM-dd HH:mm:ss,fff", System.Globalization.CultureInfo.InvariantCulture),
                    IsDeleted = false,
                    Email = "kajariaromil@gmail.com",
                    Password = "PassWord1."
                },
            };
            _userService.RegisterAdminAsync(model);
        }
        

        public void AddProducts()
        {

        }

        public void AddServices()
        {

        }

        public void CreatePackages()
        {

        }
	}
}

