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
    public class EmployeeController : ControllerBase
    {
        private IConfiguration Configuration;
        
        [HttpGet]
        public ActionResult<DataTable> Get()
        {
            DataTable table = new DataTable();

            string query = @"SELECT employeeID, firstName, lastName, email, compRole FROM Employee;";

            using (var con = new SqlConnection(Configuration.GetValue<string>("DbconnectionString")))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Ok(table);
        }

        [HttpPost]
        public string Post(Employee emp) 
        {
            try 
            {
                DataTable table = new DataTable();

                string query = @"INSERT INTO dbo.Employee VALUES ('" + emp.firstName + @"', '" + emp.lastName + @"','" + emp.email + @"',
                            '"+ emp.compRole + @"', '" + emp.compID + @"', '"+ emp.deptID + @"');";

                using (var con = new SqlConnection(Configuration.GetValue<string>("DbconnectionString")))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Added Successfully";
            }
            catch (Exception) 
            {
                return "Failed to Add";
            }
        }

        [HttpPut]
        public string Put(Employee emp) 
        {
            try
            {
                DataTable table = new DataTable();

                string query = @"UPDATE dbo.Employee set lastName = '"+emp.lastName+ @"', compRole = '" + emp.compRole + @"' ,email = '" + emp.email+ @"' where employeeID = "+emp.employeeID+@";";

                using (var con = new SqlConnection(Configuration.GetValue<string>("DbconnectionString")))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Updated Successfully";
            }
            catch (Exception)
            {
                return "Failed to Update";
            }
        }

        [HttpDelete]
        public string Delete(int id)
        {
            try
            {
                DataTable table = new DataTable();

                string query = @"DELETE FROM dbo.Employee  where employeeID = " + id ;

                using (var con = new SqlConnection(Configuration.GetValue<string>("DbconnectionString")))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Deleted Successfully";
            }
            catch (Exception)
            {
                return "Failed to delete";
            }
        }
    }
}
