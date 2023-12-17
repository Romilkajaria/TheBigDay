using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("EventTypes")]
    public class EventTypes
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ID { get; set; }
        public string Name { get; set; }

        //Dependancies
        public List<Service>? Services { get; set; }
        public List<Package>? Packages { get; set; }
        public List<Event>? Events { get; set; }
    }
}