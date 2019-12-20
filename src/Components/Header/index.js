import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './index.css';
import logo from './logo.png';

class Header extends Component {
  render() {
    const { url } = this.props.match;
    let clz = 'NavItem-normal';
    if (url === '/') {
      clz = 'NavItem-home';
    }
    return (
      <header className="Header">
        <div className="Header-logo" style={{backgroundImage: `url(${logo})`}}></div>
        <div className="Nav">
          <Link className={classnames("NavItem", clz, {active: url === '/'})} to="/">Home</Link>
          <Link className={classnames("NavItem", clz, {active: url === '/about'})} to="/about">About</Link>
          <Link className={classnames("NavItem", clz, {active: url === '/album'})} to="/album">Album</Link>
        </div>
      </header>
    );
  }
}

export default Header;
