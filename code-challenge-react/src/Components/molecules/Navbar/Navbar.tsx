import React from 'react';
import './Navbar.css';
import {ImHome, ImImages, ImUser} from 'react-icons/im';
import {FaTasks} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="CP-Navbar">
      <NavLink to={'/'} className={({isActive}) => (isActive ? 'navlinks-Active' : 'navlinks')}>
        <ImHome className="primary-color Navbar-Icons"></ImHome>
      </NavLink>

      <NavLink
        to={'/Users'}
        className={({isActive}) => (isActive ? 'navlinks-Active' : 'navlinks')}
      >
        <ImUser className="primary-color Navbar-Icons"></ImUser>
      </NavLink>

      <NavLink
        to={'/Albums'}
        className={({isActive}) => (isActive ? 'navlinks-Active' : 'navlinks')}
      >
        <ImImages className="primary-color Navbar-Icons"></ImImages>
      </NavLink>

      <NavLink
        to={'/Tasks'}
        className={({isActive}) => (isActive ? 'navlinks-Active' : 'navlinks')}
      >
        <FaTasks className="primary-color Navbar-Icons"></FaTasks>
      </NavLink>
    </nav>
  );
};
export default Navbar;
