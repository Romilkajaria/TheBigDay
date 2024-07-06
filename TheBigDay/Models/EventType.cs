using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    // this is translated on the consumer side as an item
    [Table("EventType")]
    public class EventType
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }

        // navigation
        public List<Event>? Events { get; set; }
    }
}