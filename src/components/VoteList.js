import React from 'react';


export default function ({votes, cb, selected}){
  let voteList = votes.map((vote,index)=>{
    return(
      <li key={index}  onClick={()=>cb(index)} className={index == selected?"vote vote-selected":"vote"}>
        {vote.label}
      </li>
    )  
  });

  return(
    <ul className="vote__list">
      {voteList}
    </ul>
  )
}