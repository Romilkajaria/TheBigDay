using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("Package")]
    public class Package
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<EventTypes> Type { get; set; }
        public int MinGuestLimit { get; set; }
        public int MaxGuestLimit { get; set; }
        public Guid StoreId { get; set; }
        public bool IsDeleted { get; set; }

        //dependancies
        public List<EventPackages>? EventPackages { get; set; }
        public List<PackageProducts>? PackageProducts { get; set; }
        public List<PackageServices>? PackageServices { get; set; }

    }
}