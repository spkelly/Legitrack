import React, {Component} from 'react';


class Promo extends Component{
  render(){
    return(
      <div className="home__promo">
        {this.props.children}
      </div>
    )
  }
}

export default Promo;