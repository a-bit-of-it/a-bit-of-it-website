namespace Api;

public class Config
{
    public Pushover Pushover { get; set; }
}

public class Pushover
{
    public string Token { get; set; }
    public string UserToken { get; set; }
}