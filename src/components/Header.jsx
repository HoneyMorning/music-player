import React from 'react';
import './header.scss';
import logo from '../assets/images/avator.jpeg';

function Header() {
  return (
    <nav className="navbar navbar-light bg-light header-shadow">
      <a className="navbar-brand" href="/">
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
        Music player
      </a>
    </nav>
  );
}

export default Header;
