using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project2.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class DungeonController : ControllerBase
    {
        [HttpPost] //HTTP-get запрос
        [Route("[action]")]
        public List<string> Master(List<string> items)
        {
            return items;
        }

        
    }
    
}
