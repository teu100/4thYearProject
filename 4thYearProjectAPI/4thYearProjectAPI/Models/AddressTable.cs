using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace _4thYearProjectAPI.Models
{
    public class AddressTable
    {
        [Key]
        public int addressID { get; set; }

        //[Required]
        public string addressLine1 { get; set; }

        //[Required]
        public string addressLine2 { get; set; }

        //[Required]
        public string cityName { get; set; }

        //[Required]
        public string county { get; set; }

        //[Required]
        public string country { get; set; }

        //[Required]
        public string eircode { get; set; }

        //[Required]
        public int? compID { get; set; }

        
        public int? employeeID { get; set; }
    }
}