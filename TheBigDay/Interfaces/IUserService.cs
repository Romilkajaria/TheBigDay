using System;
using TheBigDay.Models.AuthModels;

namespace TheBigDay.Interfaces
{
	public interface IUserService
	{
		public Task<Response> RegisterAdminAsync(Register model);
	}
}

