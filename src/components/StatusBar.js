import React, {Component} from 'react';


export default class StatusBar extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="status__container">
        <div className={`status__bar status__bar-${this.props.progress}`}>
        </div>
      </div>
    )
  }
}