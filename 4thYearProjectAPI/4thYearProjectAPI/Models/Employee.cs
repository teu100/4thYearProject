using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace _4thYearProjectAPI.Models
{
    public class Employee
    {
        [Key]
        public int employeeID { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string compRole { get; set; }
        public int compID { get; set; }
        public int deptID { get; set; }
    }
}