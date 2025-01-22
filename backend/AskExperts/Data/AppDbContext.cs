using AskExperts.Models;
using Microsoft.EntityFrameworkCore;

namespace AskExperts.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<MenuItems> MenuItems { get; set; }
        public DbSet<Services> Services { get; set; }
        public DbSet<ServicesData> ServicesData { get; set; }
        public DbSet<Process> Process { get; set; }
        public DbSet<Features> Features { get; set; }
        public DbSet<Gallery> Gallery { get; set; }
        public DbSet<Clients> Clients { get; set; }
        public DbSet<Member> Members { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<BlogDetails> BlogDetails { get; set; }
        public DbSet<Footer> Footer { get; set; }
        public DbSet<CompanyFooter> CompanyFooters { get; set; }


    }
}
