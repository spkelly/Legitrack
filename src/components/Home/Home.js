import React, {Component} from 'react';

import Header from '../Header/Header';
import Promo from './Promo';

class Home extends Component{
  render(){
    return(
      <div className="home">
        <Header />
        <Promo>
          <h1>test</h1>
        </Promo>
      </div>
    );
  }
}

export default Home;

