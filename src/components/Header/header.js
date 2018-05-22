import React, {Component} from 'react';
import ListInline from '../Lists/list--inline';
import logo from '../../logo.svg';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="l-header">
        <div className="l-header__inner container">
          <div className="l-header__logo">
            <a className="logo" href="/">
              <img className="logo__img" src={logo} alt="logo"/>
            </a>
          </div>
          <div className="l-header__search">
            <div className="search">
              <input className="search__input"
                   type="search" placeholder="Search"/>
            </div>
          </div>
          <nav className="l-header__nav">
            <ListInline/>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;
