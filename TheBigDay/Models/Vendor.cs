using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("Vendor")]
    public class Vendor
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int OperatingRadius { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string Suburb { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Postcode { get; set; }
        public string ContactNum { get; set; }
        public string AfterHoursMobile { get; set; }
        public string Email { get; set; }
        public string? PhotoPath { get; set; }
        public bool IsDeleted { get; set; }


        //Dependacies
        public List<Product>? Products { get; set; }
        public List<Service>? Services { get; set; }
        public List<Package>? Packages { get; set; }
    }
}