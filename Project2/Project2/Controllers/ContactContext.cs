using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Project2.Controllers;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Project2.Controllers
{
    public partial class ContactContext : DbContext
    {
        public DbSet<ContactModel> ContactModels { get; set; }
        public ContactContext()
        {   
        }
        public ContactContext(DbContextOptions<ContactContext> options)
            : base(options)
        {

        }
        public virtual DbSet<ContactModel> Contacts { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=KULIK\\MSSQLSERVER01;Database=FntBckFnt;Trusted_Connection=True;");
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}




