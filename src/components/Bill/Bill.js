import React, { Component } from 'react';


import BillDescription from './BillDescription';
import Button from '../Button/Button';

class Bill extends Component {
  render(){
    return (
      <div className="bill">
        <h2>I'm Just a bill</h2>
        <BillDescription />
        <Button title="Hello World" />
      </div>
    );
  }
}

export default Bill;