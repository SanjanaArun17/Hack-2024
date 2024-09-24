namespace SurveyorsParadox.Server.Models
{
    public class TaskIntent
    {
        public string JobSiteName { get; set; }

        public int Floor { get; set; }

        public string Assignee { get; set; }

        public DateTime DateTime { get; set; }

        public string TaskType { get; set; }

        public string TaskDescription { get; set; }
    }
}
