import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Dropdown } from 'react-bootstrap';

export function DropDownPanel({ showDropDownMenu, hideDropDownMenu, isHoverCatalog }) {
  if (isHoverCatalog) {
    return (
      <Dropdown onMouseEnter={showDropDownMenu} onMouseLeave={hideDropDownMenu}>
        <Nav.Link as={Link} to='/goods'>
          Action
        </Nav.Link>
        <Nav.Link as={Link} to='/goods'>
          Another action
        </Nav.Link>
        <Nav.Link as={Link} to='/goods'>
          Something else
        </Nav.Link>
        <Nav.Link as={Link} to='/goods'>
          Something else
        </Nav.Link>
        <Nav.Link as={Link} to='/goods'>
          Something else
        </Nav.Link>
        <Nav.Link as={Link} to='/goods'>
          Something else
        </Nav.Link>
        <Nav.Link as={Link} to='/goods'>
          Something else
        </Nav.Link>
        <Nav.Link as={Link} to='/goods'>
          Something else
        </Nav.Link>
      </Dropdown>
    );
  } else {
    return null;
  }
}
