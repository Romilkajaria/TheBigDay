using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TheBigDay.Models;
using TheBigDay.Models.Form_Models;
using TheBigDay.Models.ItemCategoryModels;
using TheBigDay.Models.ItemCategoryModels.GenericModels;

namespace TheBigDay.DBContext
{
    public class DatabaseContext : IdentityDbContext<IdentityUser>
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

        public DbSet<User> User { get; set; }
        public DbSet<Event> Event { get; set; }
        public DbSet<EventCustomer> EventCustomer { get; set; }
        //public DbSet<EventItem> EventItem { get; set; }
        public DbSet<EventType> EventType { get; set; }
        public DbSet<ItemCategory> ItemCategory { get; set; }
        public DbSet<Store> Store { get; set; }
        public DbSet<Venue> Venue { get; set; }
        public DbSet<AvailabilityDateRange> AvailabilityDateRanges { get; set; }
        public DbSet<BookingRequirements> BookingRequirements { get; set; }
        //public DbSet<EventTypeEventRequirements> EventTypeEventRequirements { get; set; }
        public DbSet<EventRequirements> EventRequirements { get; set; }
        public DbSet<PricingDetail> PricingDetails { get; set; }
    }
}
