using Api;
using Api.Application;
using Api.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

var config = builder.Configuration.Get<Config>();

if (config is null)
    throw new Exception("No configuration found.");

builder.Services.AddSingleton(config);

builder.Services.AddOpenApi();
builder.Services.AddControllers();
builder.Services.AddSingleton<ContactService>();
builder.Services.AddHttpClient<INotificationService, PushoverNotificationService>();

var app = builder.Build();

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