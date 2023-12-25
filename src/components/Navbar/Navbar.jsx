import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const activeChangeColor = ({ isActive }) => isActive ? s.activeLink : '';

const Navbar = () => {
  

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={activeChangeColor}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" className={activeChangeColor}>Messages</NavLink>
      </div>
      <div className={s.item}> <NavLink to="/news"> News </NavLink> </div>
      <div className={s.item}> <NavLink to="/music"> Music </NavLink> </div>
      <div className={s.item}> <NavLink to="/setting"> Setting </NavLink> </div>
      <div className={`${s.item} ${s.friends}`}> <NavLink to="/setting"> Friends  </NavLink> </div>
    </nav>
  );
}

export default Navbar;
