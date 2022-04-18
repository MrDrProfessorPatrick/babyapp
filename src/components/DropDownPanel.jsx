import React from 'react';
import { Dropdown } from 'react-bootstrap';

export function DropDownPanel({ showDropDownMenu, hideDropDownMenu, isHoverCatalog }) {
  if (isHoverCatalog) {
    return (
      <Dropdown onMouseEnter={showDropDownMenu} onMouseLeave={hideDropDownMenu}>
        <Dropdown.Item href='/goods'>Action</Dropdown.Item>
        <Dropdown.Item href='/goods'>Something else</Dropdown.Item>
        <Dropdown.Item href='/goods'>Something else</Dropdown.Item>
        <Dropdown.Item href='/goods'>Another action</Dropdown.Item>
        <Dropdown.Item href='/goods'>Something else</Dropdown.Item>
        <Dropdown.Item href='/goods'>Something else</Dropdown.Item>
        <Dropdown.Item href='/goods'>Something else</Dropdown.Item>
        <Dropdown.Item href='/goods'>Something else</Dropdown.Item>
      </Dropdown>
    );
  } else {
    return null;
  }
}
