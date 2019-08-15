import React, {Component} from 'react';
import StatusBar from '../StatusBar';

const BillTracker = function(props){

  const { lastAction, lastUpdated } = props;
  const { id, status } = props.stats;

  return(
    <div className="bill__tracker">
      <h2 className="heading__secondary">Bill Tracking</h2>
      <ul className="tracking__list bill__box">
        <li >Bill ID: {id}</li>
        <li >Current Progress: {status}
        <StatusBar progress={status}/>
        </li>
        <li >Last Action: {lastAction}</li>
        <li >Last Updated: {lastUpdated}</li>
      </ul>
    </div>
  );
};


export default BillTracker;