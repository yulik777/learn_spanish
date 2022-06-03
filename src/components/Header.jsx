import React from 'react';
import { Link } from "react-router-dom";
import './assets/styles/header.scss';
import logo from './assets/images/logo.png';


export default function Header() {
    return (
<div className="header">
<div  className="header__name">
<img className='logo' src={logo} alt="logo"/>
<h1>Learn Spanish</h1>
</div>
<div className="header__mainmenu">
    <Link to='/' className="header__menu home" href="w"> Home</Link>
    <Link to='/game' className="header__menu play" href="w">Play</Link>
</div>
</div>
      );
    }
