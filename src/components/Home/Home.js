import React, {Component} from 'react';
import Promo from './Promo';
import Search from '../search';
import About from './About';

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
          <h1 className="heading__primary">Welcome To Legitrack</h1>
          <h2 className="heading__secondary u-margin-bottom-lg">Search any bill from the Colorado State Legislature</h2>
          <div className="u-center-text">
            <Search cb={this.performSearch} />
          </div>
        </Promo>
        <About />
      </div>
    );
  }
}

export default Home;

