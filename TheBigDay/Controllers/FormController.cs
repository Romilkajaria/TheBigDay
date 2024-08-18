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

    //    [HttpGet]
    //    public IActionResult Get()
    //    {
    //        try
    //        {
    //            using var context = new DatabaseContext(
    //            _serviceProvider.GetRequiredService<
    //                DbContextOptions<DatabaseContext>>());

    //            var forms = context.Form
    //                .Include("Fields")
    //                .Include("ItemCategory")
    //                .ToList();

    //            return Ok(forms);
    //        }
    //        catch (Exception ex)
    //        {
    //            throw new Exception("Failed to get forms", ex);
    //        }
    //    }

    //    [HttpPost]
    //    [Authorize(Roles = UserRoles.AppAdmin)]
    //    public IActionResult CreateFormAsync(Form form)
    //    {
    //        try
    //        {
    //            using var context = new DatabaseContext(
    //            _serviceProvider.GetRequiredService<
    //                DbContextOptions<DatabaseContext>>());
    //            if (form.ItemCategory != null)
    //            {
    //                // Ensure the ItemCategory is tracked only once
    //                var existingItemCategory = context.ItemCategory.Find(form.ItemCategory.Id);
    //                if (existingItemCategory != null)
    //                {
    //                    form.ItemCategory = existingItemCategory;
    //                }
    //                else
    //                {
    //                    context.ItemCategory.Attach(form.ItemCategory);
    //                }

    //                if (form.SubForms != null && form.SubForms.Count > 0)
    //                {
    //                    form.SubForms.ForEach(sf =>
    //                    {
    //                        if (sf.ItemCategory != null)
    //                        {
    //                            var subFormItemCategory = context.ItemCategory.Find(sf.ItemCategory.Id);
    //                            if (subFormItemCategory != null)
    //                            {
    //                                sf.ItemCategory = subFormItemCategory;
    //                            }
    //                            else
    //                            {
    //                                context.ItemCategory.Attach(sf.ItemCategory);
    //                            }
    //                        }
    //                    });
    //                }

    //                context.Form.Add(form);
    //                context.SaveChanges();

    //                return Ok();
    //            }
    //            throw new Exception("Failed to attach item category: " + form.ItemCategoryId);
    //        }
    //        catch (Exception ex)
    //        {
    //            throw new Exception("Failed to create form: " + form.Name, ex);
    //        }
    //    }
    //    [HttpPut]
    //    [Authorize(Roles = UserRoles.AppAdmin)]
    //    public IActionResult UpdateForm(Form form)
    //    {
    //        try
    //        {
    //            using var context = new DatabaseContext(
    //            _serviceProvider.GetRequiredService<
    //                DbContextOptions<DatabaseContext>>());
    //            if (form.ItemCategory != null)
    //            {
    //                // Ensure the ItemCategory is tracked only once
    //                var existingItemCategory = context.ItemCategory.Find(form.ItemCategory.Id);
    //                if (existingItemCategory != null)
    //                {
    //                    form.ItemCategory = existingItemCategory;
    //                }
    //                else
    //                {
    //                    context.ItemCategory.Attach(form.ItemCategory);
    //                }

    //                if (form.SubForms != null && form.SubForms.Count > 0)
    //                {
    //                    form.SubForms.ForEach(sf =>
    //                    {
    //                        if (sf.ItemCategory != null)
    //                        {
    //                            var subFormItemCategory = context.ItemCategory.Find(sf.ItemCategory.Id);
    //                            if (subFormItemCategory != null)
    //                            {
    //                                sf.ItemCategory = subFormItemCategory;
    //                            }
    //                            else
    //                            {
    //                                context.ItemCategory.Attach(sf.ItemCategory);
    //                            }
    //                        }
    //                    });
    //                }

    //                context.Form.Update(form);
    //                context.SaveChanges();
    //                return Ok();
    //            }
    //            throw new Exception("Failed to attach item category: " + form.ItemCategoryId);

    //        }
    //        catch (Exception ex)
    //        {
    //            throw new Exception("Failed to update form: " + form.Name, ex);
    //        }
    //    }

    //    [HttpPost]
    //    [Route("storeforms")]
    //    public List<Form> GetStoreForms(List<Guid> itemCategoryIds)
    //    {
    //        try
    //        {
    //            // context this request to 
    //            using var context = new DatabaseContext(
    //                _serviceProvider.GetRequiredService<
    //                    DbContextOptions<DatabaseContext>>());
    //            var forms = new List<Form>();

    //            itemCategoryIds.ForEach(id =>
    //            {
    //                // only getting root level forms. we know that from FormId being set.
    //                var itemCategoryForms = context.Form
    //                .Include("SubForms")
    //                .Include("Fields")
    //                .Include("SubForms.Fields")
    //                .Where(f => f.ItemCategoryId == id && f.FormLevel == FormLevel.STORE && f.FormId == null);

    //                if (itemCategoryForms != null)
    //                {
    //                    itemCategoryForms.ToList().ForEach(f => forms.Add(f));
    //                }
    //            });

    //            return forms;
    //        }
    //        catch (Exception ex)
    //        {
    //            throw new Exception("Failed to get Store", ex);
    //        }
    //    }

    //    [HttpDelete("{id}")]
    //    public IActionResult DeteleForm(Guid id)
    //    {
    //        using var context = new DatabaseContext(
    //_serviceProvider.GetRequiredService<
    //    DbContextOptions<DatabaseContext>>());

    //        var form = context.Form.Include("SubForms").Include("Fields").Include("SubForms.Fields").FirstOrDefault(f => f.Id == id);

    //        if (form == null)
    //        {
    //            throw new Exception("failed to delete form: unable to find form");
    //        }

    //        if(form.Fields.Count > 0)
    //        {
    //            context.FormField.RemoveRange(form.Fields);
    //        }

    //        if(form.SubForms.Count > 0)
    //        {
    //            form.SubForms.ForEach(sf =>
    //            {
    //                if (sf.Fields.Count > 0)
    //                {
    //                    context.FormField.RemoveRange(sf.Fields);
    //                }
    //            });

    //            context.Form.RemoveRange(form.SubForms);
    //        }
    //        context.Form.Remove(form);
    //        context.SaveChanges();

    //        return Ok();

    //    }
    }
}
