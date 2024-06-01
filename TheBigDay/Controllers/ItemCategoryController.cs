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
    public class ItemCategoryController : ControllerBase
    {
        private readonly IServiceProvider _serviceProvider;

        public ItemCategoryController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        public IEnumerable<ItemCategory> Get()
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return context.ItemCategory.ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get item categories", ex);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update(ItemCategory category)
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    context.ItemCategory.Update(category);

                    context.SaveChanges();

                    return Ok();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to update item category", ex);
            }
        }

        [HttpPost]
        [Route("add")]
        public IActionResult Add(ItemCategory category)
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    context.ItemCategory.Add(category);

                    context.SaveChanges();

                    return Ok();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to add item category", ex);
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
                    var target = context.ItemCategory.FirstOrDefault(ic => ic.Id == id);
                    if(target != null)
                    {
                        context.ItemCategory.Remove(target);
                        context.SaveChanges();
                        return Ok();
                    }

                    throw new Exception("target category not found: " + id);

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to delete category", ex);
            }
        }
    }
}

