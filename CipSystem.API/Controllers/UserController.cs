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
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("AddUser")]
        public async Task<IActionResult> AddUser(User User){
            var CreatedUser = await _userService.Add(User);

            return CreatedAtRoute("GetUsers", new {Controller = "user", id = CreatedUser.Id}, CreatedUser);
        }

        [HttpGet("GetUsers")]
        public async Task<IActionResult> GetUsers(){
            List<User> Users = await _userService.GetUsers();

            return Ok(Users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id){

            User User = await _userService.GetUser(id);

            return Ok(User);

        }

        [HttpGet("GetUser")]
        public async Task<IActionResult> GetUser(string name){
            
        }

    }
}