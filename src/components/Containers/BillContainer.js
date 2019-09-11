import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import GridLoader from 'react-spinners/dist/spinners/GridLoader';

import Bill from '../Bill/Bill';

class BillContainer extends Component {
  UNSAFE_componentWillMount() {
    this.props.fetchBill(this.props.match.params.id);
  }

  renderBill() {
    if (this.props.currentBill) {
      return (
        <Bill
          goBack={this.props.history.goBack}
          currentBill={this.props.currentBill}
        />
      );
    }
  }

  renderPlaceholder() {
    return (
      <div className="bill__placeholder">
        <GridLoader color={'#c0392b'} size={20} />
      </div>
    );
  }

  render() {
    return (
      <div className="bill__wrapper">
        {this.props.isFetching ? this.renderPlaceholder() : this.renderBill()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentBill: state.currentBill.content,
    id: state.currentBill.id,
    isFetching: state.currentBill.isFetching,
  };
}

export default connect(
  mapStateToProps,
  actions
)(BillContainer);
