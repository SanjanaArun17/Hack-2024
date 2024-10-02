using SurveyorsParadox.Server.Models;

namespace SurveyorsParadox.Server
{
    public interface ITaskService
    {
        List<TaskIntent> TaskIntents { get; }

        List<ReportIntent> ReportIntents { get; }
    }
}
