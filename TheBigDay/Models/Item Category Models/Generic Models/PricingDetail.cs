using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models.ItemCategoryModels.GenericModels
{
	public class PricingDetail
	{
		public PricingDetail()
		{
		}

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public double BasePrice { get; set; }
		public double MinimumPrice { get; set; }
		public double? MaximumPrice { get; set; }
		public int NumOfGuestsToQualifyAsBulkBooking { get; set; }
		public double SecurityDeposit { get; set; }
		public DepositPreferenceOptions DepositPreference { get; set; }
		public string? BillingCountry { get; set; }
		//TODO: not sure about this yet. need to check with payment provider and store what they send back.
		//public string ReferenceId { get; set; }

    }

	public enum DepositPreferenceOptions
	{
			PRE_BOOKING,
			HALF_NOW_HALF_LATER,
			QUARTER_NOW_THREE_QUARTER_LATER,

	}
}

