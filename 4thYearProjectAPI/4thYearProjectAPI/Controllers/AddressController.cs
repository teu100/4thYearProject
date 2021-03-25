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

    public class AddressTableController : ControllerBase
    {
        private readonly ProjectDbContext _dbContext;

        public AddressTableController(ProjectDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<AddressTable>> Get()
        {

                //string query = @"SELECT compName,addressLine1,addressLine2,cityName,county,country,eircode 
                //         FROM Company,addressTable where addressTable.compID = Company.compID ; ;";


                var companyAdddress = _dbContext.AddressTable.AsEnumerable();

                return Ok(companyAdddress);

        }
    }
}
