using Microsoft.EntityFrameworkCore;
using System.Reflection;
using TheBigDay.DBContext;

public static class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen(options =>
        {
            //options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "API", Version = "v1" });

            //options.AddSecurityDefinition("oauth2", new Microsoft.OpenApi.Models.OpenApiSecurityScheme
            //{
            //    Type = Microsoft.OpenApi.Models.SecuritySchemeType.OAuth2,
            //    Flows = new Microsoft.OpenApi.Models.OpenApiOAuthFlows
            //    {
            //        ClientCredentials = new Microsoft.OpenApi.Models.OpenApiOAuthFlow
            //        {
            //            TokenUrl = new Uri(""),
            //            Scopes = new Dictionary<string, string>
            //            {
            //                {"api", "API" }
            //            }
            //        }
            //    }
            //});
        });

        builder.Configuration.AddEnvironmentVariables().AddUserSecrets(Assembly.GetExecutingAssembly(), true);

        string connectionString = builder.Configuration.GetSection("TBDContext").Get<TBDContext>().TBDDatabaseConnectionString;
        builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer(connectionString));

        var app = builder.Build();



        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }



        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }

    public class TBDContext
    {
        public string TBDDatabaseConnectionString { get; set; }
    }
}



