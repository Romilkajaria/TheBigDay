using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("Store")]
    public class Store
    {
        public Store() 
        {
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public int OperatingRadius { get; set; }
        public string? AddressLine1 { get; set; }
        public string? AddressLine2 { get; set; }
        public string? Suburb { get; set; }
        public string? State { get; set; }
        public string? Country { get; set; }
        public string? Postcode { get; set; }
        public string? ContactNum { get; set; }
        public string? AfterHoursContactName { get; set; }
        public string? AfterHoursContactNum { get; set; }
        public string? Email { get; set; }
        public string? PhotoPath { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public bool HasCompletedStoreSetup { get; set; }
        public StoreType? StoreType { get; set; }
        //store payment preferences
        public double? DepositPercentage { get; set; }
        public int? FullPaymentPrecedingEventDays { get; set; }


        // navigation
        public List<FormEntry>? Items { get; set; }
        public List<User> Users { get; } = new List<User>();
        public List<StoreItemCategory>? StoreItemCategories { get; set; }
    }
    public enum StoreType
    {
        INDIVIDUAL,
        BUSINESS,
    }
}