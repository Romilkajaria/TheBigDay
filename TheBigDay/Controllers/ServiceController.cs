using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheBigDay.DBContext;
using TheBigDay.Models;
using Microsoft.Identity.Web.Resource;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheBigDay.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [RequiredScope(RequiredScopesConfigurationKey = "AzureAd:Scopes")]
    [Authorize]
    public class ServiceController : ControllerBase
    {
        private readonly ILogger<ServiceController> _logger;
        private readonly IServiceProvider _serviceProvider;

        public ServiceController(ILogger<ServiceController> logger, IServiceProvider serviceProvider)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        [Authorize]
        public IEnumerable<Service> Get()
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return context.Service.Where((c) => c.IsDeleted == false).ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Services", ex);
            }
        }
        // GET api/<ServiceController>/5
        [HttpGet("{id}")]
        [AllowAnonymous]
        public Service? Get(Guid id)
        {
            try
            {
                using (var context = new DatabaseContext(
                    _serviceProvider.GetRequiredService<
                        DbContextOptions<DatabaseContext>>()))
                {
                    return context.Service.FirstOrDefault((c) => c.Id == id);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Service", ex);
            }

        }

        // POST api/<ServiceController>
        [HttpPost]
        [Authorize]
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
        [Authorize]
        public void Put(Guid id, [FromBody] Service e)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourceService = context.Service.FirstOrDefault((c) => c.Id == id);

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
        [Authorize]
        public void Delete(string id)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourceService = context.Customer.FirstOrDefault((c) => c.Id == id);

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
