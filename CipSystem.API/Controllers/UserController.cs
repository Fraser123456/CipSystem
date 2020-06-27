using System.Collections.Generic;
using System.Threading.Tasks;
using CipSystem.API.Business;
using CipSystem.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace CipSystem.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService _userService;
        private string _name;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        // [HttpGet]
        // public async Task<IActionResult> GetUsers(){
        //      List<User> Users = _userService.GetUsers();

        //     return ;

        // }

        [HttpPost("AddUser")]
        public async Task<IActionResult> AddUser(User User){
            var CreatedUser = await _userService.Add(User);

            return CreatedAtRoute("GetUser", new {Controller = "users", id = CreatedUser.Id}, CreatedUser);
        }

        [HttpPost("GetUser")]
        public async Task<IActionResult> AddUser(User User){
            var CreatedUser = await _userService.Add(User);

            return CreatedAtRoute("GetUser", new {Controller = "users", id = CreatedUser.Id}, CreatedUser);
        }

    }
}