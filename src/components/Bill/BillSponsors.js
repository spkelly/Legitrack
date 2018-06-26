import React from 'react';


export default function({sponsors}){
  let renderSponsers= () =>{
    return sponsors.map((sponsor, index)=>{
      return(
        <p className="bill__sponsor" key={index}>{sponsor.name}</p>
      )
    });
  };

  return (
    <div className="bill__sponsors">
      <h2 className="heading__secondary">The Bill Sponsors</h2>
      { sponsors? renderSponsers():' no sponsors found'}
    </div>
  )
}