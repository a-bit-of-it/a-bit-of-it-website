using Api.Application;

namespace Api.Infrastructure;

public class PushoverNotificationService(HttpClient client, Config config) : INotificationService
{
    public async Task Push(string message)
    {
        var values = new Dictionary<string, string>
        {
            ["token"] = config.Pushover.Token,
            ["user"] = config.Pushover.UserToken,
            ["message"] = message,
            ["sound"] = "bugle"
            // ["priority"] = 2
        };

        var response = await client.PostAsync("https://api.pushover.net/1/messages.json", new FormUrlEncodedContent(values));

        if (!response.IsSuccessStatusCode)
        {
            var error =  await response.Content.ReadAsStringAsync();
            
            throw new Exception("Calling Pushover API failed: " + error);
        }
    }
}