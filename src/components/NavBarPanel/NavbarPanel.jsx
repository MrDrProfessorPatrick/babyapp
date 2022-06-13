import React, { useState } from 'react';
import { Navbar, Nav, Container, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsCart3, BsPerson, BsSearch } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { FormAddGoodSection } from './FormAddGoodSection/FormAddGoodSection';
import { DropDownPanel } from './DropDownPanel/DropDownPanel';
import { DropDownLogout } from '../DropDownLogout/DropDownLogout';
import classes from './NavBarPanel.module.scss';
import logo from '../../assets/logo2.svg';

export function NavbarPanel({ setAuthTableState }) {
  const [isHoverCatalog, setIsHoverCatalog] = useState(true);
  const [isHoverLogout, setIsHoverLogout] = useState(false);
  const [isGoodAddFormShown, setGoodAddFormShown] = useState(false);
  const { acessToken, name } = useSelector((state) => state.UserReducer);
  const goodsList = useSelector((state) =>
    state.GoodsReducer.categoriesList.length ? state.GoodsReducer.categoriesList[0].categories : []
  );
  console.log(goodsList, 'Navbar goodsList');
  const dispatch = useDispatch();

  function showGoodAddForm() {
    setGoodAddFormShown((prev) => !prev);
  }

  function showDropDownMenu() {
    setIsHoverCatalog(true);
  }

  function hideDropDownMenu(event) {
    if (event.className === 'dropdown') return;
    setIsHoverCatalog(false);
  }

  function showDropDownLogout() {
    console.log('show logout');
    setIsHoverLogout(true);
  }

  function hideDropDownLogout(event) {
    console.log('hide logout');
    if (event.className === 'DropDownLogout') {
      console.log(event.className);
      return;
    }
    setIsHoverLogout(false);
  }

  return (
    <>
      <Container fluid className={classes.abovenavbar}>
        <Row className='justify-content-md-center'>
          <Col>Some text about discounts</Col>
        </Row>
      </Container>

      <Navbar className={classes.navbar}>
        <Navbar.Brand href='#home' className={classes.navbarBrand}>
          <Nav.Link as={Link} to='/'>
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
        <Nav className={classes.navigationLinks}>
          <Nav.Link as={Link} to='https://www.instagram.com/svetlara_knits/'>
            Instagram
          </Nav.Link>
          <Nav.Link as={Link} to='#'>
            Facebook
          </Nav.Link>
          <Nav.Link as={Link} to='#pricing'>
            Pricing
          </Nav.Link>
          <Nav.Link as={Link} to='#pricing'>
            Goods
          </Nav.Link>
          <Nav.Link as={Link} to='#pricing'>
            Контакты
          </Nav.Link>
        </Nav>
        <Nav className={classes.iconsSection}>
          {acessToken ? (
            <Nav.Link
              as={Link}
              to='/userpage'
              onMouseEnter={showDropDownLogout}
              onMouseLeave={(e) => hideDropDownLogout(e)}
            >
              {name}
            </Nav.Link>
          ) : (
            <Nav.Link onClick={setAuthTableState}>
              <BsPerson />
            </Nav.Link>
          )}

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
        showGoodAddForm={showGoodAddForm}
        isHoverCatalog={isHoverCatalog}
        goodsList={goodsList}
      />
      <DropDownLogout
        showDropDownLogout={showDropDownLogout}
        hideDropDownLogout={hideDropDownLogout}
        isHoverLogout={isHoverLogout}
      />

      {isGoodAddFormShown && (
        <FormAddGoodSection showGoodAddFrom={showGoodAddForm}></FormAddGoodSection>
      )}
    </>
  );
}
