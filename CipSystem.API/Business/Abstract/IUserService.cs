using System.Collections.Generic;
using System.Threading.Tasks;
using CipSystem.API.Models;

namespace CipSystem.API.Business
{
    public interface IUserService
    {
        Task<List<User>> GetUsers();

        Task<User> GetUser();

        Task<User> Add(User User);
    }
}