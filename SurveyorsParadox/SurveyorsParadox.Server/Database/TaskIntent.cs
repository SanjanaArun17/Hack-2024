using System.ComponentModel.DataAnnotations;

namespace SurveyorsParadox.Server.Database
{
    public class TaskIntent
    {
        [Key]
        public Guid TaskId { get; set; }

        public string JobSite { get; set; } = "Alpha";

        public int Location { get; set; } = 1;

        public string Assignee { get; set; } = "Alpha";

        public DateTime Date { get; set; } = DateTime.Now;

        public int TaskType { get; set; } = 1;

        public string TaskDescription { get; set; } = "Alpha";

        public string[] PointNames { get; set; } = new string[0];

        public bool IsLayoutFully { get; set; } = false;
    }
}
