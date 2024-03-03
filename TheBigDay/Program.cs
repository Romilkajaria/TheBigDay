using Microsoft.EntityFrameworkCore;
using System.Reflection;
using TheBigDay.DBContext;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using TheBigDay.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Text;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Configure services
        builder.Services.AddControllers();

        builder.Services.AddIdentityCore<Vendor>()
                .AddUserStore<DatabaseContext>()
                .AddDefaultTokenProviders();

        // Adding Authentication
        builder.Services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(options =>
        {
            options.SaveToken = true;
            options.RequireHttpsMetadata = false;
            options.TokenValidationParameters = new TokenValidationParameters()
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidAudience = builder.Configuration["JWT:ValidAudience"],
                ValidIssuer = builder.Configuration["JWT:ValidIssuer"],
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Secret"]))
            };
        });

#if DEBUG
        // Add CORS configuration
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowLocalhost4202", builder => builder
                .WithOrigins("http://localhost:4201", "http://localhost:4202")
                .AllowAnyHeader()
                .AllowAnyMethod());
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
        builder.Services.AddAuthorization();
        //string connectionString = builder.Configuration.GetSection("TBDContext").Get<TBDContext>().TBDDatabaseConnectionString;
#if DEBUG
        builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer("Data Source=(localdb)\\ProjectsV13;Initial Catalog=TheBigDay;Integrated Security=True"));
#else

        builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer("Server=tcp:thebigggdaydbserver.database.windows.net,1433;Initial Catalog=TheBigDay;Persist Security Info=False;User ID=tabadmin;Password=Romilk01.;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"));
#endif
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddAuthentication();
        builder.Services.AddAuthorization();

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
        app.UseAuthentication();
        //app.MapIdentityApi<IdentityUser>()

        app.Run();
    }
}


