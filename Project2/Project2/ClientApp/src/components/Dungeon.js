import { extend, type } from 'jquery';
import React, { Component } from 'react';
import { Gym } from './Gym';

export class dungeon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCount: "Welcome to Dungeon,slaves",
            slaves: ["2"]
        };

        this.click = this.click.bind(this);
    }

    render() {
;

        const items = []
        for (const [index, value] of this.state.slaves.entries()) {
            items.push(<Gym  name={value} />)
        }

        return (
            <div>
                <input type="text" id="goose"/>
                {items}
                <input type="button" onClick={this.click} value="Добавить" />

            </div>

        )
    }

    async click() {
        let input = document.querySelector("input");
        console.log(input.value)
        console.log(this.state.slaves)

        let a = this.state.slaves.concat(input.value);
        console.log(a)
        const response = await fetch(`Dungeon/master`,
            {
            
                method: 'POST',
                body: JSON.stringify(a)
               
            });

        const data = await response.json();//расшифровка данных(парсинг)??

        this.setState({ slaves: data });//отправка даты в CurrentCount
    }
}