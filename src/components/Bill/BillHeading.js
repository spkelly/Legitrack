import React from 'react';

export default function({ title }){
  return(
    <div className="bill__heading">
      <h1 className="heading__primary">
        {title ? title: 'Bill Not Found'}
      </h1>
    </div>
  );
};