namespace SurveyorsParadox.Server.Models
{
    public class TaskIntent
    {
        public Guid TaskId { get; set; }

        public string JobSite { get; set; }

        public int Location { get; set; }

        public string Assignee { get; set; }

        public DateTime Date { get; set; }

        public int TaskType { get; set; }

        public string TaskDescription { get; set; }

        public string[] PointNames { get; set; }

        public bool IsLayoutFully { get; set; }
    }
}
