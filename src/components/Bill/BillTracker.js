import React, {Component} from 'react';



class BillTracker extends Component {
  constructor(props){
    super();  
  }

  render(){
    return(
      <div className="bill__tracker">
        <h2 className="heading__secondary">Bill Tracking</h2>
        <ul className="tracking__list bill__box">
          <li >Bill ID: 12345</li>
          <li >Current Progress: Passed</li>
          <li >Last Event: Govenor Signed</li>
          <li >Last Updated:  7/6/2018 10:00am</li>
        </ul>
      </div>
    )
  }
}


export default BillTracker;