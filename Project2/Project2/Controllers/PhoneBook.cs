using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project2.Controllers
{
    [ApiController]                //указываем что использует расширения НТТР АРI
    [Route("[controller]")]

    public class PhoneBook : ControllerBase            // заимствование базового Model-Viev-controller'a без визуала
    {
        [HttpPost] //определяет которое поддерживает ХТТП пост метод
        [Route("[action]")]
        public List<ContactModel> Call([FromBody] List<ContactModel> items)        // коллекция а потом данные берутся из тела запроса и передаются в коллекцию айтемс
        {
            for (int i = 0; i < items.Count; i++)                                //перечисляем все обьекты айтемс
            {
                if (!items[i].ContactName.Contains("Saved"))                      //если айтемс не saved
                {
                    items[i].ContactName = $"{items[i].ContactName} Saved";       // пиши saved
                }
            }
            return items;                                                        //и вяртай взад
        } 



        
    }
    
}
