import React, {Component} from 'react';

import Header from '../Header/Header';
import Promo from './Promo';
import Search from '../search';

class Home extends Component{

  constructor(props){
    super(props);
    this.performSearch = this.performSearch.bind(this);
  }

  performSearch(term){
    console.log(this.props);
    this.props.history.push(`/search?q=${term}`);
  }
  render(){
    return(
      <div className="home">

        <Promo>
          <label>Search for a bill</label>
          <Search cb={this.performSearch}/>
        </Promo>
      </div>
    );
  }
}

export default Home;

