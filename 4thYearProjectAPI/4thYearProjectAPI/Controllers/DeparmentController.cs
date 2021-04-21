using _4thYearProjectAPI.Models;
using _4thYearProjectDataBaseAPI.Models;
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

    public class DeparmentController : ControllerBase
    {
        private readonly ProjectDbContext _dbContext;

        public DeparmentController(ProjectDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Department>> Get()
        {
            var departments = _dbContext.Department.AsEnumerable();         // AsEnumerable if you're returning
                                                                // ToList if you'll do sth with it
            return Ok(departments);
        }

        [Route("getByCompID")]
        [HttpGet]
        public ActionResult<IEnumerable<Department>> Get(int compID)
        {
            var departments = _dbContext.Department.Where(d => d.compID.Equals(compID)).AsEnumerable();
            return Ok(departments);
        }

        [HttpPost]
        public ActionResult<string> Post(Department newDepartment)
        {
            try
            {
                _dbContext.Department.Add(newDepartment);
                _dbContext.SaveChanges();

                return Ok("Added Successfully");
            }
            catch (Exception)
            {
                return StatusCode(500, "Failed to Add");
            }
        }






    }
}
