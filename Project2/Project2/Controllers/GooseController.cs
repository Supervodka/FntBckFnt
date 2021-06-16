using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GooseController : ControllerBase

    {
        
        [HttpGet] //HTTP-get запрос
        public string Get(string mal) //метод получения запрос
        {
            mal = "lol";
            return mal;
        }
       
        
        
    }
}
