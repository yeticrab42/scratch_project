import React, { BrowserRouter, Routes, Route } from 'react';
import { Outlet, Link } from 'react-router-dom';
// import Home from './Home';
// import Favorites from './Favorites';

const NavBar = () => {
  return (
    <>
      <nav>
        <div>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/recipes'>Find Recipes By Ingredients</Link>
          </li>
          <li>
            <Link to='/favorites'>My Favorites</Link>
          </li>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;
