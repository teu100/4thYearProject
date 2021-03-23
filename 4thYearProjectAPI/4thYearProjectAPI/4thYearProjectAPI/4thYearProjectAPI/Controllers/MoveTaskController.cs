using _4thYearProjectDataBaseAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Data;
using System.Data.SqlClient;

namespace _4thYearProjectDataBaseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class MoveTaskController : ControllerBase
    {
        private IConfiguration Configuration;

        [HttpGet]
        public ActionResult<DataTable> Get()
        {
            DataTable table = new DataTable();

            string query = @"SELECT * FROM [dbo].[Task];";

            using (var con = new SqlConnection(Configuration.GetValue<string>("DbconnectionString")))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Ok(table);
        }

        [HttpPut]
        public string Put(MoveTask task)
        {
            try
            {
                DataTable table = new DataTable();

                string query = @"UPDATE [dbo].[Task] set statusString = '" + task.statusString + @"' WHERE taskID = " + task.taskID + @"; ";

                using (var con = new SqlConnection(Configuration.GetValue<string>("DbconnectionString")))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Updated Successfully";
            }
            catch (Exception e)
            {
                return "Failed to update," + e + " ";
            }
        }



    }
}
