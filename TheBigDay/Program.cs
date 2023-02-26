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
        builder.Services.AddSwaggerGen();

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



