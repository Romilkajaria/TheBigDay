using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("PackageServices")]
    public class PackageServices
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public Guid ServiceId { get; set; }
        public Guid PackageId { get; set; }
        public int MinGuestLimit { get; set; }
        public int MaxGuestLimit { get; set; }
    }
}