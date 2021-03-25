using System;
using System.ComponentModel.DataAnnotations;

namespace _4thYearProjectAPI.Models
{
    public class Task
    {
        [Key]
        public int taskID { get; set; }

        [Required]
        public DateTime dueDate { get; set; }
        [Required]
        public string taskDescription { get; set; }
        [Required]
        public string personResponsible { get; set; }
        [Required]
        public string statusString { get; set; }
        [Required]
        public int employeeID { get; set; }
        [Required]
        public int compID { get; set; }
        [Required]
        public int deptID { get; set; }
        [Required]
        public string priorityLevel { get; set; }
        [Required]
        public string taskName { get; set; }

    }
}