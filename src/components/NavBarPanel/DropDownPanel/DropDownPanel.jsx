import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Nav, Dropdown, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CloseButton from 'react-bootstrap/CloseButton';
import { setSectionNameList } from '../../../services/setSectionName';
import { getCategoriesListAC, loadCategoriesListAC } from '../../../store/Goods/GoodsAC';
import classes from './DropDownPanel.module.scss';

export function DropDownPanel({
  showDropDownMenu,
  hideDropDownMenu,
  isHoverCatalog,
  showGoodAddForm,
}) {
  const dispatch = useDispatch();
  const Role = useSelector((state) => state.UserReducer.Role);
  // const goodsList = [];
  let goodsList = useSelector((state) => state.GoodsReducer.categoriesList);

  console.log(goodsList, 'goodsList');

  async function handleDeleteSection(e) {
    const filteredList = goodsList.filter((category) => {
      if (category === e.target.id) return false;
      return true;
    });
    await setSectionNameList(filteredList);
    await dispatch(getCategoriesListAC());
  }

  async function handleOnDragEnd(e) {
    const destination = e.destination.index;
    const source = e.source.index;

    const newOrder = goodsList
      ? goodsList.map((good) => {
          return good;
        })
      : [];

    newOrder[destination] = goodsList[source];
    newOrder[source] = goodsList[destination];

    console.log(newOrder, 'new Order');

    await dispatch(loadCategoriesListAC(newOrder));
  }

  if (isHoverCatalog) {
    return (
      <Dropdown
        onMouseEnter={showDropDownMenu}
        onMouseLeave={hideDropDownMenu}
        className={classes.dropdown}
      >
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='goodsListDroppable'>
            {(provided) => (
              <div
                className={classes.linkSectionWrapper}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {goodsList.map((category, index) => (
                  <Draggable key={category} draggableId={category} index={index}>
                    {(provided) => (
                      <div
                        className={classes.linkWrapper}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Nav.Link as={Link} key={category} to='/goods'>
                          {category}
                        </Nav.Link>
                        <CloseButton
                          className='closeButton'
                          id={category}
                          onClick={handleDeleteSection}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {Role === 'ADMIN' && <Button onClick={showGoodAddForm}> Add category</Button>}
      </Dropdown>
    );
  } else {
    return null;
  }
}
