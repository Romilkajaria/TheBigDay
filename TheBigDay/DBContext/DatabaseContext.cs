using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TheBigDay.Models;

namespace TheBigDay.DBContext
{
    public class DatabaseContext: IdentityDbContext<IdentityUser>
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

        public DbSet<Customer> Customer { get; set; }
        public DbSet<Event> Event { get; set; }
        public DbSet<EventCustomers> EventCustomers { get; set; }
        public DbSet<EventPackages> EventPackages { get; set; }
        public DbSet<EventProduct> EventProduct { get; set; }
        public DbSet<EventService> EventService { get; set; }
        public DbSet<EventTypes> EventTypes { get; set; }
        public DbSet<PackageProducts> PackageProducts { get; set; }
        public DbSet<PackageServices> PackageServices { get; set; }
        public DbSet<Package> Package { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<Service> Service { get; set; }
        public DbSet<Vendor> Vendor { get; set; }

    }
}
