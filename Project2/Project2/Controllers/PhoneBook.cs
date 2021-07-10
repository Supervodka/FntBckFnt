using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

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
            using var db = new ContactContext();
            db.Contacts.Add(contact);
            db.SaveChangesAsync();

            Console.WriteLine("Сохранил");
        }

        [HttpPut] //определяет которое поддерживает ХТТП пост метод
        [Route("[action]")]
        public void Update (ContactModel contact)
        {
            using var db = new ContactContext();
            db.Contacts.Update(contact);
            db.SaveChangesAsync();

            Console.WriteLine("Обновил");
        }

        [HttpGet] //определяет которое поддерживает ХТТП пост метод
        [Route("[action]")]
        public List<ContactModel> Get ()
        {
            using var db = new ContactContext();

            return db.Contacts.ToList();
        }

        [HttpDelete] //определяет которое поддерживает ХТТП пост метод
        [Route("[action]")]
        public void Remove(int id)
        {
            using var db = new ContactContext();
            var contactModelToRemove = (db.Contacts.Single(contact => contact.Id == id));
            db.Contacts.Remove(contactModelToRemove);
            db.SaveChanges();

            Console.WriteLine($"ты удалил элемент {id}");
        }

        [HttpGet] //определяет которое поддерживает ХТТП пост метод
        [Route("[action]")]
        public List<ContactModel> Search(string name)
        {
            using var db = new ContactContext();

            return db.Contacts.Where(contact => contact.ContactName.Contains(name)).ToList();
        }
    }
}
