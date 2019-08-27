import React, {Component} from 'react';
import PaginationBar from './PaginationBar';

class Paginate extends Component{
  constructor(props){
    super(props);

    this.state = {
      totalResults:1,
      currentPage:1,
      pageCount:0,
      currentStartingIndex:0,
      currentEndingIndex:0,
      currentDisplayedResults:[]
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount(){
    let {data, itemsPerPage} = this.props;
    let {currentPage,currentStartingIndex} = this.state;

    if(data){
      let length = data.length;
      let currentEndingIndex = currentStartingIndex + itemsPerPage;

      this.setState({
        totalResults: length,
        pageCount: Math.floor(length/itemsPerPage),
        currentStartingIndex: currentPage * itemsPerPage - 1,
        currentEndingIndex: currentEndingIndex,
        currentDisplayedResults: data.slice(0,currentEndingIndex)
      });
    }
  }

  handlePageChange(targetPage){
    let {data,itemsPerPage} = this.props;
    let {pageCount} = this.state;

    if(targetPage <= pageCount){
      let newStartingIndex = ((targetPage - 1)* itemsPerPage);
      let newEndingIndex = newStartingIndex + itemsPerPage;
      
      if(newEndingIndex > data.length){
        newEndingIndex = data.length;
      }
      let nextResults = data.slice(newStartingIndex,newEndingIndex);

      this.setState({
        currentPage: targetPage,
        currentStartingIndex: newStartingIndex,
        currentEndingIndex: newEndingIndex,
        currentDisplayedResults: nextResults
      });
    }
  }

  render(){
    return(
    <div >
      {this.state.currentDisplayedResults}
      <PaginationBar 
        currentPage={this.state.currentPage}
        handleClick={this.handlePageChange}
        pageCount={this.state.pageCount}
      />
    </div>);
  }
}

export default Paginate;