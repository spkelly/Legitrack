import React, { Component } from 'react';

import {Doughnut} from 'react-chartjs-2';

const testData = {labels: ["Yes", "No"],datasets:[{
  label:"number of votes",
  data:[52,65],
  backgroundColor: ['#777','#333']
  }
]}
class BillVotes extends Component {
  render(){
    return(
      <div className ="bill__votes">
        <h2 className="heading__secondary">Current Votes</h2>
        <Doughnut data={testData} height={240}/>
      </div>
    );
  }
}

export default BillVotes;
