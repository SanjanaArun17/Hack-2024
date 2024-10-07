using System.ComponentModel.DataAnnotations;

namespace SurveyorsParadox.Server.Models
{
    public class ReportIntent
    {
        public Guid ReportId { get; set; }

        public string Location { get; set; } = string.Empty;

        public string Title { get; set; } = string.Empty;

        public string TimeTaken { get; set; } = string.Empty;

        // Add datetime

        // Add assignee

        public Dictionary<string, PointResult> ResportResults { get; set; } = new Dictionary<string, PointResult>();
    }
}
