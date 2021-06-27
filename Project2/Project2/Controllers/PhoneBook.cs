using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project2.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class PhoneBook : ControllerBase
    {
        [HttpPost] //HTTP-get запрос
        [Route("[action]")]
        public List<ContactModel> Call([FromBody] List<ContactModel> items)
        {
            for (int i = 0; i < items.Count; i++)
            {
                if (!items[i].ContactName.Contains("Saved"))
                {
                    items[i].ContactName = $"{items[i].ContactName} Saved";
                }
            }
            return items;
        }



        
    }
    
}
