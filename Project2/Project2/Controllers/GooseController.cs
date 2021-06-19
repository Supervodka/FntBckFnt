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

        [HttpPost] //HTTP-get запрос
        [Route("[action]")]
        public string Foo(Cat s) //метод получения запрос
        {
            return $"{s.name} хуй, {s.age} 212312";


        }
        
       
       
        
        
    }
    public class Cat
    {
       public  int age { get; set; }
       public  string name { get; set; }
    }
}
