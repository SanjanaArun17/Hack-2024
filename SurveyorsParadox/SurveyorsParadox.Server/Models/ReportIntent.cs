using System.ComponentModel.DataAnnotations;

namespace SurveyorsParadox.Server.Models
{
    public class ReportIntent
    {
        [Key]
        public Guid ReportId { get; set; }

        public string Result { get; set; } = string.Empty;
    }
}
