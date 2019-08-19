import React from 'react';
import he from 'he';
import {Link} from 'react-router-dom';

  // TODO: find a better way to decode the title here (maybe on backend)
const ResultsItem = ({linkTitle, endPoint}) => {
  return(
    <div className='results__item results__box'>
      <div className='result__header'>
        <Link className="results__link" to={endPoint}>{he.decode(linkTitle)}</Link>
      </div>
    </div>
  );
};

export default ResultsItem;