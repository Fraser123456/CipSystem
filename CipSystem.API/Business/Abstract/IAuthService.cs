using System.Threading.Tasks;
using CipSystem.API.Models;

namespace CipSystem.API.Business
{
    public interface IAuthService
    {
        Task<User> Login(string Username, string Password);
    }
}