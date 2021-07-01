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

            using (ContactContext db = new ContactContext())
            {
                db.Contacts.AddRange(items);
               
                db.SaveChanges();
                Console.WriteLine("Объекты успешно сохранены");


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


        [HttpGet] //определяет которое поддерживает ХТТП пост метод
        [Route("[action]")]

        public List<ContactModel> GetAll()
        {
            using (ContactContext db = new ContactContext())
               return db.Contacts.ToList();

                
        }



        [HttpDelete] //определяет которое поддерживает ХТТП пост метод
        [Route("[action]")]
        public  void  RemoveById(int id)
        {
            using (ContactContext db = new ContactContext())
            {
                var c = (db.Contacts.First(x => x.Id == id));
                db.Contacts.Remove(c);

            }

            
                


        }
    }
    

}
