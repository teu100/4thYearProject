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
    public class CompanyController : ApiController
    {
        public HttpResponseMessage Get()
        {
            DataTable table = new DataTable();

            string query = @"SELECT compName,addressLine1,addressLine2,cityName,county,country,eircode 
                            FROM Company,addressTable where addressTable.compID = Company.compID ; ;";

            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["4thYearProjectDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
    }
}
