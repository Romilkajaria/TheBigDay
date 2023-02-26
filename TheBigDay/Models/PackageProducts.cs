using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("PackageProducts")]
    public class PackageProducts
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int ProductID { get; set; }
        public int PackageID { get; set; }
        public int MinGuestLimit { get; set; }
        public int MaxGuestLimit { get; set; }
    }
}