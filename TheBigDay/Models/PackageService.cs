using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("PackageServices")]
    public class PackageServices
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ID { get; set; }
        public Guid ServiceID { get; set; }
        public Guid PackageID { get; set; }
        public int MinGuestLimit { get; set; }
        public int MaxGuestLimit { get; set; }
    }
}