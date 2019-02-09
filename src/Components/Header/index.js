import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './index.css';
import logo from './logo.png';

class Header extends Component {
  render() {
    const { url } = this.props.match;
    let clz = 'Nav-normal';
    if (url === '/') {
      clz = 'Nav-home';
    }
    return (
      <header className="Header">
        <div className="Header-logo" style={{backgroundImage: `url(${logo})`}}></div>
        <Link className={classnames("Nav", clz, {active: url === '/'})} to="/">Home</Link>
        <Link className={classnames("Nav", clz, {active: url === '/about'})} to="/about">About</Link>
        <Link className={classnames("Nav", clz, {active: url === '/album'})} to="/album">Album</Link>
      </header>
    );
  }
}

export default Header;
