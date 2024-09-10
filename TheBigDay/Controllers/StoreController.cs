using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheBigDay.DBContext;
using TheBigDay.Models;
using Microsoft.Identity.Web.Resource;
using Microsoft.AspNetCore.Identity;
using TheBigDay.Interfaces;
using TheBigDay.Models.Form_Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheBigDay.Controllers
{
    [Authorize(AuthenticationSchemes = "Bearer")]
    [Route("api/[controller]")]
    [ApiController]
    public class StoreController : ControllerBase
    {
        private readonly ILogger<StoreController> _logger;
        private readonly IServiceProvider _serviceProvider;
        private readonly UserManager<User> _userManager;

        public StoreController(ILogger<StoreController> logger, 
            IServiceProvider serviceProvider, 
            UserManager<User> userManager)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
            _userManager = userManager;
        }

        [HttpGet]
        public IEnumerable<Store> Get()
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return context.Store.Where((c) => c.IsDeleted == false).ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Stores", ex);
            }
        }
        // GET api/<StoreController>/5
        [HttpGet("{id}")]
        public Store? Get(string id)
        {
            try
            {
                // context this request to 
                using var context = new DatabaseContext(
                    _serviceProvider.GetRequiredService<
                        DbContextOptions<DatabaseContext>>());
                var store = context.Store
                    .Include(i => i.ItemCategories)
                    .FirstOrDefault((c) => c.Id.ToString() == id);

                return store;
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Store", ex);
            }

        }

        // POST api/<StoreController>
        [HttpPost]
        public void Post([FromBody] Store e)
        {
            try
            {
                using (var context = new DatabaseContext(
                   _serviceProvider.GetRequiredService<
                       DbContextOptions<DatabaseContext>>()))
                {
                    context.Store.Add(e);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to add Store", ex);
            }
        }

        // PUT api/<StoreController>/5
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody] Store store)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var destStore = context.Store.Include(i => i.ItemCategories).FirstOrDefault((c) => c.Id.ToString() == id);

                    if (destStore != null)
                    {
                        // Update properties of the existing entity with the values from the input entity
                        context.Entry(destStore).CurrentValues.SetValues(store);

                        if(store.ItemCategories != null)
                        {
                            foreach (var category in store.ItemCategories)
                            {
                                if(!destStore.ItemCategories.Any(ic => ic.Id == category.Id))
                                {
                                    destStore.ItemCategories.Add(category);
                                }
                            }

                        }

                        context.SaveChanges();

                        destStore = context.Store.FirstOrDefault((c) => c.Id.ToString() == id);

                        if (destStore != null
                            && !string.IsNullOrEmpty(destStore.Name)
                            && !string.IsNullOrEmpty(destStore.Email)
                            && !string.IsNullOrEmpty(destStore.AddressLine1)
                            && !string.IsNullOrEmpty(destStore.Suburb)
                            && !string.IsNullOrEmpty(destStore.State)
                            && !string.IsNullOrEmpty(destStore.Country)
                            && !string.IsNullOrEmpty(destStore.Postcode)
                            && !string.IsNullOrEmpty(destStore.ContactNum)
                            && !string.IsNullOrEmpty(destStore.AfterHoursContactNum)
                            && !string.IsNullOrEmpty(destStore.Description)
                            && destStore.ItemCategories != null
                            && destStore.ItemCategories.Count > 0)
                        {
                            destStore.HasCompletedStoreSetup = true;
                            context.SaveChanges();
                        }

                        return Ok();
                    }

                    throw new Exception("store not found");

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to update Store", ex);
            }
        }

        // DELETE api/<StoreController>/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourceStore = context.User.FirstOrDefault((c) => c.Id == id);

                    if (sourceStore != null)
                    {
                        sourceStore.IsDeleted = true;
                        context.SaveChanges();
                    }

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to delete Store", ex);
            }
        }
    }
}
