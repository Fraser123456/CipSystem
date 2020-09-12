using System.Threading.Tasks;
using CipSystem.API.Business;
using CipSystem.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace CipSystem.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController: ControllerBase
    {
        private IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(string Username, string Password){
            
            User user = await _authService.Login(Username, Password);

            if(user == null){
                return Unauthorized();
            }

            return Ok(new {
                user
            });

        }

    }
}