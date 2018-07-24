import React from 'react';


export default function({sponsors}){
  let renderSponsers= () =>{
    return sponsors.map((sponsor, index)=>{
      return(
        <div className="bill__sponsor" key={index}>
          <div className="sponsor__image"></div>
          <p className="paragraph">{sponsor.name}</p>
        </div>
      )
    });
  };

  return (
    <div className="bill__sponsors">
      <h2 className="heading__secondary">Sponsors</h2>
      <div className="u-flex-container bill__box">
      { sponsors? renderSponsers():' no sponsors found'}
      </div>
    </div>
  )
}