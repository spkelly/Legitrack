import React from 'react';


export default function({sponsors}){
  let renderSponsers= () =>{
    return sponsors.map((sponsor, index)=>{
      return(
        <div className="bill__sponsor" key={index}>
          <img className="sponsor__image"></img>
          <p className="paragraph">{sponsor.name}</p>
          <p>{sponsor.votesmart_id}</p>
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