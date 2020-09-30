using System.Threading.Tasks;
using CipSystem.API.Business;
using CipSystem.API.Models;
using CipSystem.API.Models.LoginModels;
using Microsoft.AspNetCore.Mvc;

namespace CipSystem.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginModel Model)
        {

            User user = await _authService.Login(Model);

            if (user == null)
            {
                return Unauthorized();
            }

            return Ok(new
            {
                user
            });

        }

    }
}