using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using TheBigDay.DBContext;
using TheBigDay.Models.ItemCategoryModels;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheBigDay.Controllers
{
    [Authorize(AuthenticationSchemes = "Bearer")]
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class VenueController : Controller
    {

        private readonly ILogger<EventController> _logger;
        private readonly IServiceProvider _serviceProvider;

        public VenueController(ILogger<EventController> logger, IServiceProvider serviceProvider)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        public IEnumerable<Venue> Get()
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return context.Venue.Where(v => !v.IsDeleted).ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Venues", ex);
            }
        }

        [HttpPost]
        [Route("add")]
        public void AddVenue([FromBody] Venue venue)
        {
            try
            {
                using (var context = new DatabaseContext(
                   _serviceProvider.GetRequiredService<
                       DbContextOptions<DatabaseContext>>()))
                {
                    EntityEntry<Venue> newEvent = context.Venue.Add(venue);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to add Venue", ex);
            }
        }

        [HttpPut("{id}")]
        public void UpdateVenue([FromBody] Venue venue, Guid id)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var sourceVenue = context.Venue.FirstOrDefault((c) => c.Id == id);

                    if (sourceVenue != null)
                    {
                        sourceVenue = venue;
                        context.SaveChanges();
                    }
                    else
                    {
                        throw new Exception("Venue not Found: " + id);
                    }

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to update Venue", ex);
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
                    var sourceVenue = context.Venue.FirstOrDefault((c) => c.Id.ToString() == id);

                    if (sourceVenue != null)
                    {

                        sourceVenue.IsDeleted = true;
                        context.SaveChanges();
                    }

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to delete Venue", ex);
            }
        }

        [HttpGet("nearby")]
        public IEnumerable<Venue> SearchNearbyVenues([FromQuery] string eventState)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    return context.Venue.Where(v => v.State == eventState && !v.IsDeleted).ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to search nearby venues", ex);
            }
        }
    }
}

