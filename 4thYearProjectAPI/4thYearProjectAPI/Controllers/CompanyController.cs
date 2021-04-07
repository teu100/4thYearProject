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

    public class CompanyController : ControllerBase
    {
        private readonly ProjectDbContext _dbContext;

        public CompanyController(ProjectDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Company>> Get(int id)
        {
            try
            {
                //string query = @"SELECT compName,addressLine1,addressLine2,cityName,county,country,eircode 
                //         FROM Company,addressTable where addressTable.compID = Company.compID ; ;";


                var address = _dbContext.AddressTable.Where(a => a.compID.Equals(id)).FirstOrDefault();
                var compDetails = _dbContext.Company.Where(c => c.compID.Equals(id)).FirstOrDefault();
                CompWAddress compWAddress = new CompWAddress();
                compWAddress.companyDetails = compDetails;

                compWAddress.companyAddress = address;
                
                return Ok(compWAddress);

            }
            catch (Exception)
            {
                return StatusCode(500, "Failed to find company");
            }
            

            
        }
    }
}
