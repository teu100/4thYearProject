using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace _4thYearProjectDataBaseAPI.Models
{
    public class Task
    {
        public int taskID { get; set; }
        public DateTime dueDate { get; set; }
        public string taskDescription { get; set; }
        public string personResponsible { get; set; }
        public string statusString { get; set; }
        public double employeeID { get; set; }
        public double compID { get; set; }
        public double deptID { get; set; }
        public string priorityLevel { get; set; }
        public string taskName { get; set; }

    }
}