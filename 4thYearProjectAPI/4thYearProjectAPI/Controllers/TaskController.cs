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

    public class TaskController : ControllerBase
    {
        private readonly ProjectDbContext _dbContext;

        public TaskController(ProjectDbContext dbContext)
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

        [Route("getByStatusString")]
        [HttpGet]
        public ActionResult<IEnumerable<Task>> Get(string statusString)
        {
            var tasks = _dbContext.Task.Where(t => t.statusString.Equals(statusString)).AsEnumerable();
            return Ok(tasks);
        }

        [HttpPost]
        public ActionResult<string> Post(Task newTask)
        {
            try
            {
                _dbContext.Task.Add(newTask);
                _dbContext.SaveChanges();

                return Ok("Added Successfully");
            }
            catch (Exception)
            {
                return StatusCode(500,"Failed to Add");
            }
        }

        [HttpPut]
        public ActionResult<string> Put(Task task)
        {
            try
            {
                var taskToUpdate = _dbContext.Task.FirstOrDefault(t => t.taskID == task.taskID);
                if (taskToUpdate == null) return NotFound("Task not found");

                taskToUpdate.dueDate = task.dueDate.AddDays(1);
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



        [HttpDelete]
        public ActionResult<string> Delete(int id)
        {
            try
            {
                var taskToDelete = _dbContext.Task.FirstOrDefault(t => t.taskID == id);
                if (taskToDelete == null) return NotFound("Task not found");

                _dbContext.Task.Remove(taskToDelete);
                _dbContext.SaveChanges();

                return Ok("Deleted Successfully");
            }
            catch (Exception)
            {
                return StatusCode(500, "Failed to delete");
            }
        }
    }
}
