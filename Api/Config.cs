using JetBrains.Annotations;

namespace Api;

public class Config
{
    public required Pushover Pushover { get; init; }
    public required Database Database { get; init; }
}

[UsedImplicitly]
public class Pushover
{
    public required string Token { get; init; }
    public required string UserToken { get; init; }
}

[UsedImplicitly]
public class Database
{
    public required string ConnectionString { get; init; }
}