using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheBigDay.DBContext;
using TheBigDay.Models;
using Microsoft.Identity.Web.Resource;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheBigDay.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;
        private readonly IServiceProvider _serviceProvider;

        public ProductController(ILogger<ProductController> logger, IServiceProvider serviceProvider)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
        }

        [HttpGet]      
        public IEnumerable<Product> Get()
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return context.Product.Where((c) => c.IsDeleted == false).ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Products", ex);
            }
        }
        // GET api/<ProductController>/5
        [HttpGet("{id}")]
        public Product? Get(Guid id)
        {
            try
            {
                using (var context = new DatabaseContext(
                    _serviceProvider.GetRequiredService<
                        DbContextOptions<DatabaseContext>>()))
                {
                    return context.Product.FirstOrDefault((c) => c.Id == id);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Product", ex);
            }

        }

        [HttpPost]
        [Route("add")]
        public void Post([FromBody] Product product)
        {
            try
            {
                using (var context = new DatabaseContext(
                   _serviceProvider.GetRequiredService<
                       DbContextOptions<DatabaseContext>>()))
                {
                    context.Product.Add(product);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to add Product", ex);
            }
        }

        // PUT api/<ProductController>/5
        [HttpPut("{id}")]      
        public void Put(Guid id, [FromBody] Product product)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    context.Product.Update(product);
                    context.SaveChanges();

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to update Product", ex);
            }
        }

        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]   
        public void Delete(Guid id)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourceProduct = context.Product.FirstOrDefault((c) => c.Id == id);

                    if (sourceProduct != null)
                    {
                        sourceProduct.IsDeleted = true;
                        context.SaveChanges();
                    }

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to delete Product", ex);
            }
        }
    }
}
