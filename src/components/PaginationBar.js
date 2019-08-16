import React from 'react';


const PaginationBar = (props) =>{
  let {
    currentPage,
    handleClick,
    pageCount
  } = props;

  const renderButtons = () =>{
    let buttonList = [];
    for(let i = 0;i < pageCount;i++){
      buttonList.push(<div 
        className={'pagination__button' + ((i+1 == currentPage)?' active':'')} 
        onClick={()=>handleClick(i+1)}
        key={i}>{i+1}</div>
      )
    }
    return buttonList
  }

  return(
    <div className="pagination__bar">
      {renderButtons()}
    </div>
  )
}

export default PaginationBar;