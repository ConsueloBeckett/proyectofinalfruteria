import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import Brand from '../Brand/Brand';
import CardWidget from '../CardWidget/CardWidget';





const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div >
      <Brand/>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <CardWidget/>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar