import { extend, type } from 'jquery';
import React, { Component } from 'react';
import { Contact } from './Contact';

class ContactModel {
    ContactName ;
    ContactNumber;
}


export class phonebook extends Component {
    constructor(props) {
        super(props);

        const Contact1 = new ContactModel();
        Contact1.ContactName = "Vasya";
        Contact1.ContactNumber = "300500";

        const Contact2 = new ContactModel();
        Contact2.ContactName = "Kol";
        Contact2.ContactNumber = "6003003";

        

        this.state = {
            currentCount: "Welcome to PhoneBook",
            Contacts: [Contact1, Contact2]
        };

        this.click = this.click.bind(this);
    }

    render() {
;         
        const items = []
        Array.prototype.forEach.call(this.state.Contacts, contactItem => {
            items.push(<Contact item={contactItem} />)
        });

        //const items = []
        //this.state.slaves.forEach(slave => items.push(<Gym name={slave} />));

        { //for (const [index, value] of this.state.slaves.entries()) {
           /* items.push(<Gym  name={value} />)*/
        }
       
        return (
            <div>
                <input type="text" id="NumberClient" />

                <input type="text" id="NameClient"/>
                {items}
            
                <input type="button" onClick={this.click} value="Добавить контакт" />

            </div>

        )
    }

    async click() {
        let input = document.getElementById("NameClient");
        let input1 = document.getElementById("NumberClient");
        this.AddNewContact(input.value, input1.value);
    }

    AddNewContact(NewName, NewNumber) {

        const Contact1 = new ContactModel();
        Contact1.ContactName = NewName;
        Contact1.ContactNumber = NewNumber;

        let data = this.state.Contacts;

        data.push(Contact1)

        this.SaveOnBack(data)
    }


    async SaveOnBack(backdata) {
        const response = await fetch(`PhoneBook/call`,
            {
                headers: {
                    'Content-Type': 'application/json;'
                },

                method: 'POST',
                body: JSON.stringify(backdata)

            });

        const data = await response.json();

        this.setState({ Contacts: data});
    }
}


