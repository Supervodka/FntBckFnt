import { extend, type } from 'jquery';
import React, { Component } from 'react';
import { AddContactComponent } from './AddContactComponent';
import { Contact } from './Contact';
import ContactService from '../servies/ContactService'

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

        //this.setState({ Contacts: ContactService.Get() });

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
        this.AddNew(data)                   //вызываем метод 
    }


    async AddNew(backdata) {                             //вызов метода с параметром,как я понимаю бэкдата то что пришло с контроллера?
        const response = ContactService.Add(backdata);

        this.setState({ Contacts: response });           //изменяем состояние Contacts докидывая в нее result
    }

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