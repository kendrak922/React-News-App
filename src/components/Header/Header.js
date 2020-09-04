import React from 'react';
import './Header.css'

const Header = () => (
    <nav>
    <div className="nav-wrapper">
      <a>News-Scraper</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="">Home</a></li>
        <li><a href="notes.handlebars">Saved Articles</a></li>
        <a className="waves-effect waves-light btn-large">Scrape New Articles</a>
      </ul>
    </div>
  </nav>

);

export default Header;