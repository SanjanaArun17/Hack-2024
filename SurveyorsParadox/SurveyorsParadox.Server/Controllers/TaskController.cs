using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using SurveyorsParadox.Server.Models;

namespace SurveyorsParadox.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : Controller
    {
        private readonly ILogger<TaskController> logger;
        private ITaskService taskService;

        public TaskController(ILogger<TaskController> logger, ITaskService taskService)
        {
            this.logger = logger;
            this.taskService = taskService;
        }

        [HttpGet("gettasks")]
        public ActionResult<IEnumerable<TaskIntent>> GetTasks()
        {
            return this.Ok(this.taskService.TaskIntents);
        }

        [HttpGet("gettasks/{id}")]
        public ActionResult<TaskIntent> GetTaskById(Guid id)
        {
            var task = this.taskService.TaskIntents.FirstOrDefault(x => x.TaskId.Equals(id));

            if (task == null)
                return this.NotFound(new { message = "Task not found" });

            return this.Ok(task);
        }

        [HttpPost("posttask")]
        public void PostTask([FromBody] JObject jobject)
        {
            var task = jobject.ToObject<TaskIntent>();
            this.taskService.AddTask(task);
        }

        [HttpGet("getreports")]
        public ActionResult<IEnumerable<ReportIntent>> GetReports()
        {
            return this.Ok(this.taskService.ReportIntents);
        }

        [HttpGet("getreports/{id}")]
        public ActionResult<ReportIntent> GetReportsById(Guid id)
        {
            var report = this.taskService.ReportIntents.FirstOrDefault(x => x.ReportId.Equals(id));

            if (report == null)
                return this.NotFound(new { message = "Report not found" });

            return report;
        }

        [HttpPost("postreport")]
        public void PostReport([FromBody] JObject jobject)
        {
            var report = jobject.ToObject<ReportIntent>();
            this.taskService.AddReport(report);
        }
    }
}
