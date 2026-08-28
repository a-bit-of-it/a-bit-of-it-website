using Api.Models;

namespace Api.Application;

public interface IInquiryRepository
{
    Task AddAsync(InquiryEntity inquiry);
}
