﻿using Microsoft.AspNetCore.Mvc;

namespace Exam_ASP.Net.Controllers
{
    public class Employee : Controller
    {
        
            public int Id { get; set; }
            public string? Name { get; set; }
            public string? Email { get; set; }
            public string? Phone { get; set; }
            public string? Department { get; set; }
        
    }
}
