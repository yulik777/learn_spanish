import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './assets/styles/header.scss';
import logo from './assets/images/logo.png';


export default function Header() {
    return (
<div className="header">
<div  className="header__name">
    <Link to='/'>
<img className='logo' src={logo} alt="logo"/></Link>
<NavLink 
                        style={({ isActive }) => ({
                        color: isActive ? 'red' : 'inherit'
                        })} to="/error"> <h1>Learn Spanish</h1> </NavLink>
</div>
<div className="header__mainmenu">
    <Link to='/' className="header__menu home" href="w"> Home</Link>
    <Link to='/game' className="header__menu play" href="w">Play</Link>
</div>
</div>
      );
    }
