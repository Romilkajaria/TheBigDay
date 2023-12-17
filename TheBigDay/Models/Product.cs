using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("Product")]
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid? ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int MinGuestLimit { get; set; }
        public int MaxGuestLimit { get; set; }
        public Guid VendorID { get; set; }
        public bool IsDeleted { get; set; }

        //dependancies
        public List<EventProduct>? EventProducts { get; set; }
        public List<PackageProducts>? PackageProducts { get; set; }
    }
}