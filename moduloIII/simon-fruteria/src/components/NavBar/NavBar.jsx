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
              <NavLink to="/categorias/:idCategory">Categorias</NavLink>
            </li>
            <li>
              <NavLink to="/item/:idProduct">Productos</NavLink>
            </li>
            <CardWidget/>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar