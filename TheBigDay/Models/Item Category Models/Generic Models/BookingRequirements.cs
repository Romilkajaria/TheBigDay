using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models.ItemCategoryModels
{
	public class BookingRequirements
	{

        //guests Must provide
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public bool EmailAdderss { get; set; }
		public bool PhoneNumber { get; set; }
		public bool PaymentInformation { get; set; }
		public bool PropertyRules { get; set; }
        public bool VendorDetails { get; set; }
        public bool VendorRules { get; set; }
        public bool BookingDetails2DaysPrior { get; set; }
		//disable all booking requirement checks
		public bool IsDisabled { get; set; }

    }
}

