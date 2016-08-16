import React, { Component } from 'react';
import Stuff from './Stuff';
import NewThing from './NewThing';
import myFunction from './myFunction';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Hello, world!</h1>
        <p>Let us get funky.</p>
        <p>test</p>
        <Stuff />
        <NewThing />
      </div>

    );
  }
}
