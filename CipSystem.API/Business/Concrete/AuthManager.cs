using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CipSystem.API.Business;
using CipSystem.API.Models;
using CipSystem.API.Models.LoginModels;
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
        public async Task<User> Login(LoginModel Model)
        {
            User user = await _dataContext.Users.FirstOrDefaultAsync(x => x.UserName == Model.Username && x.Password == Model.Password);

            if (user == null)
            {
                return null;
            }
            else if (Model.Password == null || user.Password != Model.Password)
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