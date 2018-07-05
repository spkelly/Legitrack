import React from 'react';

export default function (props){
  return(
    <div className="about">
      <h1 className="heading__primary u-margin-bottom-lg">About</h1>
      <div className="about__wrapper">
        <div className="about__item">
          <h1 className="heading__secondary u-margin-bottom-md">Heading</h1>
          <p className="paragraph">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
        <div className="about__item">
          <h1 className="heading__secondary u-margin-bottom-md">Heading</h1>
          <p className="paragraph">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
        </div>
        <div className="about__item">
          <h1 className="heading__secondary u-margin-bottom-md">Heading</h1>
          <p className="paragraph">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
    </div>
  )
}