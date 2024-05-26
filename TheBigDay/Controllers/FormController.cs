using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheBigDay.DBContext;
using TheBigDay.Models.Form_Models;

namespace TheBigDay.Controllers
{
    [Authorize(AuthenticationSchemes = "Bearer")]
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        private readonly IServiceProvider _serviceProvider;

        public FormController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        [HttpPost("form")]
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
        [HttpPut("form")]
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
        [HttpPost("field")]
        public async Task<IActionResult> AddField(FormField formField)
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return Ok(await context.FormField.AddAsync(formField).ConfigureAwait(false));
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to create field: " + formField.Label, ex);
            }
        }
        [HttpPut("field")]
        public IActionResult UpdateField(FormField formField)
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return Ok(context.FormField.Update(formField));
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to update field: " + formField.Label, ex);
            }
        }
    }
}
