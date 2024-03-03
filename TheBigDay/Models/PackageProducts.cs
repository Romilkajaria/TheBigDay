using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("PackageProducts")]
    public class PackageProducts
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public Guid ProductID { get; set; }
        public Guid PackageID { get; set; }
        public int MinGuestLimit { get; set; }
        public int MaxGuestLimit { get; set; }
    }
}