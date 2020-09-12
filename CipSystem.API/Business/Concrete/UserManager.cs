using System.Collections.Generic;
using CipSystem.API.Business;
using CipSystem.API.Models;
using CipSystem.API.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CipSystem.API.Data
{
    public class UserManager : IUserService
    {
        private DataContext _dataContext;
        public UserManager(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<List<User>> GetUsers()
        {
            List<User> Users = await _dataContext.Users.ToListAsync();

            return Users;
        }

        public async Task<User> Add(User User)
        {
            User userExists = await _dataContext.Users.FirstOrDefaultAsync(x => x.UserName.ToLower() == User.UserName.ToLower());

            if(userExists != null)
            {
                throw new System.Exception("User Already Exists");
            }

            await _dataContext.Users.AddAsync(User);
            await _dataContext.SaveChangesAsync();

            return User;
        }

        public async Task<User> GetUser(int Id)
        {
            User User = await _dataContext.Users.FirstOrDefaultAsync(x => x.Id == Id);

            return User;
        }

    }
}