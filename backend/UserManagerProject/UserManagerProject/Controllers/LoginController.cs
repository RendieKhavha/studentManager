using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserManagerProject.Entity;

namespace UserManagerProject.Controllers
{
    public class LoginController
    {
        [HttpPost("login")]
        public IActionResult Login(UserLogin u)
        {
            var user = u;
            return Ok();
        }
    }
}
