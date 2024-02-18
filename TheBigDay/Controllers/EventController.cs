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
    [RequiredScope(RequiredScopesConfigurationKey = "AzureAd:Scopes")]
    [Authorize]
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
        [Authorize]
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
        // GET api/<EventController>/5
        [HttpGet("{id}")]
        [Authorize]
        public Event? Get(Guid id)
        {
            try
            {
                using (var context = new DatabaseContext(
                    _serviceProvider.GetRequiredService<
                        DbContextOptions<DatabaseContext>>()))
                {
                    return context.Event.FirstOrDefault((c) => c.ID == id);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Event", ex);
            }

        }

        // POST api/<EventController>
        [HttpPost]
        [Authorize]
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
        [Authorize]
        public void Put(Guid id, [FromBody] Event e)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourceEvent = context.Event.FirstOrDefault((c) => c.ID == id);

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
        [Authorize]
        public void Delete(Guid id)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourceEvent = context.Customer.FirstOrDefault((c) => c.ID == id);

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
