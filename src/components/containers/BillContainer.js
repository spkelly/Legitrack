import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import BillHeading from './BillHeading';
import BillDescription from './BillDescription';
import BillSponsors from './BillSponsors';
import Button from '../Button/Button';
import _ from 'lodash';


class Bill extends Component {

  componentWillMount(){
    if(_.isEmpty(this.props.currentBill)) this.props.fetchTest();
  }


  render(){
    console.log('hello ', this.props);
    return (
      <div className="bill">
        <BillHeading title={this.props.currentBill.title} number={this.props.currentBill.number} />
        <BillDescription text={this.props.currentBill.description} />
        <BillSponsors sponsors={this.props.currentBill.sponsors} />
        <Button title="Hello World" />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return{
    currentBill: state.bill
  }
};


export default connect(mapStateToProps, actions)(Bill);