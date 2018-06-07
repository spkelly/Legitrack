import React, { Component } from 'react';


export default class Button extends Component{
  render(){
    return(
      <div className="btn" onClick={this.props.onClick}>
        {this.props.title}
      </div>
    )
  }
}

