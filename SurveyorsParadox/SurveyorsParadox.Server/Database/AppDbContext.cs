using Microsoft.EntityFrameworkCore;

namespace SurveyorsParadox.Server.Database
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<TaskIntentEntity> Tasks { get; set; }
    }
}
