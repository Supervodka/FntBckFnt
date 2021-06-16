import { type } from 'jquery';
import React, { Component } from 'react';

export class goose extends Component {

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.click = this.click.bind(this);
    }

    render() {
        return (
            <div>
                <h1>{this.state.currentCount}</h1> //получение текущей CurrentCount//
                <p>This is a simple example of white goose.</p>

                <input type="button" onClick={this.click} /> //создание кнопки и привязка к методу click(при каждом нажатии на кнопку выполняется метод click)
                

            </div>
        );
    }

    async click() {
        const response = await fetch('Goose');// получение с GooseController
        const data = await response.json();//расшифровка данных(парсинг)??
        this.setState({ currentCount: data });//отправка даты в CurrentCount

    }
   
}

