import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-dark bg-dark fixed-top">
    <div className="container">
      <Link to="/" className="navbar-brand">
        React Pilot
      </Link>
    </div>
  </nav>
);

export default Header;
