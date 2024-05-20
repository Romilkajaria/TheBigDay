using System.ComponentModel.DataAnnotations;

namespace TheBigDay.Models.Form_Models
{

    public class Field
    {
        [Key]
        public Guid FieldId { get; set; }
        public required FieldTypes Type { get; set; }
        public required string Label { get; set; }
        public string? Placeholder { get; set; }
        public bool Required { get; set; }
        public List<Option> Options { get; set; } = new List<Option>();
    }

    public enum FieldTypes
    {
        STRING,
        INT36,
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
