using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StudentProject.Controllers;
using StudentProject.Entity;

namespace StudentProject.Controllers
{
    public class LoginController
    {
        [HttpPost("login")]
        public void Login(UserLogin u)
        {
            var user = u;
            //return OkObjectResult();
        }
    }
}
