using Microsoft.EntityFrameworkCore;
using System.Reflection;
using TheBigDay.DBContext;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using TheBigDay.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authentication.Cookies;
using System;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Configure services
        builder.Services.AddControllers();
        builder.Services.AddAuthentication(IdentityConstants.ApplicationScheme)
            .AddIdentityCookies()
            .ApplicationCookie!.Configure(opt => opt.Events = new CookieAuthenticationEvents()
            {
                OnRedirectToLogin = ctx =>
                {
                    ctx.Response.StatusCode = 401;
                    return Task.CompletedTask;
                },
            });

        builder.Services.AddAuthorizationBuilder();

        builder.Services.AddIdentityCore<IdentityUser>()
            .AddEntityFrameworkStores<DatabaseContext>()
            .AddApiEndpoints();

        builder.Services.ConfigureApplicationCookie((option) =>
        {
            //option.Cookie.Name = "TBDtoken";
            option.Cookie.Domain = "localhost:4202";
            option.Cookie.SecurePolicy = CookieSecurePolicy.None;
            option.Cookie.SameSite = SameSiteMode.None;
        });



#if DEBUG
        // Add CORS configuration
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowLocalhost4202", builder => builder
                .WithOrigins("http://localhost:4201", "http://localhost:4202", "https://localhost:4201", "https://localhost:4202")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials());
        });
#else
        // Add CORS configuration
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowLocalhost4202", builder => builder
                .WithOrigins("http://localhost:4201", "http://localhost:4202", "https://jolly-coast-0dc81a210.4.azurestaticapps.net", "https://nice-field-0936efc10.4.azurestaticapps.net")
                .AllowAnyHeader()
                .AllowAnyMethod());
        });
#endif


        builder.Configuration.AddEnvironmentVariables().AddUserSecrets(Assembly.GetExecutingAssembly(), true);
        //string connectionString = builder.Configuration.GetSection("TBDContext").Get<TBDContext>().TBDDatabaseConnectionString;
#if DEBUG
        builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer("Data Source=(localdb)\\ProjectsV13;Initial Catalog=TheBigDay;Integrated Security=True"));
#else

        builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer("Server=tcp:thebigggdaydbserver.database.windows.net,1433;Initial Catalog=TheBigDay-dev;Persist Security Info=False;User ID=tabadmin;Password=Romilk01.;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"));
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

        app.UseAuthentication();
        app.UseAuthorization();
        app.UseHttpsRedirection();

        app.MapControllers();
        app.MapIdentityApi<IdentityUser>();
        app.MapPost("/logout", async (SignInManager<IdentityUser> signInManager) =>
        {
            await signInManager.SignOutAsync().ConfigureAwait(false);
        });

        app.Run();
    }
}


