using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;

namespace TheBigDay.Models.AuthModels
{
    public class Register
    {
        public required RegisterUser User {  get; set; }
    }

    public class RegisterUser : User
    {
        [Required(ErrorMessage = "FirstName is required")]
        public new required string FirstName { get; set; }
        [Required(ErrorMessage = "LastName is required")]
        public new required string LastName { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public required string Password { get; set; }

        [Required(ErrorMessage = "Email is required")]
        public new required string Email { get; set; }
    }
}