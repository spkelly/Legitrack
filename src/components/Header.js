import React, { Component } from 'react';


export default class Header extends Component{
  render(){
    return(
      <header className="header">
        <a href="/" className="header__logo">
          Legitrack
        </a>
      </header>
    );
  }
}