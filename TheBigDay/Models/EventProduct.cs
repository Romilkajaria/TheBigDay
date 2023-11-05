using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("EventProduct")]
    public class EventProduct
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ID { get; set; }
        public Guid EventID { get; set; }
        public Guid ProductID { get; set; }
        public bool IsFinalisedByCustomer { get; set; }
        public bool IsFinalisedByVendor { get; set; }
        public double Price { get; set; }
    }
}