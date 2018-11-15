import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import queyrString from 'query-string';
import _ from 'lodash/core';
import { connect } from 'react-redux';
import * as actions from '../actions';
import he from 'he';

import Search from './Search';
import GridLoader from 'react-spinners/dist/spinners/GridLoader';

//TODO: seperate into container 
class Results extends Component{

  getSearchQuery(){
    return queyrString.parse(this.props.location.search).q;
  }

  componentDidMount(){
    let query = queyrString.parse(this.props.location.search).q;
    if(_.isEmpty(this.props.searchResults)){
      if(query) this.props.fetchSearch(query);
    }
  }
  // TODO: find a better way to decode the title here (maybe on backend)
  renderResults(){
    if(!_.isEmpty(this.props.searchResults)){
      let results = this.props.searchResults;

      return Object.keys(results).map((bill,index)=>{
        if(bill != 'summary'){
          return(
            <div className="results__item results__box" key={index}>
              <Link className="results__link" to={`/bill/${results[bill].bill_id}`}>{he.decode(results[bill].title)}</Link>
            </div>
          );
	      }
      });
    }
  }

  render(){
    let results = this.props.isFetching? 
        <div className="grid_spinner placeholder">
          <GridLoader  color={'#fff'} size={30} />
        </div>:
        this.renderResults();

    return(
      <div className="results">
        <div className="u-center-text u-tb-margin-md">
          <Search cb={this.props.fetchSearch} />
        </div>
        <div className="results__container">
          {results}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    searchResults: state.searchResults.items,
    isFetching: state.searchResults.isFetching
  };
};  


export default connect(mapStateToProps, actions)(Results);
