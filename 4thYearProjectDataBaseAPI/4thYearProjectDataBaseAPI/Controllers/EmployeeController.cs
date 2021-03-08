using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using _4thYearProjectDataBaseAPI.Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace _4thYearProjectDataBaseAPI.Controllers
{
    public class EmployeeController : ApiController
    {
        public HttpResponseMessage Get()
        {
            DataTable table = new DataTable();

            string query = @"SELECT employeeID, firstName, lastName, email, compRole FROM Employee;";

            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["4thYearProjectDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public string Post(Employee emp) 
        {
            try 
            {
                DataTable table = new DataTable();

                string query = @"INSERT INTO dbo.Employee VALUES ('" + emp.firstName + @"', '" + emp.lastName + @"','" + emp.email + @"',
                            '"+ emp.compRole + @"', '" + emp.compID + @"', '"+ emp.deptID + @"');";

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["4thYearProjectDB"].ConnectionString))
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


        public string Put(Employee emp) 
        {
            try
            {
                DataTable table = new DataTable();

                string query = @"UPDATE dbo.Employee set lastName = '"+emp.lastName+ @"', compRole = '" + emp.compRole + @"' ,email = '" + emp.email+ @"' where employeeID = "+emp.employeeID+@";";

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["4thYearProjectDB"].ConnectionString))
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


        public string Delete(int id)
        {
            try
            {
                DataTable table = new DataTable();

                string query = @"DELETE FROM dbo.Employee  where employeeID = " + id ;

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["4thYearProjectDB"].ConnectionString))
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
