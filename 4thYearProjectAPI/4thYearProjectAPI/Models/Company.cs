using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace _4thYearProjectAPI.Models
{
    public class Company
    {
        [Key]
        public double compID { get; set; }
        public string compName { get; set; }
    }
}