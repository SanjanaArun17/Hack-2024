using SurveyorsParadox.Server.Models;

namespace SurveyorsParadox.Server
{
    public interface ITaskService
    {
        IReadOnlyList<TaskIntent> TaskIntents { get; }

        IReadOnlyList<ReportIntent> ReportIntents { get; }

        void AddTask(TaskIntent taskIntent);

        void AddReport(ReportIntent reportIntent);
    }
}
