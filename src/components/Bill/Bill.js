import React, { Component } from 'react';

import BillHeading from './BillHeading';
import BillTracker from './BillTracker';
import BillDescription from './BillDescription';
import BillSponsors from './BillSponsors';
import VoteContainer from '../Containers/VoteContainer';

// TODO: Get Last updated date and event from search page
export default class Bill extends Component {
  render(){
    return (
      <div className="bill">
        <BillHeading title={this.props.currentBill.title} number={this.props.currentBill.number} />
        <div className="bill__details">
          <BillTracker  stats={this.props.currentBill.stats} 
                        lastAction={"Govenor Signed"} 
                        lastUpdated={"last Updated placeholder"} />
          <BillDescription text={this.props.currentBill.description} />
          <BillSponsors sponsors={this.props.currentBill.sponsors} />
          <VoteContainer votes={this.props.currentBill.votes} />
        </div>
      </div>
    );
  }
}


