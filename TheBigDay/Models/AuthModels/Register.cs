using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;

namespace TheBigDay.Models.AuthModels
{
    public class Register
    {
        public RegisterUser User {  get; set; }
        public Store? Store { get; set; }
        //[Required(ErrorMessage = "User Name is required")]
        //public string? Username { get; set; }
        //[EmailAddress]
        //[Required(ErrorMessage = "Email is required")]
        //public string? Email { get; set; }
        //[Required(ErrorMessage = "Password is required")]
        //public string? Password { get; set; }
        //[Required(ErrorMessage = "FirstName is required")]
        //public string? FirstName { get; set; }
        //[Required(ErrorMessage = "LastName is required")]
        //public string? LastName { get; set; }
        //[Required(ErrorMessage = "AddressLine1 is required")]
        //public string? AddressLine1 { get; set; }
        //[Required(ErrorMessage = "Suburb is required")]
        //public string? Suburb { get; set; }
        //[Required(ErrorMessage = "State is required")]
        //public string? State { get; set; }
        //[Required(ErrorMessage = "Country is required")]
        //public string? Country { get; set; }
        //[Required(ErrorMessage = "Postcode is required")]
        //public string? Postcode { get; set; }
        //[Required(ErrorMessage = "DOB is required")]
        //public DateTime DOB { get; set; }        
        //[Required(ErrorMessage = "Phone number is required")]
        //public string PhoneNumber { get; set; }

        //public string? AddressLine2 { get; set; }
        //public Guid? StoreId { get; set; }
        //public string? PhotoPath { get; set; }
    }

    public class RegisterUser : User
    {
        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}
