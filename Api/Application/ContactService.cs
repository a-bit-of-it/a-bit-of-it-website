using Api.Models;

namespace Api.Application;

public class ContactService (INotificationService notificationService, IInquiryRepository inquiryRepository)
{
    public async Task CreateContactAsync(string name, string email, string? company, string inquiry)
    {
        await inquiryRepository.AddAsync(new InquiryEntity { Name = name, Email = email, Company = company, Inquiry = inquiry, Timestamp = DateTime.UtcNow });

        await notificationService.Push("You got a new inquiry!");
    }
}