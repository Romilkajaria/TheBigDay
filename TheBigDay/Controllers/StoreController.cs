using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheBigDay.DBContext;
using TheBigDay.Models;
using Microsoft.Identity.Web.Resource;
using Microsoft.AspNetCore.Identity;

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

        public StoreController(ILogger<StoreController> logger, IServiceProvider serviceProvider, UserManager<User> userManager)
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
        public void Put(string id, [FromBody] Store store)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourceStore = context.Store.FirstOrDefault((c) => c.Id.ToString() == id);

                    if (sourceStore != null)
                    {
                        context.Entry(sourceStore).CurrentValues.SetValues(store);
                        context.SaveChanges();
                    }

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
