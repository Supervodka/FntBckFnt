import { extend, type } from 'jquery';
import React, { Component } from 'react';

export class Contact extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div style={{ backgroundColor: "red", margin: "10px" }}>
                <h1>Contact {this.props.item.ContactName}</h1>
                <h2>Contact {this.props.item.ContactNumber}</h2>
                <p> Contact </p>

            </div>
        );
    }
}