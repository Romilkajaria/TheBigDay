using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using TheBigDay.Models.Form_Models;

namespace TheBigDay.Models
{
    public class FormEntry
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public Guid FormId { get; set; }
        //public Guid FormFieldId { get; set; }
        //public Guid StoreId { get; set; }
        public bool IsDeleted { get; set; }

        // custom form fields
        public string? StringValue { get; set; }
        public bool? BooleanValue { get; set; }
        public long? LongValue { get; set; }
        public int? IntValue { get; set; }
        public string? LinkValue { get; set; }

        #region navigation
        //public required Form Form { get; set; }
        //public required Store Store { get; set; }
        //public required FormField FormField { get; set; }
        //public List<EventItem>? EventItems { get; set; }
        #endregion
    }
}
