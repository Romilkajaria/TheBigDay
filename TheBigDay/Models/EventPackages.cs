using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("EventPackages")]
    public class EventPackages
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int EventID { get; set; }
        public int PackageID { get; set; }
        public bool IsFinalisedByCustomer { get; set; }
        public bool IsFinalisedByVendor { get; set; }
        public double Price { get; set; }
    }
}