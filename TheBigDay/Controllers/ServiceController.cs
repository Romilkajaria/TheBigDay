using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheBigDay.DBContext;
using TheBigDay.Models;
using Microsoft.AspNetCore.Identity;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheBigDay.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class ServiceController : ControllerBase
    {
        private readonly ILogger<ServiceController> _logger;
        private readonly IServiceProvider _serviceProvider;
        private readonly UserManager<User> _userManager;

        public ServiceController(ILogger<ServiceController> logger, IServiceProvider serviceProvider, UserManager<User> userManager)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
            _userManager = userManager;
        }

        //[HttpGet]
        //public IEnumerable<FormEntry> Get()
        //{
        //    try
        //    {
        //        using (var context = new DatabaseContext(
        //        _serviceProvider.GetRequiredService<
        //            DbContextOptions<DatabaseContext>>()))
        //        {
        //            return context.FormEntry.Where((c) => c.IsDeleted == false && c.StoreId == CurrentStoreId() && c.Form.ItemType == ItemType.SERVICE).ToList();
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception("Failed to get Services", ex);
        //    }
        //}
        //// GET api/<ServiceController>/5
        //[HttpGet("{id}")]
        //public FormEntry? Get(Guid id)
        //{
        //    try
        //    {
        //        using (var context = new DatabaseContext(
        //            _serviceProvider.GetRequiredService<
        //                DbContextOptions<DatabaseContext>>()))
        //        {
        //            return context.FormEntry.FirstOrDefault((c) => c.Id == id && c.StoreId == CurrentStoreId());
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception("Failed to get Service", ex);
        //    }

        //}

        //// POST api/<ServiceController>
        //[HttpPost]
        //[Route("add")]
        //public void Post([FromBody] FormEntry e)
        //{
        //    try
        //    {
        //        using (var context = new DatabaseContext(
        //           _serviceProvider.GetRequiredService<
        //               DbContextOptions<DatabaseContext>>()))
        //        {
        //            context.FormEntry.Add(e);
        //            context.SaveChanges();
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception("Failed to add Service", ex);
        //    }
        //}

        //// PUT api/<ServiceController>/5
        //[HttpPut("{id}")]
        //public void Put(Guid id, [FromBody] FormEntry e)
        //{
        //    try
        //    {
        //        using (var context = new DatabaseContext(
        //       _serviceProvider.GetRequiredService<
        //           DbContextOptions<DatabaseContext>>()))
        //        {
        //            var sourceService = context.FormEntry.FirstOrDefault((c) => c.Id == id && c.StoreId == CurrentStoreId());

        //            if (sourceService != null)
        //            {
        //                sourceService = e;
        //                context.SaveChanges();
        //            }

        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception("Failed to update Service", ex);
        //    }
        //}

        //// DELETE api/<ServiceController>/5
        //[HttpDelete("{id}")]
        //public void Delete(string id)
        //{
        //    try
        //    {
        //        using (var context = new DatabaseContext(
        //       _serviceProvider.GetRequiredService<
        //           DbContextOptions<DatabaseContext>>()))
        //        {
        //            var sourceService = context.User.FirstOrDefault((c) => c.Id == id && c.StoreId == CurrentStoreId());

        //            if (sourceService != null)
        //            {
        //                sourceService.IsDeleted = true;
        //                context.SaveChanges();
        //            }

        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception("Failed to delete Service", ex);
        //    }
        //}

        //private Guid CurrentStoreId()
        //{
        //    var currentUser = _userManager.FindByNameAsync(User.Identity!.Name!).Result;

        //    if (currentUser != null && currentUser.StoreId != null)
        //    {
        //        return (Guid)currentUser.StoreId;
        //    }
        //    return Guid.Empty;
        //}
    }
}
