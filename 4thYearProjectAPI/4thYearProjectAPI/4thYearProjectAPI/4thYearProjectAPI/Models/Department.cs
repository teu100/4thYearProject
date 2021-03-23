using System.ComponentModel.DataAnnotations;

namespace _4thYearProjectDataBaseAPI.Models
{
    public class Department
    {
        [Key]
        public double deptID { get; set; }
        public string deptName { get; set; }
        public double compID { get; set; }
    }
}