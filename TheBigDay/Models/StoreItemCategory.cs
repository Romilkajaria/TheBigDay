using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
	public class StoreItemCategory
	{
		public StoreItemCategory()
		{
			Store = new Store();
			ItemCategory = new ItemCategory();
		}

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
		public Guid StoreId { get; set; }
		public Guid ItemGategoryId { get; set; }

		//nav
		public Store Store { get; set; }
		public ItemCategory ItemCategory { get; set; }
    }
}

