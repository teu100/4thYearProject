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
    public class EmployeeController : ControllerBase
    {
        private readonly ProjectDbContext _dbContext;

        public EmployeeController(ProjectDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            var employes = _dbContext.Employee.AsEnumerable();         // AsEnumerable if you're returning
                                                                // ToList if you'll do sth with it
            return Ok(employes);
        }

        [Route("getByCompID")]
        [HttpGet]
        public ActionResult<IEnumerable<Task>> Get(int compID)
        {
            var emp = _dbContext.Employee.Where(e => e.compID.Equals(compID)).AsEnumerable();
            return Ok(emp);
        }


        [HttpPost]
        public ActionResult<string> Post(Employee newEmployee)
        {
            try
            {
                _dbContext.Employee.Add(newEmployee);
                _dbContext.SaveChanges();

                return Ok("Added Successfully");
            }
            catch (Exception)
            {
                return StatusCode(500, "Failed to Add");
            }
        }


        [HttpPut]
        public ActionResult<string> Put(Employee employee)
        {
            try
            {
                var employeeToUpdate = _dbContext.Employee.FirstOrDefault(e => e.employeeID == employee.employeeID);
                if (employeeToUpdate == null)
                    return NotFound("Employee Not Found");

                //employeeToUpdate.firstName = employee.firstName;
                employeeToUpdate.lastName = employee.lastName;
                employeeToUpdate.email = employee.email;
                employeeToUpdate.compRole = employee.compRole;
                //employeeToUpdate.compID = employee.compID;
                //employeeToUpdate.deptID = employee.deptID;

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
                var employeeToDelete = _dbContext.Employee.FirstOrDefault(e => e.employeeID == id);
                if (employeeToDelete == null)
                    return NotFound("Employee not found.");

                _dbContext.Employee.Remove(employeeToDelete);
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
