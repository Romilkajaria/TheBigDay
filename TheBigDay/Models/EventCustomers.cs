using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("EventCustomers")]
    public class EventCustomers
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int CustomerID { get; set; }
        public int EventID { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsCreator { get; set; }
    }
}