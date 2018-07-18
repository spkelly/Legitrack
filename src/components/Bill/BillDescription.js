import React, { Component } from 'react';

export default function({ text }){
  return(
    <div className="bill__description">
      <h2 className="heading__secondary">
      Description
      </h2>
      <p className="paragraph u-side-padding-sm">
      { text ? text : 'no description found' }
      </p>
    </div>
  );
}