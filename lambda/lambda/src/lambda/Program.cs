using lambda.Controllers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Add AWS Lambda support. When application is run in Lambda Kestrel is swapped out as the web server with Amazon.Lambda.AspNetCoreServer. This
// package will act as the webserver translating request and responses between the Lambda event source and ASP.NET Core.
builder.Services.AddAWSLambdaHosting(LambdaEventSource.RestApi);

var app = builder.Build();


app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.MapGet("/", () =>
{
    List<Event> data = new List<Event>()
    {
        new Event(title: "Code & Coffee",
            date: "1/7, 2024 | Sunday",
            time: "12pm - 3pm CST"),
        new Event(title: "Code & Coffee2",
            date: "1/14, 2024 | Sunday",
            time: "12pm - 3pm CST"),
        new Event(title: "Code & Coffee3",
            date: "1/21, 2024 | Sunday",
            time: "12pm - 3pm CST"),
    };
    return data;
   
});

app.Run();