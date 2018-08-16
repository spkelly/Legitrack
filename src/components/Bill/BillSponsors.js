import React from 'react';


export default function({sponsors}){
  let renderSponsers= () =>{
    return sponsors.map((sponsor, index)=>{
      let party = sponsor.party == "I"? 'bill__sponsor-ind': sponsor.party == "R"? 'bill__sponsor-rep': 'bill__sponsor-dem';

      return(
        <div className={`bill__sponsor ${ party }`} key={index}>
          <p className='paragraph'>{ sponsor.name }</p>
        </div>
      )
    });
  };

  return (
    <div className="bill__sponsors">
      <h2 className="heading__secondary">Sponsors</h2>
      <div className=" bill__box">
      { sponsors? renderSponsers():'no sponsors found'}
      </div>
    </div>
  )
}