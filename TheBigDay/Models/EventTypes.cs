using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("EventTypes")]
    public class EventTypes
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }

        //Dependancies
        public List<Product> Products { get; set; }
        public List<Service> Services { get; set; }
        public List<Package> Packages { get; set; }
        public List<Event> Events { get; set; }
    }
}