using System.ComponentModel.DataAnnotations;

namespace SurveyorsParadox.Server.Database
{
    public class TaskIntentEntity
    {
        [Key]
        public Guid TaskId { get; set; }

        public string JobSite { get; set; }

        public int Location { get; set; }

        public string Assignee { get; set; }

        public DateTime Date { get; set; }

        public int TaskType { get; set; }

        public string TaskDescription { get; set; }

        public string[] PointNames { get; set; } = new string[0];

        public bool IsLayoutFully { get; set; }
    }
}
