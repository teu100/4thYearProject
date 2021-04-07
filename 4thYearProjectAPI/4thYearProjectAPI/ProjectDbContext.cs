using _4thYearProjectDataBaseAPI.Models;
using _4thYearProjectAPI.Models;

using Microsoft.EntityFrameworkCore;

namespace _4thYearProjectAPI
{
    public class ProjectDbContext : DbContext
    {
        public DbSet<AddressTable> AddressTable { get; set; }
        public DbSet<Company> Company { get; set; }
        public DbSet<Department> Department { get; set; }
        public DbSet<Employee> Employee { get; set; }
        public DbSet<_4thYearProjectAPI.Models.Task> Task { get; set; }

        public ProjectDbContext(): base() {  }
        public ProjectDbContext(DbContextOptions<ProjectDbContext> options): base(options) {  }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //}
    }
}
