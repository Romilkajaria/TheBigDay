using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("EventItem")]
    public class EventItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public Guid EventId { get; set; }
        //public Guid FormEntryId { get; set; }
        public bool IsFinalisedByCustomer { get; set; }
        public bool IsFinalisedByStore { get; set; }
        public double FinalPriceByStore { get; set; }

        #region navigation
        public required Event Event {  get; set; }
        //public required FormEntry FormEntry { get; set; }
        #endregion
    }
}