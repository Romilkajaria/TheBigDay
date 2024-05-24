using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheBigDay.DBContext;
using TheBigDay.Models;
using TheBigDay.Models.AuthModels;
using TheBigDay.Models.Form_Models;

namespace TheBigDay.Controllers
{
{
    [Authorize(AuthenticationSchemes = "Bearer", Roles = UserRoles.AppAdmin)]
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        private readonly ILogger<StoreController> _logger;
        private readonly IServiceProvider _serviceProvider;
        private readonly UserManager<User> _userManager;

        public FormController(ILogger<StoreController> logger, IServiceProvider serviceProvider, UserManager<User> userManager)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<IActionResult> CreateFormAsync(Form form)
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return Ok(await context.Form.AddAsync(form).ConfigureAwait(false));
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to create form: " + form.Name, ex);
            }
        }

        public IActionResult UpdateForm(Form form)
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return Ok(context.Form.Update(form));
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to update form: " + form.Name, ex);
            }
        }
    }
}
