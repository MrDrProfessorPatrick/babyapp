import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../../services/logoutRequest';
import classes from './DropDownLogout.module.scss';

export function DropDownLogout({ showDropDownLogout, hideDropDownLogout, isHoverLogout }) {
  if (isHoverLogout) {
    return (
      <div
        className={classes.DropDownLogout}
        onMouseEnter={showDropDownLogout}
        onMouseLeave={hideDropDownLogout}
      >
        <Nav.Link as={Link} to='/userpage'>
          {' '}
          <span> Кабинет</span>{' '}
        </Nav.Link>
        <Nav.Link as={Link} to='/userpage'>
          {' '}
          <span>Корзина</span>{' '}
        </Nav.Link>
        <button onClick={logoutRequest}>
          <Nav.Link as={Link} to='/'>
            Logout{' '}
          </Nav.Link>
        </button>
      </div>
    );
  } else {
    return null;
  }
}
