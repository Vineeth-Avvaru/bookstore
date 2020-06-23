import React from 'react';
import './PaginationComponent.css'

const Pagination = ({ currentPage, booksPerPage, totalBooks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <div onClick={() => paginate(number)} className= { number===currentPage ? 'page-link active-class' :'page-link'}>
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;