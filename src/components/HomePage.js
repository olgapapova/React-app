import React from 'react';
import { NavLink } from 'react-router-dom';
import book1 from "../images/book-1.jpg";
import book2 from "../images/book-2.jpg";
import book3 from "../images/book-3.jpg";
import book4 from "../images/book-4.jpg";
import book5 from "../images/book-5.jpg";
import book6 from "../images/book-6.jpg";
import book7 from "../images/book-7.jpg";

import './HomePage.css';

export const HomePage = () => { 

  return (
    
    <div className="ConteynerCategory">
      <div className="hover-text-one">
        <NavLink to="/category1">
          <figure className="effect-text-one">
            <img src={book1} alt=""/>
            <figcaption>
	            <h3>Художественная</h3>
              <span>литература</span>
	            <p>Смотреть подробнее</p>
            </figcaption>			
          </figure>
        </NavLink> 
      </div>
      
      <div className="hover-text-one">
        <NavLink to="/category2">
          <figure className="effect-text-one">
            <img src={book2} alt=""/>
            <figcaption>
	            <h3>Учебная и научная</h3>
              <span>литература</span>
	            <p>Смотреть подробнее</p>
            </figcaption>			
          </figure>
        </NavLink>
      </div>
      
      <div className="hover-text-one">
        <NavLink to="/category3">
          <figure className="effect-text-one">
            <img src={book3} alt=""/>
            <figcaption>
	            <h3>Фантастика</h3>
              <span></span>
	            <p>Смотреть подробнее</p>
            </figcaption>			
          </figure>
        </NavLink>
      </div>
      
      <div className="hover-text-one">
        <NavLink to="/category4">
          <figure className="effect-text-one">
            <img src={book4} alt=""/>
            <figcaption>
	            <h3>Стихи</h3>
              <span></span>
	            <p>Смотреть подробнее</p>
            </figcaption>			
          </figure>
        </NavLink>
      </div>
      
      <div className="hover-text-one">
        <NavLink to="/category5">
          <figure className="effect-text-one">
            <img src={book5} alt=""/>
            <figcaption>
	            <h3>Детская</h3>
              <span>литература</span>
	            <p>Смотреть подробнее</p>
            </figcaption>			
          </figure>
        </NavLink>
      </div>
      
      <div className="hover-text-one">
        <NavLink to="/category6">
          <figure className="effect-text-one">
            <img src={book6} alt=""/>
            <figcaption>
	            <h3>Энциклопедические</h3>
              <span>издания</span>
	            <p>Смотреть подробнее</p>
            </figcaption>			
          </figure>
        </NavLink>
      </div>
      
      <div className="hover-text-one">
        <NavLink to="/category7">
          <figure className="effect-text-one">
            <img src={book7} alt=""/>
            <figcaption>
	            <h3>Справочная</h3>
              <span>литература</span>
	            <p>Смотреть подробнее</p>
            </figcaption>			
          </figure>
        </NavLink>
      </div>
         
    </div>
  );  
}