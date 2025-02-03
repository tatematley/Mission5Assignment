using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Mission5AssignmentHobby;

namespace Mission5AssignmentHobby.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet]
    public IActionResult Calculator()
    {
        return View();
    }
}