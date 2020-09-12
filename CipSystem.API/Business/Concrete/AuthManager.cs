using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CipSystem.API.Business;
using CipSystem.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CipSystem.API.Data
{
    public class AuthManager : IAuthService
    {
        private DataContext _dataContext;

        public AuthManager(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public async Task<User> Login(string Username, string Password)
        {
            Console.WriteLine(Username + Password);
            User user = await _dataContext.Users.FirstOrDefaultAsync(x => x.UserName == Username && x.Password == Password);

            if (user == null)
            {
                return null;
            }
            else if (Password == null || user.Password != Password)
            {
                return null;
            }
            else
            {
                return user;
            }

        }
    }
}