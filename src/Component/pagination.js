import React from "react";

const Pagination = ({ totalComments, commentsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 0; i <= Math.ceil(totalComments / commentsPerPage); i++) {
    pages.push(i);
  }

  return(
    <div>
        {pages.map((page, index)=>{
            return <button key={index} onClick={()=> setCurrentPage(page)} className={page == currentPage ? 'active' : ''}>{page}</button>
        })}
    </div>
  )
};

export default Pagination;
