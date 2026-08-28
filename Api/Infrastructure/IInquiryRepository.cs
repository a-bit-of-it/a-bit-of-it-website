using Api.Models;

namespace Api.Infrastructure;

public interface IInquiryRepository
{
    Task AddAsync(InquiryEntity inquiry);
}
