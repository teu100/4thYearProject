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

    public class MoveTaskController : ControllerBase
    {
        private readonly ProjectDbContext _dbContext;

        public MoveTaskController(ProjectDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Task>> Get()
        {
            var tasks = _dbContext.Task.AsEnumerable();         // AsEnumerable if you're returning
                                                                // ToList if you'll do sth with it
            return Ok(tasks);
        }



        [HttpPut]
        public ActionResult<string> Put(Task task)
        {
            try
            {
                var taskToUpdate = _dbContext.Task.FirstOrDefault(t => t.taskID == task.taskID);
                if (taskToUpdate == null) 
                    return NotFound("Task not found");


                taskToUpdate.dueDate = task.dueDate;
                taskToUpdate.taskDescription = task.taskDescription;
                taskToUpdate.personResponsible = task.personResponsible;
                taskToUpdate.statusString = task.statusString;
                taskToUpdate.priorityLevel = task.priorityLevel;
                taskToUpdate.taskName = task.taskName;

                _dbContext.SaveChanges();

                return Ok("Updated Successfully");
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Failed to update, {e}");
            }
        }

        
    }
}
