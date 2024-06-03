using System.Diagnostics;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheBigDay.DBContext;
using TheBigDay.Models;
using TheBigDay.Models.AuthModels;
using TheBigDay.Models.Form_Models;

namespace TheBigDay.Controllers
{
    [Authorize(AuthenticationSchemes = "Bearer", Roles = UserRoles.AppAdmin)]
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        private readonly IServiceProvider _serviceProvider;

        public FormController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {

                    var forms = context.Form
                        .Include("Fields")
                        .Include("ItemCategory")
                        .ToList();

                    //var categories = context.ItemCategory.ToList();
                    //forms.ForEach(f =>
                    //{
                    //    var targetCategory = categories.FirstOrDefault(ic => ic.Id == f.ItemCategoryId);
                    //    if (targetCategory != null)
                    //    {
                    //        f.ItemCategory = targetCategory;
                    //    }
                    //});

                    return Ok(forms);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get forms", ex);
            }
        }

        [HttpPost]
        public IActionResult CreateFormAsync(Form form)
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    if(form.ItemCategory != null)
                    {
                        context.Entry(form.ItemCategory).State = EntityState.Unchanged;
                        context.Form.Add(form);
                        context.SaveChanges();

                        return Ok();
                    }
                    throw new Exception("Failed to attach item category: " + form.ItemCategoryId);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to create form: " + form.Name, ex);
            }
        }
        [HttpPut]
        public IActionResult UpdateForm(Form form)
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    context.Form.Update(form);
                    context.SaveChanges();

                    return Ok();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to update form: " + form.Name, ex);
            }
        }
        //[HttpPost("field")]
        //public async Task<IActionResult> AddField(FormField formField)
        //{
        //    try
        //    {
        //        using (var context = new DatabaseContext(
        //        _serviceProvider.GetRequiredService<
        //            DbContextOptions<DatabaseContext>>()))
        //        {
        //            return Ok(await context.FormField.AddAsync(formField).ConfigureAwait(false));
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception("Failed to create field: " + formField.Label, ex);
        //    }
        //}
        //[HttpPut("field")]
        //public IActionResult UpdateField(FormField formField)
        //{
        //    try
        //    {
        //        using (var context = new DatabaseContext(
        //        _serviceProvider.GetRequiredService<
        //            DbContextOptions<DatabaseContext>>()))
        //        {
        //            return Ok(context.FormField.Update(formField));
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception("Failed to update field: " + formField.Label, ex);
        //    }
        //}
    }
}
