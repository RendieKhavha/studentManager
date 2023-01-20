using Microsoft.AspNetCore.Mvc;
using UserManagerProject.Entity;
using UserManagerProject.Service;

namespace UserManagerProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        UserService userService;
        [HttpPost]
        public void Create(User user)
        {

            userService = new UserService();
            userService.Create(user);

        }
        [HttpGet]
        public User Read(int id)
        {
            userService = new UserService();
            return userService.Read(id);
        }

        [HttpPut]
        public void Update(int id)
        {
            userService = new UserService();
            userService.Update(id);
        }
        [HttpDelete]
        public void Delete(int id)
        {
            userService = new UserService();
            userService.Delete(id);

        }
    }

}

