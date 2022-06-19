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

  let goodsList = useSelector((state) => state.GoodsReducer.categoriesList);

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
    let source = e.source.index;
    let newOrderArr = [];

    if (destination < source) {
      for (let i = 0; i < goodsList.length; i++) {
        if (destination === i) {
          newOrderArr.push(goodsList[source]);
        }
        if (source === i) {
          continue;
        }
        newOrderArr.push(goodsList[i]);
      }
    }

    if (destination > source) {
      for (let i = 0; i < goodsList.length; i++) {
        if (source === i) {
          continue;
        }
        if (destination === i) {
          newOrderArr.push(goodsList[i]);
          newOrderArr.push(goodsList[source]);
          continue;
        }
        newOrderArr.push(goodsList[i]);
      }
    }
    await dispatch(loadCategoriesListAC(newOrderArr));
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
                        <Nav.Link as={Link} key={category} to={`/${category}`}>
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
