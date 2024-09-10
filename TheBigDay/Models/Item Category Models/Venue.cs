using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TheBigDay.Models.ItemCategoryModels.GenericModels;

namespace TheBigDay.Models.ItemCategoryModels
{
	public class Venue
	{
		public Venue() {
            BookingRequirements = new BookingRequirements();
            PricingDetails = new PricingDetail();
            AvailablityDateRanges = new List<AvailabilityDateRange>();
            EventRequirements = new EventRequirements();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public PropertyType PropertyType { get; set; }
        public SpaceType SpaceType { get; set; }
        public double Size { get; set; } // in square meters
        public int MaxNumOfGuests { get; set; }
        public bool ListingAsCompany { get; set; }
        public string? Location { get; set; }
        public string? LocationLandmark { get; set; }
        public string? Amenities { get; set; }
        public bool SoundRestrictions { get; set; }
        public string? WhatIsAround { get; set; }
        public int DaysNoticeNeededBeforeGuestArrives { get; set; }
        public int DaysInAdvanceCanGuestsBook { get; set; } // 0 is same day onwards
        public string? CheckinTime { get; set; }
        public string? CheckoutTime { get; set; }
        public int NumOfGuestsToQualifyAsExtendedStay { get; set; }
        public VenueVisitsOptions VenueVisitsOptions { get; set; }
        public int NumOfPeopleInVisit { get; set; }
        public int HoursPriorToVendorCheckin { get; set; }
        public bool AdditionalPermissionsRequiredWhenCheckin { get; set; }
        public string? RestrictionsRelatedToSetup { get; set; }
        public EventRequirements EventRequirements { get; set; }
        public BookingRequirements BookingRequirements { get; set; }
        public PricingDetail PricingDetails { get; set; }
        public List<AvailabilityDateRange> AvailablityDateRanges { get; set; }

        #region navigation
        public Guid StoreId { get; set; }
        #endregion
    }

    public enum PropertyType
    {
        FLAT,
        BOUTIQUE_HOTEL,
        EXCLUSIVE,
        INSITTUTION,
        VILLA,
        RESTAURANT
    }

    public enum SpaceType
    {
        ENTIRE_SPACE,
        PRIVATE_ROOM,
    }

    public enum VenueVisitsOptions
    {
        ONE,
        TWO,
        THREE_OR_MORE,
    }
}


