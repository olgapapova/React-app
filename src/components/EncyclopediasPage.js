import { useSelector } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';

import  BooksListCategory  from './BooksListCategory';

export const EncyclopediasPage = () => {

  const books = useSelector( state => state.books );
  let booksList;

  function componentF () {
    if (books.data !== null) {
      let booksListFilter=books.data.filter(s => s.category===6);
    
      booksList=booksListFilter.map(v=> 
        <BooksListCategory key={v.id} info={v}/>)
    }
  }
  componentF();
  let nd= <div className="noData">нет данных</div>
  let zd= <div className="noData">Загрузка данных...</div>
  let od= <div className="noData">"error: "+{books.dataLoadError}</div>

  return (
    <>
      <div className="Navigation">
        <NavLink to="/">Главная</NavLink><span> &gt; Энциклопедические издания</span>
      </div>
      <div>
        { (books.dataLoadState===0) && nd }
        { (books.dataLoadState===1) && zd }
        { (books.dataLoadState===2) &&  booksList }
        { (books.dataLoadState===3) && od }
      </div>
    </>
);

}