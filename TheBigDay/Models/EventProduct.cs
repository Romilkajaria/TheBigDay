using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("EventProduct")]
    public class EventProduct
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int EventID { get; set; }
        public int ProductID { get; set; }
        public bool IsFinalisedByCustomer { get; set; }
        public bool IsFinalisedByVendor { get; set; }
        public double Price { get; set; }
    }
}