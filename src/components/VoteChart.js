import React from "react";
import {Pie} from 'react-chartjs-2';

export default function ({vote}){
  return(
    <div className="vote__chart">
      <Pie

        data={
          {labels: ["Yay", "Nay", "NV", "Pass"],
          datasets:[{
            label: vote.desc,
            data:vote.data,
            backgroundColor: ['#2ecc71','#e74c3c','#f1c40f',"#95a5a6"]
            }
          ]
          }
          
        }
      
      />
      <div className="vote__desc">
        <div className="vote__breakdown">
          <ul>
            <li>yay: {vote.data[0]}</li>
            <li>nay: {vote.data[1]}</li>
            <li>pass:{vote.data[2]} </li>
            <li>nv:  {vote.data[3]}</li>
          </ul>
        </div>
        <h2 className="heading__tertiary">{vote.desc}</h2>
      </div> 
      
    </div>
  )
}