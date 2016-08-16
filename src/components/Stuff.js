import React, { Component } from 'react';
import myFunction from './myFunction';

export default class Stuff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Simon"
    }
  }
  console.log(this.props);
  render(){
    return (
      <div>{this.state.name}</div>
      //<div>{this.props.myFunction()}</div>
    );
  }
}
