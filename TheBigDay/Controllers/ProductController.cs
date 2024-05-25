using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheBigDay.DBContext;
using TheBigDay.Models;
using Microsoft.AspNetCore.Identity;

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
        private readonly UserManager<User> _userManager;

        public ProductController(ILogger<ProductController> logger, IServiceProvider serviceProvider, UserManager<User> userManager)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
            _userManager = userManager;
        }

        [HttpGet]      
        public IEnumerable<FormEntry> Get()
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return context.FormEntry.Where((c) => !c.IsDeleted && c.StoreId == CurrentStoreId() && c.Form.ItemType == ItemType.PRODUCT).ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Products", ex);
            }
        }
        // GET api/<ProductController>/5
        [HttpGet("{id}")]
        public FormEntry? Get(Guid id)
        {
            try
            {
                using (var context = new DatabaseContext(
                    _serviceProvider.GetRequiredService<
                        DbContextOptions<DatabaseContext>>()))
                {
                    return context.FormEntry.FirstOrDefault((c) => c.Id == id && c.StoreId == CurrentStoreId());
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Product", ex);
            }

        }

        [HttpPost]
        [Route("add")]
        public void Post([FromBody] FormEntry product)
        {
            try
            {
                using (var context = new DatabaseContext(
                   _serviceProvider.GetRequiredService<
                       DbContextOptions<DatabaseContext>>()))
                {
                    product.StoreId = CurrentStoreId();
                    context.FormEntry.Add(product);
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
        public void Put(Guid id, [FromBody] FormEntry product)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourceProduct = context.FormEntry.FirstOrDefault((c) => c.Id == id && c.StoreId == CurrentStoreId());

                    if (sourceProduct != null)
                    {
                        sourceProduct = product;
                        context.SaveChanges();
                    }

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
                    var sourceProduct = context.FormEntry.FirstOrDefault((c) => c.Id == id && c.StoreId == CurrentStoreId());

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

        private Guid CurrentStoreId()
        {
            var currentUser = _userManager.FindByNameAsync(User.Identity!.Name!).Result;

            if (currentUser != null && currentUser.StoreId != null)
            {
                return (Guid)currentUser.StoreId;
            }
            return Guid.Empty;
        }
    }
}
