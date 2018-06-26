import React from 'react';

export default function({ title, number }){
  return(
    <div className="bill__heading">
      <h1 className="heading__primary">
        {title ? title: 'Bill Not Found'}
      </h1>
      <p className="paragraph">
        {number ? number: '0000' }
      </p>
    </div>
  );
};