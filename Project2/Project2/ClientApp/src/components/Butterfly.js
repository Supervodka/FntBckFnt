import { type } from 'jquery';
import React, { Component } from 'react';

export class butterfly extends Component {

    constructor(props) {
        super(props);
        this.state = { currentCount: "поставьте имя" };
     
        this.click1 = this.click1.bind(this);
        this.click2 = this.click2.bind(this);
    }
    render() {
        return (
            <div>
                <h1>{this.state.currentCount}</h1> 
                <p>Dog example.</p>

                <input type="text" id="input" />

                <input type="button" onClick={this.click1} value="парень" />

                <input type="button" onClick={this.click2} value ="девушка" />





            </div>
        );
    }
    async click1()
    {
        let input1 = document.querySelector("input");
        console.log(input1.value)
        this.run({ name: input1.value, sex: true })
    }
    async click2()
    {
        let input2 = document.querySelector("input");
        console.log(input2.value)
        this.run({ name: input2.value, sex: false })

    }

    async run(bar)
    {
        const response = await fetch(`butterfly/bar`,
            {
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                method: 'POST',
                body: JSON.stringify(bar)
            });// отправка на контроллер

        const data = await response.text();//расшифровка данных(парсинг)??
        alert(data)
        this.setState({ currentCount: data });//отправка даты в CurrentCount
    }
}