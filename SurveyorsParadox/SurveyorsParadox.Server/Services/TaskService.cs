using SurveyorsParadox.Server.Database;
using SurveyorsParadox.Server.Models;

namespace SurveyorsParadox.Server
{
    public class TaskService : ITaskService
    {
        private readonly List<Models.TaskIntent> taskIntents = new ();
        private readonly List<ReportIntent> reportIntents = new();
        private readonly AppDbContext appDbContext;

        public TaskService(AppDbContext appDb)
        {
            this.appDbContext = appDb;
        }

        public IReadOnlyList<Models.TaskIntent> TaskIntents => this.taskIntents;

        public IReadOnlyList<ReportIntent> ReportIntents => this.reportIntents;

        public void AddReport(ReportIntent reportIntent)
        {
            this.reportIntents.Add(reportIntent);            
        }

        public void AddTask(Models.TaskIntent taskIntent)
        {
            this.taskIntents.Add(taskIntent);
            this.appDbContext.Add(new Database.TaskIntent()
            {
                Assignee = taskIntent.Assignee,
                Date = taskIntent.Date,
                TaskDescription = taskIntent.TaskDescription,
                IsLayoutFully = taskIntent.IsLayoutFully,
                JobSite = taskIntent.JobSite,
                Location = taskIntent.Location,
                PointNames = taskIntent.PointNames,
                TaskId = taskIntent.TaskId,
                TaskType = taskIntent.TaskType,
            });

            //this.appDbContext.SaveChanges();
        }
    }
}
