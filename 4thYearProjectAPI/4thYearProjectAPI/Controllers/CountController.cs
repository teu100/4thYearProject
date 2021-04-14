using _4thYearProjectAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace _4thYearProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class CountController : ControllerBase
    {
        private readonly ProjectDbContext _dbContext;

        public CountController(ProjectDbContext dbContext)
        {
            _dbContext = dbContext;
        }



        [HttpGet]
        public ActionResult<IEnumerable<Task>> Get()
        {
            int[] tasksCount = new int[3];
            tasksCount[0] = _dbContext.Task.Where(t => t.statusString.Equals("To do")).ToList().Count();
            tasksCount[1] = _dbContext.Task.Where(t => t.statusString.Equals("In Progress")).ToList().Count();
            tasksCount[2] = _dbContext.Task.Where(t => t.statusString.Equals("Done")).ToList().Count();
            return Ok(tasksCount);
        }

        [Route("getTaskDueSoon")]
        [HttpGet]
        public ActionResult<IEnumerable<Task>> Get(DateTime date)
        {
            DateTime fiveDays = date.AddDays(5);
            var tasks = _dbContext.Task.Where(t => t.dueDate <= fiveDays && t.dueDate > date).ToList();
            return tasks;
        }

    }
}
