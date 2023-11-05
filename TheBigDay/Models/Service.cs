using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("Service")]
    public class Service
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<EventTypes> Type { get; set; }
        public int MinGuestLimit { get; set; }
        public int MaxGuestLimit { get; set; }
        public Guid VendorID { get; set; }
        public bool IsDeleted { get; set; }

        //dependancies
        public List<EventService>? EventServices { get; set; }
        public List<PackageServices>? PackageServices { get; set; }
    }
}