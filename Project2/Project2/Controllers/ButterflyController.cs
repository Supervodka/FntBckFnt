using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project2.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ButterflyController : ControllerBase
    {

        [HttpPost] //HTTP-get запрос
        [Route("[action]")]

        public string bar(Dog n)
        {
            return $"{n.name} хуй, {n.sex} 212312";
        }

    }
    public class Dog
    {
        public string name { get; set; }
        public bool sex { get; set; }
    }
}

