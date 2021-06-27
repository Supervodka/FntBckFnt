import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { goose } from './components/JavaScript';
import { butterfly } from './components/Butterfly';
import { phonebook } from './components/PhoneBook'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/JavaScript' component={goose} />
            <Route path='/Butterfly' component={butterfly} />

            <Route path='/PhoneBook' component={phonebook} />

      </Layout>
    );
  }
}
