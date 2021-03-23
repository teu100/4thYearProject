using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using _4thYearProjectDataBaseAPI.Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;

namespace _4thYearProjectDataBaseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private IConfiguration Configuration;

        [HttpGet]
        public ActionResult<DataTable> Get()
        {
            DataTable table = new DataTable();

            string query = @"SELECT compName,addressLine1,addressLine2,cityName,county,country,eircode 
                            FROM Company,addressTable where addressTable.employeeID = Company.employeeID ;";

            using (var con = new SqlConnection(Configuration.GetValue<string>("DbconnectionString")))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Ok(table);
        }


    } 
}
