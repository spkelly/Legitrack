import React from 'react';


const StatusBar = function({progress}){
  return(
    <div className="status__container">
      <div className={`status__bar status__bar-${progress}`}>
      </div>
    </div>
  );
};

export default StatusBar;