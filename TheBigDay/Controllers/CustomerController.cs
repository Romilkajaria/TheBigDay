using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TheBigDay.DBContext;
using TheBigDay.Models;
using static Program;

namespace TheBigDay.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class CustomerController : ControllerBase
    {

        private readonly ILogger<CustomerController> _logger;
        private readonly IServiceProvider _serviceProvider;

        public CustomerController(ILogger<CustomerController> logger, IServiceProvider serviceProvider)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        [Authorize]
        public IEnumerable<Customer> Get()
        {
            try
            {
                using (var context = new DatabaseContext(
                _serviceProvider.GetRequiredService<
                    DbContextOptions<DatabaseContext>>()))
                {
                    return context.Customer.Where((c) => c.IsDeleted == false).ToList();
                }
            }
            catch (Exception ex) 
            {
                throw new Exception("Failed to get Customers", ex);
            }
        }
        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        [Authorize]
        public Customer? Get(Guid id)
        {
            try
            {
                using (var context = new DatabaseContext(
               _serviceProvider.GetRequiredService<
                   DbContextOptions<DatabaseContext>>()))
                {
                    return context.Customer.FirstOrDefault((c) => c.ID == id);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to get Customer", ex);
            }
        }

        // POST api/<ValuesController>
        [HttpPost]
        [Authorize]
        public void Post([FromBody] Customer customer)
        {
            try
            {
                using (var context = new DatabaseContext(
                   _serviceProvider.GetRequiredService<
                       DbContextOptions<DatabaseContext>>()))
                {
                    context.Customer.Add(customer);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to add Customer", ex);
            }

        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        [Authorize]
        public void Put(Guid id, [FromBody] Customer customer)
        {
            try
            {
                using (var context = new DatabaseContext(
                   _serviceProvider.GetRequiredService<
                       DbContextOptions<DatabaseContext>>()))
                {
                    var sourceCustomer = context.Customer.FirstOrDefault((c) => c.ID == id);

                    if (sourceCustomer != null)
                    {
                        sourceCustomer = customer;
                        context.SaveChanges();
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to update Customer", ex);
            }

        }

        // DELETE api/<ValuesController>/5
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
                    var sourceCustomer = context.Customer.FirstOrDefault((c) => c.ID == id);

                    if (sourceCustomer != null)
                    {
                        sourceCustomer.IsDeleted = true;
                        context.SaveChanges();
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to delete Customer", ex);
            }

        }
    }
}