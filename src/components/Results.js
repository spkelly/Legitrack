import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import queyrString from 'query-string';
import _ from 'lodash/core';
import { connect } from 'react-redux';
import * as actions from '../actions';
import he from 'he';

import Search from './Search';
import GridLoader from 'react-spinners/dist/spinners/GridLoader';
import PaginationBar from './PaginationBar';

//TODO: seperate into container 
class Results extends Component{
  constructor(props){
    super(props);

    this.state = {
      totalResults:1,
      currentPage:1,
      pageCount:0,
      currentStartingIndex:0,
      currentEndingIndex:0,
      itemsPerPage: 7,
      currentDisplayedResults:[]
    }

    this.handlePageChange = this.handlePageChange.bind(this);
    this.renderResults = this.renderResults.bind(this);
  }

  handlePageChange(targetPage){
    console.log('currently on page: ',this.state.currentPage);
    console.log('going to page: ', targetPage)


    if(targetPage <= this.state.pageCount){
      console.log(currentPage);
      let currentPage = this.state.currentPage;
      let newStartingIndex = ((targetPage - 1)* this.state.itemsPerPage);
      let newEndingIndex = newStartingIndex + this.state.itemsPerPage;
      let nextResults = this.props.searchResults.slice(newStartingIndex,newEndingIndex);


      console.log({
        currentPage,
        newStartingIndex,
        newEndingIndex,
        nextResults
      })
      this.setState({
        currentPage: targetPage,
        currentStartingIndex: newStartingIndex,
        currentEndingIndex: newStartingIndex + this.state.itemsPerPage,
        currentEndingIndex: newEndingIndex,
        currentDisplayedResults: nextResults
      });
    }
  }

  getSearchQuery(){
    return queyrString.parse(this.props.location.search).q;
  }

  componentDidMount(){
    let query = queyrString.parse(this.props.location.search).q;
    if(!_.isEmpty(this.props.searchResults)){
      console.log(this.props.searchResults.length);
    }
    else{
      if(query) this.props.fetchSearch(query);
    }
  }

  componentDidUpdate(prevProps){
    // let resultsLength = Object.keys(this.props.searchResults).length;
    if(this.props != prevProps){
      if(this.props.searchResults){
        let length = Object.keys(this.props.searchResults).length;
        let currentEndingIndex = this.state.currentStartingIndex + this.state.itemsPerPage;
        this.setState({
          totalResults: length,
          pageCount: Math.ceil(length/this.state.itemsPerPage),
          currentStartingIndex:this.state.currentPage * this.state.itemsPerPage - 1,
          currentEndingIndex: currentEndingIndex,
          currentDisplayedResults: this.props.searchResults.slice(0,currentEndingIndex)
        });
      }
    }
  }
  // TODO: find a better way to decode the title here (maybe on backend)
  renderResults(){
    if(!_.isEmpty(this.props.searchResults)){
      let results = this.state.currentDisplayedResults;

      return results.map((bill,index)=>{
        if(!bill.page){
          return(
            <div className="results__item results__box" key={index}>
              <div className='result__header'>
                <Link className="results__link" to={`/bill/${bill.bill_id}`}>{he.decode(bill.title)}</Link>
              </div>
            </div>
          );
	      }
      });
    }
  }

  render(){
    let results = this.props.isFetching? 
        <div className="grid_spinner placeholder">
          <GridLoader color={'#c0392b'} size={20} />
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
        <PaginationBar 
          pageCount={this.state.pageCount} 
          currentPage={this.state.currentPage}
          handleClick={this.handlePageChange}
        />
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
