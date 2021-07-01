import { extend, type } from 'jquery';
import React, { Component } from 'react';

export class Contact extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div style={{ backgroundColor: "red", margin: "10px" }}>                        {/*то ,что из себя будет представлять объект Contact*/}
                <h1>Contact {this.props.item.ContactName}</h1>                              {/*//два заголовка с имя номер*/}
                < h2 > Contact {this.props.item.ContactNumber}</h2>                            {/*и чето вручную прописанное*/}
                <p> Contact </p>
                <input type="button" onClick={this.remove.bind(this)} value="remove" />
                <h3> {this.props.item.Id}</h3>
               
            </div>
        );

    }


    async remove() {
        this.props.remove(this.props.item.Id)
    }
}