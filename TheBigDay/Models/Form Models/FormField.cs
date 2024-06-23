using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models.Form_Models
{

    public class FormField
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid FieldId { get; set; }
        public required FieldTypes Type { get; set; }
        public required string Label { get; set; }
        public string? Placeholder { get; set; }
        public string? Description { get; set; } 
        public bool Required { get; set; }
    }

    public enum FieldTypes
    {
        STRING = 1,
        INT32,
        INT64,
        CHECKBOX,
        DROPDOWN,
        DROPDOWN_MULTISELECT,
        RICH_TEXT,
        RADIO,
        FILE_UPLOAD,
        DATE_PICKER,
        COLOR_PICKER,
        EMAIL,
    }
}
