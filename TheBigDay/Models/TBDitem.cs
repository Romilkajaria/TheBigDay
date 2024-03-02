using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TheBigDay.Models
{
    public class TBDitem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid? Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int MinGuestLimit { get; set; }
        public int MaxGuestLimit { get; set; }
        public string VendorId { get; set; }
        public int Price { get; set; }
        public PriceType PriceType { get; set; }
        public bool IsDeleted { get; set; }
    }
}
