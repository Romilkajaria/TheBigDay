using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("Event")]
    public class Event
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
        public bool IsPrivate { get; set; }
        public bool GuestListFinalised { get; set; }
        public string? TicketLink { get; set; }
        public string Location { get; set; }
        public EventTypes Type { get; set; }

        //dependancies 
        public List<EventService> EventServices { get; set; }
        public List<EventProduct> EventProducts { get; set; }
        public List<EventPackages> EventPackages { get; set; }
        public List<EventCustomers> EventCustomers { get; set; }
    }
}