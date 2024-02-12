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
    public class PackageController : ControllerBase
    {
        private readonly ILogger<PackageController> _logger;
        private readonly IServiceProvider _serviceProvider;

        public PackageController(ILogger<PackageController> logger, IServiceProvider serviceProvider)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        public IEnumerable<Package> Get()
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return context.Package.Where((c) => c.IsDeleted == false).ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Packages", ex);
            }
        }
        // GET api/<PackageController>/5
        [HttpGet("{id}")]
        public Package? Get(Guid id)
        {
            try
            {
                using (var context = new DatabaseContext(
                    _serviceProvider.GetRequiredService<
                        DbContextOptions<DatabaseContext>>()))
                {
                    return context.Package.FirstOrDefault((c) => c.ID == id);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Package", ex);
            }

        }

        // POST api/<PackageController>
        [HttpPost]
        public void Post([FromBody] Package e)
        {
            try
            {
                using (var context = new DatabaseContext(
                   _serviceProvider.GetRequiredService<
                       DbContextOptions<DatabaseContext>>()))
                {
                    context.Package.Add(e);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to add Package", ex);
            }
        }

        // PUT api/<PackageController>/5
        [HttpPut("{id}")]
        public void Put(Guid id, [FromBody] Package e)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourcePackage = context.Package.FirstOrDefault((c) => c.ID == id);

                    if (sourcePackage != null)
                    {
                        sourcePackage = e;
                        context.SaveChanges();
                    }

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to update Package", ex);
            }
        }

        // DELETE api/<PackageController>/5
        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourcePackage = context.Customer.FirstOrDefault((c) => c.ID == id);

                    if (sourcePackage != null)
                    {
                        sourcePackage.IsDeleted = true;
                        context.SaveChanges();
                    }

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to delete Package", ex);
            }
        }
    }
}
