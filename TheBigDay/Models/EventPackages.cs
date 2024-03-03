using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("EventPackages")]
    public class EventPackages
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ID { get; set; }
        public Guid EventID { get; set; }
        public Guid PackageID { get; set; }
        public bool IsFinalisedByCustomer { get; set; }
        public bool IsFinalisedByVendor { get; set; }
        public double Price { get; set; }
    }
}