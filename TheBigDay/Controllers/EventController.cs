using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using TheBigDay.DBContext;
using TheBigDay.Models;
using Microsoft.Identity.Web.Resource;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheBigDay.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class EventController : ControllerBase
    {
        private readonly ILogger<EventController> _logger;
        private readonly IServiceProvider _serviceProvider;

        public EventController(ILogger<EventController> logger, IServiceProvider serviceProvider)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
        }

        [HttpGet]    
        public IEnumerable<Event> Get()
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return context.Event.Where((c) => c.IsDeleted == false).ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Events", ex);
            }
        }

        // POST api/<EventController>
        [HttpPost]        
        public void Post([FromBody] Event e)
        {
            try
            {
                using (var context = new DatabaseContext(
                   _serviceProvider.GetRequiredService<
                       DbContextOptions<DatabaseContext>>()))
                {
                    EntityEntry<Event> newEvent = context.Event.Add(e);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to add Event", ex);
            }
        }

        // PUT api/<EventController>/5
        [HttpPut("{id}")]       
        public void Put(Guid id, [FromBody] Event e)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourceEvent = context.Event.FirstOrDefault((c) => c.Id == id);

                    if (sourceEvent != null)
                    {
                        sourceEvent = e;
                        context.SaveChanges();
                    }

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to update Event", ex);
            }
        }

        // DELETE api/<EventController>/5
        [HttpDelete("{id}")]      
        public void Delete(string id)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourceEvent = context.Event.FirstOrDefault((c) => c.Id.ToString() == id);

                    if (sourceEvent != null)
                    {
                        sourceEvent.IsDeleted = true;
                        context.SaveChanges();
                    }

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to delete Event", ex);
            }
        }
    }
}
