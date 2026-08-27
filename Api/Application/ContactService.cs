namespace Api.Application;

public class ContactService (INotificationService notificationService)
{
    public async Task CreateContactAsync(string name, string email, string inquiry)
    {
        await notificationService.Push("Somebody sent you a message " + name + email + inquiry);
    }
}