using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheBigDay.DBContext;
using TheBigDay.Models;
using Microsoft.AspNetCore.Identity;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheBigDay.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class ServiceController : ControllerBase
    {
        private readonly ILogger<ServiceController> _logger;
        private readonly IServiceProvider _serviceProvider;
        private readonly Guid _currentStoreId;

        public ServiceController(ILogger<ServiceController> logger, IServiceProvider serviceProvider, UserManager<User> userManager)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
            // TODO: fix this up later. move this to a base controller
            var currentUser = userManager.FindByNameAsync(User.Identity!.Name!).Result;

            if (currentUser != null && currentUser.StoreId != null)
            {
                _currentStoreId = (Guid)currentUser.StoreId;
            }
        }

        [HttpGet]
        public IEnumerable<Service> Get()
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return context.Service.Where((c) => c.IsDeleted == false && c.StoreId == _currentStoreId).ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Services", ex);
            }
        }
        // GET api/<ServiceController>/5
        [HttpGet("{id}")]
        public Service? Get(Guid id)
        {
            try
            {
                using (var context = new DatabaseContext(
                    _serviceProvider.GetRequiredService<
                        DbContextOptions<DatabaseContext>>()))
                {
                    return context.Service.FirstOrDefault((c) => c.Id == id && c.StoreId == _currentStoreId);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Service", ex);
            }

        }

        // POST api/<ServiceController>
        [HttpPost]
        [Route("add")]
        public void Post([FromBody] Service e)
        {
            try
            {
                using (var context = new DatabaseContext(
                   _serviceProvider.GetRequiredService<
                       DbContextOptions<DatabaseContext>>()))
                {
                    context.Service.Add(e);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to add Service", ex);
            }
        }

        // PUT api/<ServiceController>/5
        [HttpPut("{id}")]
        public void Put(Guid id, [FromBody] Service e)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourceService = context.Service.FirstOrDefault((c) => c.Id == id && c.StoreId == _currentStoreId);

                    if (sourceService != null)
                    {
                        sourceService = e;
                        context.SaveChanges();
                    }

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to update Service", ex);
            }
        }

        // DELETE api/<ServiceController>/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourceService = context.User.FirstOrDefault((c) => c.Id == id && c.StoreId == _currentStoreId);

                    if (sourceService != null)
                    {
                        sourceService.IsDeleted = true;
                        context.SaveChanges();
                    }

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to delete Service", ex);
            }
        }
    }
}
