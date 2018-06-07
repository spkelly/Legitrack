import React, { Component } from 'react';

import BillHeading from './BillHeading';
import BillDescription from './BillDescription';
import BillSponsors from './BillSponsors';
import Button from '../Button/Button';


class Bill extends Component {
  render(){
    return (
      <div className="bill">
        <BillHeading title="test bill" number="1234" />
        <BillDescription text="" />
        <BillSponsors sponsors={[]} />
        <Button title="Hello World" />
      </div>
    );
  }
}

export default Bill;