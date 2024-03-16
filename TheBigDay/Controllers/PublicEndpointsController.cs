using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheBigDay.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublicEndpointsController : ControllerBase
    {
        // GET: api/<PublicEndpointsController>

        // GET api/<PublicEndpointsController>/5
        [HttpGet("products/{address}")]
        public string GetProducts(string address)
        {
            return "value";
        }

        [HttpGet("services/{address}")]
        public string GetServices(string address)
        {
            return "value";
        }
    }
}
