
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using TheBigDay.Models.Form_Models;

namespace TheBigDay.Models
{
	public class ItemCategory
	{
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
		public string? Name { get; set; }
		public string? Desctiption { get; set; }
		public virtual List<ItemCategory>? SubCategories { get; set; }

		[JsonIgnore]
		public virtual List<Store> Stores { get; set; } = [];
	}
}