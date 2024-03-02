using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("EventCustomers")]
    public class EventCustomers
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid? Id { get; set; }
        public string CustomerId { get; set; }
        public Guid EventId { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsCreator { get; set; }
    }
}