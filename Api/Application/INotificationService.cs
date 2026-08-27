namespace Api.Application;

public interface INotificationService
{
    Task Push(string message);
}