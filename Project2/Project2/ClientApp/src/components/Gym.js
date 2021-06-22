import { extend, type } from 'jquery';
import React, { Component } from 'react';

export class Gym extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div>
                <h1>Gym {this.props.name}</h1>
                <p> Gym </p>

            </div>
        );
    }
}