import React from 'react';


export default function ({votes, cb, selected}){
  return(
    <ul className="vote__list">
      {
        votes.map((vote,index)=>{
          return <li key={index}  onClick={()=>cb(index)} className={index == selected?"vote vote-selected":"vote"}>
            {vote.label}
          </li>
        })
      }
    </ul>
  )
}