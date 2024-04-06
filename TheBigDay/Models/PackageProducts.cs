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
        public Guid? ProductId { get; set; }
        public Guid? PackageId { get; set; }
        public int MinGuestLimit { get; set; }
        public int MaxGuestLimit { get; set; }
    }
}