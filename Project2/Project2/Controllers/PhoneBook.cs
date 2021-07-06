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
        

        public void AddNew (ContactModel contact)
        {
            using (ContactContext db = new ContactContext())
            {
                db.Contacts.Add(contact);
                db.SaveChangesAsync();
                Console.WriteLine("Сохранил");
            }
        }

        [HttpPut] //определяет которое поддерживает ХТТП пост метод
        [Route("[action]")]

        public void Update (ContactModel contact)
        {
            using (ContactContext db = new ContactContext())
            {
                db.Contacts.Update(contact);
                db.SaveChangesAsync();
                Console.WriteLine("Обновил");
            }
        }
        [HttpGet] //определяет которое поддерживает ХТТП пост метод
        [Route("[action]")]

        public List<ContactModel> Get (ContactModel contact)
        {
            using (ContactContext db = new ContactContext())
            {
                db.Contacts.ToList();
                return db.Contacts.ToList();
            }

        }

        [HttpDelete] //определяет которое поддерживает ХТТП пост метод
        [Route("[action]")]

        public void Remove(int Id)
        {
            using( ContactContext db = new ContactContext())
            {
                var c = (db.Contacts.First(c => c.Id == Id));
                db.Contacts.Remove(c);
                db.SaveChanges();
                Console.WriteLine($"ты удалил элемент {Id}");
            }
        }


        [HttpGet] //определяет которое поддерживает ХТТП пост метод
        [Route("[action]")]


        public List<ContactModel> Search(string name )
        {
            using (ContactContext db = new ContactContext())
            {
                var c = (db.Contacts.Where(c => c.ContactName.Contains(name)));
               

                return (List<ContactModel>)c;
            }    
        }
    }

    

}
