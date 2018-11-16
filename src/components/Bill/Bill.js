import React from 'react';

import BillHeading from './BillHeading';
import BillTracker from './BillTracker';
import BillDescription from './BillDescription';
import BillSponsors from './BillSponsors';
import VoteContainer from '../Containers/VoteContainer';

// TODO: Get Last updated date and event from search page

const Bill = function({ currentBill }){
  const { title, stats,
          number,
          description,
          sponsors,
          votes
        } = currentBill;

  return(
    <div className="bill">
    <BillHeading title={title} number={number} />
    <div className="bill__details">
      <BillTracker  stats={stats} 
                    lastAction={"Govenor Signed"} 
                    lastUpdated={"last Updated placeholder"} />
      <BillDescription text={description} />
      <BillSponsors sponsors={sponsors} />
      <VoteContainer votes={votes} />
    </div>
  </div>
  )
}

export default Bill

