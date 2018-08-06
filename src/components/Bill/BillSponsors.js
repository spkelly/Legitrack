import React from 'react';


export default function({sponsors}){
  let renderSponsers= () =>{
    return sponsors.map((sponsor, index)=>{
      return(
        <div className={`bill__sponsor ${sponsor.party == 'R'?'bill__sponsor-rep':'bill__sponsor-dem'}`} key={index}>
          <p className="paragraph">{sponsor.name}</p>
        </div>
      )
    });
  };

  return (
    <div className="bill__sponsors">
      <h2 className="heading__secondary">Sponsors</h2>
      <div className=" bill__box">
      { sponsors? renderSponsers():' no sponsors found'}
      </div>
    </div>
  )
}