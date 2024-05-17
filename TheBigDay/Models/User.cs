using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata;
using System.Text.Json.Serialization;

namespace TheBigDay.Models
{
    public class User : IdentityUser
    {
        public string? PhotoPath { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? AddressLine1 { get; set; }
        public string? AddressLine2 { get; set; }
        public string? Suburb { get; set; }
        public string? State { get; set; }
        public string? Country { get; set; }
        public string? Postcode { get; set; }
        public DateTime DOB { get; set; }
        public bool IsDeleted { get; set; }
        public Guid? StoreId { get; set; }
        public Store? Store { get; set; }
        public bool TCAccepted { get; set; }
        public bool MarketingAccepted { get; set; }
        public bool HasCompletedProfile { get; set; }

        //Dependacies
        public List<EventCustomers>? EventCustomers { get; set; }
    }
}
