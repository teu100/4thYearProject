using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace _4thYearProjectDataBaseAPI.Models
{
    public class Employee
    {
        [Key]
        public double employeeID { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string passwordString { get; set; }
        public string compRole { get; set; }
        public double compID { get; set; }
        public double deptID { get; set; }
    }
}