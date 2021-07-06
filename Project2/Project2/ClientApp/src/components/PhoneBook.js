import { extend, type } from 'jquery';
import React, { Component } from 'react';
import { AddContactComponent } from './AddContactComponent';
import { Contact } from './Contact';

class ContactModel {  //cоздаем дата класс
    ContactName ;   //первое свойство
    ContactNumber; // и второе
    Id;
}


export class phonebook extends Component {  //наследованный класс от Component

    constructor(props) {  //вызываем конструктор класса на наследованном классе
        super(props);   // определяем ф-цию constructor внутри компонента на основе класса Component



        this.state = {                    // текущее значение state класса phonebook
            Contacts: [] // представляет собой свойство Contacts имеющее два обьекта дата класса
        };

        this.click = this.click.bind(this);//как я понимаю тут мы говорим о том что метод клик будет завязан на изменение свойств(в нашем случае дополнения ) 27 и 28 строки,бишь добавление новый Contact
        this.initialize();
    }

    async initialize() {

        const response = await fetch(`PhoneBook/GetAll`,       // запрос на бэк по указанному маршруту
            {
                headers: {
                    'Content-Type': 'application/json;'      //указываем что это обьект ,типо?
                },

                method: 'Get',                             //режим запроса post


            });

        const data = await response.json();          //ждем возвращение обьекта жейсон


        let result = data.map(function (obj) {          //создаем переменную и присваиваем ей значение массива который создает функция мар с функцией 
            return {                                    //с обьектами внутри?
                ContactName: obj.contactName,             //возвращаем в резалт два обьекта класса к которым мы еще прибавили saved?
                ContactNumber: obj.contactNumber,
                Id: obj.id,
            }
        });
        this.setState({ Contacts: result });



    }

    render() {                 //обновляем

        const items = []                //создаем массив айтемов,внутри которых будут контакты
        Array.prototype.forEach.call(this.state.Contacts, contactItem => {   //типо мы перечисляем все контакты,а потом три раза ContactItem
            items.push(<Contact item={contactItem} remove={this.Remove.bind(this)} />)                       //ы
        });


        //вызываем АддКонтакт с возвратом введенных данных и кнопкой которая зибиндина на Аддконтакт
        //Потом у нас фигурирует Кликхендлер,который вообще в последней строке метода клик и да
        //пропса value,которые я честно говоря вообще не выкупил куда идут
        // ну и по концовке значение айтемс,которые вроде как заполняют контактс,которые вообще в массиве и честно говоря мне это напоминает про иглу,яйцо и гуся
        return (
            <div>

                <AddContactComponent clickHandler={this.click} />
                {items}


            </div>

        )
    }
    //далее на очереди(тк асинхронно) идет метод с двумя входящими параметрами 
    // который вызывает AddNewContact ,в котором тоже два параметра,которые мы завязали на создание значений в 
    // свойствах обьектов дата класса(???)
    // кста в контроллере КонтактМодел ни одной ссылки на КонтактНамбер,стрянно
    async click(a, b) {

        this.AddNewContact(a, b);
    }

    AddNewContact(NewName, NewNumber) {

        const Contact1 = new ContactModel();
        Contact1.ContactName = NewName;
        Contact1.ContactNumber = NewNumber;
       

        let data = this.state.Contacts;       //тут вопрос раз мы чето изменили,то почему без Setstate

        data.push(Contact1)                     //пушим данные Контакт 1,кста почему если есть переменная после слияния,или мы пушим контакт в дату? бле :(
        this.SaveOnBack(data)                   //вызываем метод 
    }


    async SaveOnBack(backdata) {                             //вызов метода с параметром,как я понимаю бэкдата то что пришло с контроллера?
        const response = await fetch(`PhoneBook/Call`,       // запрос на бэк по указанному маршруту
            {
                headers: {
                    'Content-Type': 'application/json;'      //указываем что это обьект ,типо?
                },

                method: 'POST',                             //режим запроса post
                body: JSON.stringify(backdata)

            });

        const data = await response.json();          //ждем возвращение обьекта жейсон


        let result = data.map(function (obj) {          //создаем переменную и присваиваем ей значение массива который создает функция мар с функцией 
            return {                                    //с обьектами внутри?
                ContactName: obj.contactName,             //возвращаем в резалт два обьекта класса к которым мы еще прибавили saved?
                ContactNumber: obj.contactNumber,
                ContactId: obj.Id,
            }
        });
        this.setState({ Contacts: result });           //изменяем состояние Contacts докидывая в нее result
    }

    Hui = 7

    Remove(id) {
        let massivAfterFiltration=[]

        Array.prototype.forEach.call(this.state.Contacts, contactItem => {

            if (contactItem.Id !== id) {
                massivAfterFiltration.push(contactItem)
                
            }

        });

        this.setState({ Contacts: massivAfterFiltration });
        this.forceUpdate()
    };
}