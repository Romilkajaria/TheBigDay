using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models.ItemCategoryModels.GenericModels
{
	public class EventRequirements
	{
		public EventRequirements()
		{
			ApprovedEventTypes = new List<EventType>();
		}

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public bool ExternalVendorsApproved { get; set; }
		public string? TypesOfExtrenalVendors { get; set; }
		public List<EventType> ApprovedEventTypes { get; set; }
	}
}

