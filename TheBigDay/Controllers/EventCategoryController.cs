using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheBigDay.DBContext;
using TheBigDay.Models;

namespace TheBigDay.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class EventCategoryController : ControllerBase
    {
        private readonly IServiceProvider _serviceProvider;

        public EventCategoryController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        public IEnumerable<EventType> Get()
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return context.EventType.ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get event categories", ex);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update(EventType category)
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    context.EventType.Update(category);

                    context.SaveChanges();

                    return Ok();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to update event category", ex);
            }
        }

        [HttpPost]
        [Route("add")]
        public IActionResult Add(EventType category)
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    context.EventType.Add(category);

                    context.SaveChanges();

                    return Ok();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to add event category", ex);
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    var target = context.EventType.FirstOrDefault(ic => ic.Id == id);
                    if(target != null)
                    {
                        context.EventType.Remove(target);
                        context.SaveChanges();
                        return Ok();
                    }

                    throw new Exception("target event category not found: " + id);

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to delete event category", ex);
            }
        }
    }
}

