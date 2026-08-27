using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    [HttpGet]
    public IActionResult HelloWorld()
    {
        var obj = new { Name = "Hello World" };
        return Ok(obj);
    }

    [HttpPost]
    public IActionResult Submit(ContactRequest request)
    {
        return Ok();
    }
}
