using System.ComponentModel.DataAnnotations;

namespace TheBigDay.Models.Form_Models
{
    public class Option
    {
        [Key]
        public Guid OptionId { get; set; }
        public string? Value { get; set; }
        public required string Label { get; set; }
    }
}
