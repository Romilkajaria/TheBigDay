using Microsoft.EntityFrameworkCore;
using System.Reflection;
using TheBigDay.DBContext;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Identity.Web;
using System.Reflection.Metadata.Ecma335;
using static System.Net.WebRequestMethods;
using Microsoft.AspNetCore;
using TheBigDay;
using TheBigDay.Models;


public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Configure services
        builder.Services.AddControllers();

#if DEBUG
        // Add CORS configuration
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowLocalhost4202", builder => builder
                .WithOrigins("http://localhost:4202")
                .AllowAnyHeader()
                .AllowAnyMethod());
        });
#else
        // Add CORS configuration
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowLocalhost4202", builder => builder
                .WithOrigins("https://jolly-coast-0dc81a210.4.azurestaticapps.net")
                .AllowAnyHeader()
                .AllowAnyMethod());
        });
#endif

        builder.Configuration.AddEnvironmentVariables().AddUserSecrets(Assembly.GetExecutingAssembly(), true);
        builder.Services.AddAuthorization();
        builder.Services.AddAuthentication();
        //string connectionString = builder.Configuration.GetSection("TBDContext").Get<TBDContext>().TBDDatabaseConnectionString;
#if DEBUG
        builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer("Data Source=(localdb)\\ProjectsV13;Initial Catalog=TheBigDay;Integrated Security=True"));
#else

        builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer("Server=tcp:thebigggdaydbserver.database.windows.net,1433;Initial Catalog=TheBigDay;Persist Security Info=False;User ID=tabadmin;Password=Romilk01.;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"));
#endif
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();

        // Configure the HTTP request pipeline
        //if (app.Environment.IsDevelopment())
        //{
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI();
        //}

        //Enable CORS
        app.UseCors("AllowLocalhost4202");

        app.MapControllers();

        app.Run();
    }
}


