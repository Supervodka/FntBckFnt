import { type } from 'jquery';
import React, { Component } from 'react';

export class goose extends Component {

    constructor(props) {
        super(props);
        this.state = { currentCount: "medved" };
        this.click = this.click.bind(this);
    }

    render() {
        return (
            <div>
                <h1>{this.state.currentCount}</h1> //получение текущей CurrentCount//
                <p>This is a simple example of white goose.</p>
                <input type="text" />

                <input type="button" onClick={this.click} /> //создание кнопки и привязка к методу click(при каждом нажатии на кнопку выполняется метод click)


             

            </div>
        );
    }

    async click() {
        let input = document.querySelector('input');
        console.log(input.value);
        let foo = { name :'Вася', age : 10 } ;

        const response = await fetch(`Goose/Foo`,
            {
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }, 
                method: 'POST',
                body: JSON.stringify(foo)
            });// отправка на контроллер

        const data = await response.json();//расшифровка данных(парсинг)??
        alert(data)
        this.setState({ currentCount: data});//отправка даты в CurrentCount
    }
   
}
