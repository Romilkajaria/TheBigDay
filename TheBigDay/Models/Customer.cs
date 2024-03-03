using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("Customer")]
    public class Customer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ID { get; set; }
        public string? PhotoPath { get; set; }
        public string FirstNme { get; set; }
        public string LastName { get; set; }
        public string AddressLine1 { get; set; }
        public string? AddressLine2 { get; set; }
        public string Suburb { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Postcode { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public DateTime DOB { get; set; }
        public bool IsDeleted { get; set; }

        //Dependacies
        public List<EventCustomers>? EventCustomers { get; set; }
    }
}