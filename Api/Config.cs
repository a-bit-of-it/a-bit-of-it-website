namespace Api;

public class Config
{
    public required Pushover Pushover { get; set; }
    public required Database Database { get; set; }
}

public class Pushover
{
    public required string Token { get; set; }
    public required string UserToken { get; set; }
}

public class Database
{
    public required string ConnectionString { get; set; }
}