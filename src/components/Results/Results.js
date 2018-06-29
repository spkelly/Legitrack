import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import queyrString from 'query-string';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Search from '../search';
import {BarLoader, GridLoader,CircleLoader,ClimbingBoxLoader } from 'react-spinners';

//TODO: seperate into container 
class Results extends Component{

  getSearchQuery(){
    return queyrString.parse(this.props.location.search).q;
  }

  componentDidMount(){
    let query = queyrString.parse(this.props.location.search).q
    if(_.isEmpty(this.props.searchResults)){
      if(query) this.props.fetchSearch(query);
    }
  }

  renderResults(){
    if(!_.isEmpty(this.props.searchResults)){
      let results = this.props.searchResults;

      return Object.keys(results).map((key,index)=>{
        // TODO: filter out summary key from resutls list on backend
        if(key!='summary'){
        return(
          <div className="results__item" key={index}>
            <Link className="results__link" to={`/bill/${results[key].bill_id}`} >{results[key].title}</Link>
          </div>
        )
      }
      });
    }
  }

  render(){
    return(
      <div className="results">
        <Search cb={this.props.fetchSearch} />
        <h1 className="results__header">Search Results</h1>
        {this.props.isFetching?  <div className="grid_spinner"><GridLoader  size={30} /> </div>: this.renderResults() }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return{
    searchResults: state.searchResults.items,
    isFetching: state.searchResults.isFetching
  }
};  


export default connect(mapStateToProps, actions)(Results);
