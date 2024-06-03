
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TheBigDay.Models.Form_Models;

namespace TheBigDay.Models
{
	public class ItemCategory
	{
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
		public required string Name { get; set; }
		public List<ItemCategory>? SubCategories { get; set; }
	}
}

