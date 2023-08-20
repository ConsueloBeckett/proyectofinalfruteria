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
        <NavLink to="/"><Brand/></NavLink>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to={"/category/fruta"} className={({ isActive }) => isActive ? "active" : "option"}>Frutas</NavLink>
            </li>
            <li>
            <NavLink to={"/category/verdura"} className={({ isActive }) => isActive ? "active" : "option"}>Verduras</NavLink>
            </li>
            <li>
            <NavLink to={"/form"} className={({ isActive }) => isActive ? "active" : "option"}>Contáctanos</NavLink>
            </li>
            <CardWidget/>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar