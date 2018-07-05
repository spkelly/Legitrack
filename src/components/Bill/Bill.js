import React, { Component } from 'react';

import BillHeading from './BillHeading';
import BillDescription from './BillDescription';
import BillSponsors from './BillSponsors';
import Button from '../Button/Button';

// TODO: Seperate redux functionality into container
// TODO: Clean up renderBill funtion maybe put it in presentational component

export default class Bill extends Component {

  render(){
    return (
      <div>
        <button onClick={this.props.goBack}>back</button>
        <BillHeading title={this.props.currentBill.title} number={this.props.currentBill.number} />
        <BillDescription text={this.props.currentBill.description} />
        <BillSponsors sponsors={this.props.currentBill.sponsors} />
        <Button title="Hello World" /> 
      </div>
    );
  }
}


