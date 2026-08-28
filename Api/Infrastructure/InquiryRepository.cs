using Api.Application;
using Api.Models;

namespace Api.Infrastructure;

public class InquiryRepository(AppDbContext context) : IInquiryRepository
{
    public async Task AddAsync(InquiryEntity inquiry)
    {
        context.Inquiries.Add(inquiry);
        await context.SaveChangesAsync();
    }
}
