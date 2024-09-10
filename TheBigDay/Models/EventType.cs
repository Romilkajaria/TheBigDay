using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TheBigDay.Models.ItemCategoryModels.GenericModels;

namespace TheBigDay.Models
{
    // this is translated on the consumer side as an item
    [Table("EventType")]
    public class EventType
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        #region navigation
        public virtual List<Event>? Events { get; set; }
        public virtual List<EventRequirements> EventRequirements { get; set; } = [];
        #endregion
    }
}