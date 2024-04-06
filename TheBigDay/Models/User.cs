using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("User")]
    public class User: IdentityUser
    {
        public string? PhotoPath { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string AddressLine1 { get; set; }
        public string? AddressLine2 { get; set; }
        public string Suburb { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Postcode { get; set; }
        public DateTime DOB { get; set; }
        public bool IsDeleted { get; set; }
        public Guid? StoreId { get; set; }

        //Dependacies
        public List<EventCustomers>? EventCustomers { get; set; }
    }
}