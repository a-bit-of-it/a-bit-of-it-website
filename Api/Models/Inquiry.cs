namespace Api.Models;

public class InquiryEntity
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Email { get; set; }
    public required string Inquiry { get; set; }
}
