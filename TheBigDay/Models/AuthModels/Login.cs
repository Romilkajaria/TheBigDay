using System.ComponentModel.DataAnnotations;

namespace TheBigDay.Models.AuthModels
{
    public class Login
    {
        [Required(ErrorMessage = "Email is required")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string? Password { get; set; }
    }
}
