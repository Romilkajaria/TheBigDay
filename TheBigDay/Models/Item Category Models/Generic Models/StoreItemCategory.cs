using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
	public class StoreItemCategory
	{

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
		public Guid StoreId { get; set; }
		public Guid ItemCategoryId { get; set; }

		//nav
		public Store? Store { get; } = null;
		public ItemCategory? ItemCategory { get; } = null;
    }
}

