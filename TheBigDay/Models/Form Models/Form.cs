using System.ComponentModel.DataAnnotations;

namespace TheBigDay.Models.Form_Models
{
    public class Form
    {
        [Key]
        public Guid FormId { get; set; }
        public required string FormName { get; set; }
        public List<FormField> Fields { get; set; } = new List<FormField>();
        public List<Form> SubForms { get; set; } = new List<Form>();
    }
}
