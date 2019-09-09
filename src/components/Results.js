import React, { Component } from 'react';
import queyrString from 'query-string';
import _ from 'lodash/core';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Search from './Search';
import GridLoader from 'react-spinners/dist/spinners/GridLoader';
import ResultsItem from './ResultsItem';
import Paginate from './Paginate/Paginate';

class Results extends Component {
  constructor(props) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
  }

  getSearchQuery() {
    return queyrString.parse(this.props.location.search).q;
  }

  componentDidMount() {
    let query = queyrString.parse(this.props.location.search).q;
    if (query) this.props.fetchSearch(query);
  }

  renderResults() {
    let results = this.props.searchResults;
    return results.map((bill, index) => {
      if (!bill.page) {
        return (
          <ResultsItem
            key={index}
            linkTitle={bill.title}
            endPoint={`/bill/${bill.bill_id}`}
          />
        );
      }
    });
  }

  renderSpinner() {
    return (
      <div className="grid_spinner placeholder">
        <GridLoader color={'#c0392b'} size={20} />
      </div>
    );
  }

  render() {
    let results = this.props.isFetching ? (
      this.renderSpinner()
    ) : (
      <Paginate data={this.renderResults()} itemsPerPage={8} />
    );

    return (
      <div className="results">
        <div className="u-center-text u-tb-margin-md">
          <Search cb={this.props.fetchSearch} />
        </div>
        <div className="results__container">{results}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults.items,
    isFetching: state.searchResults.isFetching,
  };
}

export default connect(
  mapStateToProps,
  actions
)(Results);
