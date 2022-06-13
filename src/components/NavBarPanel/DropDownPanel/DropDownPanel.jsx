import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Dropdown, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import CloseButton from 'react-bootstrap/CloseButton';
import { setSectionNameList } from '../../../services/setSectionName';
import { getCategoriesListAC } from '../../../store/Goods/GoodsAC';
import classes from './DropDownPanel.module.scss';

export function DropDownPanel({
  showDropDownMenu,
  hideDropDownMenu,
  isHoverCatalog,
  showGoodAddForm,
  goodsList,
}) {
  const Role = useSelector((state) => state.UserReducer.Role);
  const dispatch = useDispatch();

  async function handleDeleteSection(e) {
    const filteredList = goodsList.filter((category) => {
      if (category === e.target.id) return false;
      return true;
    });

    await setSectionNameList(filteredList);
    await dispatch(getCategoriesListAC());
  }

  if (isHoverCatalog) {
    return (
      <Dropdown
        onMouseEnter={showDropDownMenu}
        onMouseLeave={hideDropDownMenu}
        categories={goodsList}
        className={classes.dropdown}
      >
        {goodsList.map((category) => (
          <div className={classes.linkWrapper}>
            <Nav.Link as={Link} key={category} to='/goods'>
              {category}
            </Nav.Link>
            <CloseButton className='closeButton' id={category} onClick={handleDeleteSection} />
          </div>
        ))}

        {Role === 'ADMIN' && <Button onClick={showGoodAddForm}> Add category</Button>}
      </Dropdown>
    );
  } else {
    return null;
  }
}
