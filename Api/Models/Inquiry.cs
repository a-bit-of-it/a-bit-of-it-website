namespace Api.Models;

public class InquiryEntity
{
    public int Id { get; init; }
    public required string Name { get; init; }
    public required string Email { get; init; }
    public string? Company { get; init; }
    public required string Inquiry { get; init; }
    public required DateTime Timestamp { get; init; }
}
