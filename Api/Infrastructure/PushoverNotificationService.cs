using Api.Application;

namespace Api.Infrastructure;

public class PushoverNotificationService(HttpClient client, Config config) : INotificationService
{
    public async Task Push(string message)
    {
        var values = new Dictionary<string, string>()
        {
            ["token"] = config.Pushover.Token,
            ["user"] = config.Pushover.UserToken,
            ["message"] = message
        };
        
        await client.PostAsync("https://api.pushover.net/1/messages.json", new FormUrlEncodedContent(values));
    }
}