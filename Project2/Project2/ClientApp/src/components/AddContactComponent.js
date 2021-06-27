import { extend, type } from 'jquery';
import React, { Component } from 'react';

export class AddContactComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

 

        return (
            <div>
                <input type="text" id="NumberClient" />

                <input type="text" id="NameClient" />
                

                <input type="button" onClick={this.click.bind(this)} value="Добавить контакт" />

                {/*<button onClick={this.props.clickHandler}>*/}


            </div>

        )
    }


        async click() {
            let input = document.getElementById("NameClient");
            let input1 = document.getElementById("NumberClient");

            this.props.clickHandler(input.value, input1.value)
        }

    }





    

