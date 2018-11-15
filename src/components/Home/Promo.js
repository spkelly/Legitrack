import React, {Component} from 'react';


const Promo = function({children}){
  return (
          <div className="home__promo">
            {children}
          </div>
        )
}

export default Promo;