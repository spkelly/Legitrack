import React from 'react';

export default function (){
  return(
    <div className="about">
      <h1 className="heading__primary u-margin-bottom-lg">About</h1>
      <div className="about__wrapper">
        <div className="about__item">
          <h1 className="heading__secondary u-margin-bottom-md">Discover</h1>
          <p className="paragraph">
            Search through active bills within the Colorado State legislature. View bill sponsers, full texts and ammendments. 
          </p>
        </div>
        <div className="about__item">
          <h1 className="heading__secondary u-margin-bottom-md">Learn</h1>
          <p className="paragraph">
            Stay up to date on current issues and learn what your state representatives are concentrating on.   
          </p>
        </div>
        <div className="about__item">
          <h1 className="heading__secondary u-margin-bottom-md">Track</h1>
          <p className="paragraph"> 
            Get up to date information on votes and amendments as the bill makes its way from creation to signing.
          </p>
        </div>
      </div>
    </div>
  );
}