using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Infrastructure;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<InquiryEntity> Inquiries => Set<InquiryEntity>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<InquiryEntity>(entity =>
        {
            entity.Property(e => e.Name).IsRequired().HasMaxLength(200);
            entity.Property(e => e.Email).IsRequired().HasMaxLength(320);
            entity.Property(e => e.Company).HasMaxLength(320);
            entity.Property(e => e.Inquiry).IsRequired().HasMaxLength(10000);
        });
    }
}
