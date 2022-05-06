import React from 'react';

export default function Header() {
    return (
<header className='header'>
<div  className="header__name">
    <h1>Learn Spanish</h1>
</div>
<nav  className="header__mainmenu">
    <a  className="header__menu home" href="w"> Home</a>
    <a  className="header__menu play" href="w">About </a>
</nav>
<div  className="button">
    <button>CONTACT US</button>
</div>
</header>
      );
    }