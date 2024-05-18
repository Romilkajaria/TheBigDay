using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheBigDay.DBContext;
using TheBigDay.Models;
using TheBigDay.Models.AuthModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheBigDay.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublicEndpointsController : ControllerBase
    {
        private readonly IServiceProvider _serviceProvider;

        public PublicEndpointsController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        // GET api/<PublicEndpointsController>/5
        [HttpGet("products/{state}")]
        public IActionResult GetProducts(string state)
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    var stores = context.Store.Where((store) => store.State == state);

                    if(stores != null)
                    {
                        return Ok(stores.Select((store) => store.Products));
                    }

                    return Ok();
                }
              
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Error getting user details!" + ex });
            }
        }

        [HttpGet("services/{address}")]
        public string GetServices(string address)
        {
            return "value";
        }
    }
}
