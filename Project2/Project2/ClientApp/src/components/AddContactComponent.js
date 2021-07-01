import { extend, type } from 'jquery';
import React, { Component } from 'react';

export class AddContactComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {



        return (
            <div>
                <input type="text" id="NumberClient" />           //поле ввода номер

                <input type="text" id="NameClient" />             // поле ввода имя


                <input type="button" onClick={this.click.bind(this)} value="Добавить контакт" />




            </div>

        )
    }


    async click() {                                                        //вызов клик
        let input = document.getElementById("NameClient");                  // введенные данные передаются в инпут 1 и инпут 2 соотвественно по присвоенному им айди
        let input1 = document.getElementById("NumberClient");

        this.props.clickHandler(input.value, input1.value)                            //типо кликхендлер несет в себе данные двух valuе?        }

    }

}