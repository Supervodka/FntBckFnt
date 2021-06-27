import { extend, type } from 'jquery';
import React, { Component } from 'react';
import { AddContactComponent } from './AddContactComponent';
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
            Contacts: [Contact1, Contact2]
        };

        
 
        



        this.click = this.click.bind(this);
    }

    render() {
       
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

                <AddContactComponent clickHandler={this.click} />
                
                {items}
            

            </div>

        )
    }

    async click(a,b) {

        this.AddNewContact(a, b);
    }

    AddNewContact(NewName, NewNumber) {

        const Contact1 = new ContactModel();
        Contact1.ContactName = NewName;
        Contact1.ContactNumber = NewNumber;

        let data = this.state.Contacts;

        var joined = this.state.Contacts.concat(Contact1);
        //this.setState({ myArray: joined })

        data.push(Contact1)
        this.SaveOnBack(data)
    }


    async SaveOnBack(backdata) {
        const response = await fetch(`PhoneBook/Call`,
            {
                headers: {
                    'Content-Type': 'application/json;'
                },

                method: 'POST',
                body: JSON.stringify(backdata)

            });

        const data = await response.json();


       let result = data.map(function (obj) {
            return {
                ContactName: obj.contactName,
                ContactNumber: obj.contactNumber,
            }
        });
        this.setState({ Contacts: result});
    }
}


