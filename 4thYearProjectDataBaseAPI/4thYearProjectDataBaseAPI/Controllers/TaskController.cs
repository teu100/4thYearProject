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
    public class TaskController : ApiController
    {
        public HttpResponseMessage Get()
        {
            DataTable table = new DataTable();

            string query = @"SELECT * FROM [dbo].[Task];";

            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["4thYearProjectDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public string Post(Task task)
        {
            try
            {
                DataTable table = new DataTable();

                string query = @"INSERT INTO Task VALUES 
                                ('" + task.dueDate + @"', '" + task.taskDescription + @"','" + task.personResponsible + @"', '"+ task.statusString + @"',
                                '" + task.employeeID  + @"', '" + task.compID + @"', '" + task.deptID + @"', '" + task.priorityLevel + @"',  '"+ task.taskName +@"');";

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

        public string Put(Task task)
        {
            try
            {
                DataTable table = new DataTable();

                string query = @"UPDATE [dbo].[Task] set dueDate = '" + task.dueDate+@"',
taskDescription = '" + task.taskDescription + @"' , 
personResponsible = '" + task.personResponsible + @"' ,
priorityLevel = '" + task.priorityLevel + @"',
taskName = '" + task.taskName + @"' WHERE taskID = " + task.taskID + @"; ";

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["4thYearProjectDB"].ConnectionString))
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
                return "Failed to update,"+e+" ";
            }
        }


        public string Delete(int id)
        {
            try
            {
                DataTable table = new DataTable();

                string query = @"DELETE FROM Task  where taskID = " + id;

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
