using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("Event")]
    public class Event
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        public required DateTime StartDateTime { get; set; }
        public required DateTime EndDateTime { get; set; }
        public bool IsPrivate { get; set; }
        public bool GuestListFinalised { get; set; }
        public string? TicketLink { get; set; }
        public required string AddressLine1 { get; set; }
        public string? AddressLine2 { get; set; }
        public required string Suburb { get; set; }
        public required string State { get; set; }
        public required string Country { get; set; }
        public required string Postcode { get; set; }
        public required EventType EventType { get; set; }
        public bool IsDeleted { get; set; }

        //dependancies 
        public List<EventItem>? EventItems { get; set; }
        public List<EventCustomer>? EventCustomer { get; set; }
    }
}