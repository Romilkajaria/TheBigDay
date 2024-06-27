using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TheBigDay.Models;
using TheBigDay.Models.Form_Models;

namespace TheBigDay.DBContext
{
    public class DatabaseContext: IdentityDbContext<IdentityUser>
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

        public DbSet<User> User { get; set; }
        public DbSet<Event> Event { get; set; }
        public DbSet<EventCustomer> EventCustomer { get; set; }
        public DbSet<EventItem> EventItem { get; set; }
        public DbSet<EventType> EventType { get; set; }
        public DbSet<Form> Form { get; set; }
        public DbSet<FormEntry> FormEntry { get; set; }
        public DbSet<FormField> FormField { get; set; }
        public DbSet<ItemCategory> ItemCategory { get; set; }
        public DbSet<Store> Store { get; set; }
        public DbSet<StoreItemCategory> StoreItemCategory { get; set; }

    }
}
