using System.Threading.Tasks;
using CipSystem.API.Models;
using CipSystem.API.Models.LoginModels;

namespace CipSystem.API.Business
{
    public interface IAuthService
    {
        Task<User> Login(LoginModel Model);
    }
}