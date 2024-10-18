using Microsoft.EntityFrameworkCore;
using SurveyorsParadox.Server.Database;
using SurveyorsParadox.Server;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddNewtonsoftJson();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register the DbContext and SQL Server provider
//builder.Services.AddDbContext<AppDbContext>(options =>
    //options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddSingleton<ITaskService, TaskService>();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();


// Firebase setup

/*Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
TODO: Add SDKs for Firebase products that you want to use

https://firebase.google.com/docs/web/setup#available-libraries


Your web app's Firebase configuration

For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqHA6FGw-o-mX29C0F_0oZY-JFlgr4N-k",
  authDomain: "surveyors-paradox.firebaseapp.com",
  databaseURL: "https://surveyors-paradox-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "surveyors-paradox",
  storageBucket: "surveyors-paradox.appspot.com",
  messagingSenderId: "163992451968",
  appId: "1:163992451968:web:2a738780092c007e2c1f65",
  measurementId: "G-HN94VX9LXQ"
};

Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/
