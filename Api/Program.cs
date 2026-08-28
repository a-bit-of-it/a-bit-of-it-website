using Api;
using Api.Application;
using Api.Infrastructure;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var config = builder.Configuration.Get<Config>();

if (config is null)
    throw new Exception("No configuration found.");

builder.Services.AddSingleton(config);

builder.Services.AddOpenApi();
builder.Services.AddControllers();
builder.Services.AddScoped<ContactService>();
builder.Services.AddHttpClient<INotificationService, PushoverNotificationService>();
builder.Services.AddDbContext<AppDbContext>(options => options
    .UseNpgsql(config.Database.ConnectionString)
    .UseSnakeCaseNamingConvention());
builder.Services.AddScoped<IInquiryRepository, InquiryRepository>();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.Migrate();
}

app.UseCors(policy => policy
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.MapControllers();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.Run();