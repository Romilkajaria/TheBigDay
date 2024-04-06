using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Identity.Web.Resource;
using TheBigDay.DBContext;
using TheBigDay.Models;
using static Program;

namespace TheBigDay.Controllers
{
    [Authorize(AuthenticationSchemes = "Bearer")]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly ILogger<UserController> _logger;
        private readonly IServiceProvider _serviceProvider;

        public UserController(ILogger<UserController> logger, IServiceProvider serviceProvider)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        public IEnumerable<User> Get()
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return [.. context.User.Where((c) => c.IsDeleted == false)];
                }
            }
            catch (Exception ex) 
            {
                throw new Exception("Failed to get Users", ex);
            }
        }
        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public User? Get(string id)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    return context.User.FirstOrDefault((c) => c.Id == id);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get User", ex);
            }
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] User customer)
        {
            try
            {
                using (var context = new DatabaseContext(
                   _serviceProvider.GetRequiredService<
                       DbContextOptions<DatabaseContext>>()))
                {
                    context.User.Add(customer);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to add User", ex);
            }

        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] User customer)
        {
            try
            {
                using (var context = new DatabaseContext(
                   _serviceProvider.GetRequiredService<
                       DbContextOptions<DatabaseContext>>()))
                {
                    var sourceUser = context.User.FirstOrDefault((c) => c.Id == id);

                    if (sourceUser != null)
                    {
                        sourceUser = customer;
                        context.SaveChanges();
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to update User", ex);
            }

        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            try
            {
                using (var context = new DatabaseContext(
                   _serviceProvider.GetRequiredService<
                       DbContextOptions<DatabaseContext>>()))
                {
                    var sourceUser = context.User.FirstOrDefault((c) => c.Id == id);

                    if (sourceUser != null)
                    {
                        sourceUser.IsDeleted = true;
                        context.SaveChanges();
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to delete User", ex);
            }

        }
    }
}