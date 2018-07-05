import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import {GridLoader} from 'react-spinners';

import Bill from '../Bill/Bill';

// TODO: Seperate redux functionality into container
// TODO: Clean up renderBill funtion maybe put it in presentational component

class BillContainer extends Component {


  componentWillMount(){
      this.props.fetchBill(this.props.match.params.id);
  }

  renderBill(){
    if(this.props.currentBill){ 
      return(
        <Bill 
          goBack={this.props.history.goBack} 
          currentBill={this.props.currentBill}
        />
      )
    }
  }


  render(){
    return (
      <div className="bill__wrapper"> 
        {this.props.isFetching? <GridLoader /> : this.renderBill()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    currentBill: state.currentBill.content,
    id: state.currentBill.id,
    isFetching: state.currentBill.isFetching
  }
};  


export default connect(mapStateToProps, actions)(BillContainer);