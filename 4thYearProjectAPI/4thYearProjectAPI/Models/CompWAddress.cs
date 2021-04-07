using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _4thYearProjectAPI.Models
{
    public class CompWAddress//Company Details with address being returned
    {
        public Company companyDetails { get; set; }
        public AddressTable companyAddress { get; set; }

    }
}
