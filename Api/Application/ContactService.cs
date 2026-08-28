using Api.Models;

namespace Api.Application;

public class ContactService (INotificationService notificationService, IInquiryRepository inquiryRepository)
{
    public async Task CreateContactAsync(string name, string email, string inquiry)
    {
        await inquiryRepository.AddAsync(new InquiryEntity { Name = name, Email = email, Inquiry = inquiry });

        await notificationService.Push("You got a new inquiry!");
    }
}