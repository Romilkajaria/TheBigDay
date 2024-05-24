using Microsoft.AspNetCore.Identity;

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
        public List<EventCustomer>? EventCustomer { get; set; }
    }
}
