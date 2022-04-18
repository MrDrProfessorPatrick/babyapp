import React, { useState } from 'react';
import { Navbar, Nav, Container, Col, Row, Button, Dropdown } from 'react-bootstrap';
import { BsCart3, BsPerson, BsSearch } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { showAuthFormAC } from '../store/AuthWindow/AuthWindowAC';
import { DropDownPanel } from './DropDownPanel';
import logo from '../assets/logo2.svg';

export function NavbarPanel() {
  const [isHoverCatalog, setIsHoverCatalog] = useState(false);
  const authTableState = useSelector((state) => state.AuthWindowStateReducer.isVisible);
  const dispatch = useDispatch();

  console.log('authTableState', authTableState);

  function showDropDownMenu() {
    setIsHoverCatalog(true);
  }

  function hideDropDownMenu(event) {
    if (event.className === 'dropdown') return;
    setIsHoverCatalog(false);
  }

  function showAuthTable() {
    dispatch(showAuthFormAC(!authTableState));
  }

  return (
    <>
      <Container fluid className='abovenavbar'>
        <Row className='justify-content-md-center'>
          <Col>Some text about discounts</Col>
        </Row>
      </Container>

      <Navbar className='navbar'>
        <Navbar.Brand href='#home' className='navbarBrand'>
          <Nav.Link href='/'>
            <img alt='' src={logo} width='50' height='50' className='d-inline-block align-top' />
            S&V
          </Nav.Link>
        </Navbar.Brand>

        <Button
          variant='link'
          onMouseEnter={showDropDownMenu}
          onMouseLeave={(e) => hideDropDownMenu(e)}
        >
          Каталог
        </Button>
        <Nav className='navigationLinks'>
          <Nav.Link href='https://www.instagram.com/svetlara_knits/'>Instagram</Nav.Link>
          <Nav.Link href='#'>Facebook</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
          <Nav.Link href='#pricing'>Goods</Nav.Link>
          <Nav.Link href='#pricing'>Контакты</Nav.Link>
        </Nav>
        <Nav className='iconsSection'>
          <Nav.Link onClick={showAuthTable}>
            <BsPerson />
          </Nav.Link>
          <Nav.Link>
            <BsSearch />
          </Nav.Link>
          <Nav.Link>
            <BsCart3 />
          </Nav.Link>
        </Nav>
      </Navbar>

      <DropDownPanel
        showDropDownMenu={showDropDownMenu}
        hideDropDownMenu={hideDropDownMenu}
        isHoverCatalog={isHoverCatalog}
      />
    </>
  );
}