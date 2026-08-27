using Api.Application;
using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController (ContactService contactService) : ControllerBase
{
    [HttpGet]
    public IActionResult HelloWorld()
    {
        var obj = new { Name = "Hello World" };
        return Ok(obj);
    }

    [HttpPost]
    public async Task<IActionResult> Submit([FromBody] ContactRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Email))
            return BadRequest();
        
        if (string.IsNullOrWhiteSpace(request.Name))
            return BadRequest();

        if (string.IsNullOrWhiteSpace(request.Inquiry))
            return BadRequest();
        
        await contactService.CreateContactAsync(request.Name, request.Email, request.Inquiry);
        
        return Ok();
    }
}
