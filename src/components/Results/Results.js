import React, {Component} from 'react';
import queyrString from 'query-string';


class Results extends Component{

  getSearchQuery(){
    return queyrString.parse(this.props.location.search).q;
  }

  componentDidMount(){

  }

  render(){
    return(
      <div> This is the query that you are searching for: {this.getSearchQuery()} </div>
    )
  }
}

export default Results;