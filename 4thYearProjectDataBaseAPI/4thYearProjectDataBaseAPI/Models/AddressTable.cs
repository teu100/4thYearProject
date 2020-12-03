using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace _4thYearProjectDataBaseAPI.Models
{
    public class AddressTable
    {
        public double addressID { get; set; }
        public string addressLine1 { get; set; }
        public string addressLine2 { get; set; }
        public string cityName { get; set; }
        public string county { get; set; }
        public string country { get; set; }
        public string eircode { get; set; }
        public double compID { get; set; }
        public double employeeID { get; set; }
    }
}