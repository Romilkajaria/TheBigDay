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
    public class VendorController : ControllerBase
    {
        private readonly ILogger<VendorController> _logger;
        private readonly IServiceProvider _serviceProvider;

        public VendorController(ILogger<VendorController> logger, IServiceProvider serviceProvider)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        public IEnumerable<Vendor> Get()
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return context.Vendor.Where((c) => c.IsDeleted == false).ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Vendors", ex);
            }
        }
        // GET api/<VendorController>/5
        [HttpGet("{id}")]
        public Vendor? Get(Guid id)
        {
            try
            {
                using var context = new DatabaseContext(
                    _serviceProvider.GetRequiredService<
                        DbContextOptions<DatabaseContext>>());
                var vendor = context.Vendor
                    .FirstOrDefault((c) => c.ID == id);

                if (vendor != null)
                {
                    vendor.Products = context.Product.Where((p) => p.VendorID == id && p.IsDeleted == false).ToList();
                    vendor.Packages = context.Package.Where((p) => p.VendorID == id && p.IsDeleted == false).ToList();
                    vendor.Services = context.Service.Where((s) => s.VendorID == id && s.IsDeleted == false).ToList();
                }

                return vendor;
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Vendor", ex);
            }

        }

        // POST api/<VendorController>
        [HttpPost]
        public void Post([FromBody] Vendor e)
        {
            try
            {
                using (var context = new DatabaseContext(
                   _serviceProvider.GetRequiredService<
                       DbContextOptions<DatabaseContext>>()))
                {
                    context.Vendor.Add(e);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to add Vendor", ex);
            }
        }

        // PUT api/<VendorController>/5
        [HttpPut("{id}")]
        public void Put(Guid id, [FromBody] Vendor e)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourceVendor = context.Vendor.FirstOrDefault((c) => c.ID == id);

                    if (sourceVendor != null)
                    {
                        sourceVendor = e;
                        context.SaveChanges();
                    }

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to update Vendor", ex);
            }
        }

        // DELETE api/<VendorController>/5
        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourceVendor = context.Customer.FirstOrDefault((c) => c.ID == id);

                    if (sourceVendor != null)
                    {
                        sourceVendor.IsDeleted = true;
                        context.SaveChanges();
                    }

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to delete Vendor", ex);
            }
        }
    }
}
