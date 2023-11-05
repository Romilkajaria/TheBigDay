using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("EventCustomers")]
    public class EventCustomers
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid? ID { get; set; }
        public Guid CustomerID { get; set; }
        public Guid EventID { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsCreator { get; set; }
    }
}