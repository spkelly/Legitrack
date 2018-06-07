import React, { Component } from 'react';

export default class BillDescription extends Component{
  render(){
    return(
      <h2>{this.props.text}</h2>
    )
  }
}