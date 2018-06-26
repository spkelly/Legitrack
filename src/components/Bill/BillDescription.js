import React, { Component } from 'react';

export default function({ text }){
  return(
    <div className="bill__description">
      <h2 className="heading__secondary">
      Bill Description
      </h2>
      { text ? text : 'no description found' }
    </div>
  );
}