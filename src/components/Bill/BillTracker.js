import React, {Component} from 'react';



class BillTracker extends Component {
  constructor(props){
    super();  
  }


// TODO: Render status in a way other then a number
  render(){
    return(
      <div className="bill__tracker">
        <h2 className="heading__secondary">Bill Tracking</h2>
        <ul className="tracking__list bill__box">
          <li >Bill ID: {this.props.stats.id}</li>
          <li >Current Progress: {this.props.stats.status}</li>
          <li >Last Event: {this.props.lastAction}</li>
          <li >Last Updated:  {this.props.lastUpdated}</li>
        </ul>
      </div>
    )
  }
}


export default BillTracker;