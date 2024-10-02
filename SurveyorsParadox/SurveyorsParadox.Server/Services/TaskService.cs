using SurveyorsParadox.Server.Models;

namespace SurveyorsParadox.Server
{
    public class TaskService : ITaskService
    {
        public List<TaskIntent> TaskIntents { get; } = new List<TaskIntent>();

        public List<ReportIntent> ReportIntents { get; } = new List<ReportIntent>();
    }
}
