using Microsoft.EntityFrameworkCore;
using System.Reflection;
using TheBigDay.DBContext;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Identity.Web;

public static class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme);

        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        builder.Configuration.AddEnvironmentVariables().AddUserSecrets(Assembly.GetExecutingAssembly(), true);

        //string connectionString = builder.Configuration.GetSection("TBDContext").Get<TBDContext>().TBDDatabaseConnectionString;
        builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer("Data Source=(localdb)\\ProjectsV13;Initial Catalog=TheBigDay;Integrated Security=True"));

        var app = builder.Build();

        app.UseSwagger();
        app.UseSwaggerUI();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {

        }



        app.UseHttpsRedirection();

        app.UseAuthentication();

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }

    public class TBDContext
    {
        public string? TBDDatabaseConnectionString { get; set; }
    }
}



