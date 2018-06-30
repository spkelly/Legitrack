import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import BillHeading from './BillHeading';
import BillDescription from './BillDescription';
import BillSponsors from './BillSponsors';
import Button from '../Button/Button';
import _ from 'lodash';
import {GridLoader} from 'react-spinners';

// TODO: Seperate redux functionality into container
// TODO: Clean up renderBill funtion maybe put it in presentational component

class Bill extends Component {


  //TODO: Look for way to rerender page without having to request new bill
  componentWillMount(){
      this.props.fetchBill(this.props.match.params.id);
  }
  renderBill(){
    if(!_.isEmpty(this.props.currentBill)){
      return (
        <div>
          <button onClick={this.props.history.goBack}>back</button>
        <BillHeading title={this.props.currentBill.title} number={this.props.currentBill.number} />
        <BillDescription text={this.props.currentBill.description} />
        <BillSponsors sponsors={this.props.currentBill.sponsors} />
        <Button title="Hello World" />
        </div>
      )
    }
  }

  render(){
    return (
      <div className="bill"> 
        {this.props.isFetching? <GridLoader /> : this.renderBill()}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return{
    currentBill: state.currentBill.content,
    id: state.currentBill.id,
    isFetching: state.currentBill.isFetching
  }
};  


export default connect(mapStateToProps, actions)(Bill);