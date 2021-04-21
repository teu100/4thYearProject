using System.ComponentModel.DataAnnotations;

namespace _4thYearProjectDataBaseAPI.Models
{
    public class Department
    {
        [Key]
        public int deptID { get; set; }
        public string deptName { get; set; }
        public int compID { get; set; }
    }
}