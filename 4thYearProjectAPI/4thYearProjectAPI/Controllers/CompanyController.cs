using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace _4thYearProjectDataBaseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private IConfiguration Configuration;
        
        [HttpGet]
        public ActionResult<DataTable> Get()
        {
            DataTable table = new DataTable();

            string query = @"SELECT compName,addressLine1,addressLine2,cityName,county,country,eircode 
                            FROM Company,addressTable where addressTable.compID = Company.compID ; ;";

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
