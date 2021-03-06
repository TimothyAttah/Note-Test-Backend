import React, {useState} from 'react';
import { Button, Drawer, IconButton } from '@material-ui/core';
import {  AddCircle, AddOutlined, Menu } from '@material-ui/icons';

import { navMenu } from '../helper/Helper';
import { Link, NavLink } from 'react-router-dom';
import {
  Navs, NavsCenter, NavsLeft, NavsRight, activeNav, SidebarContainer, Sidebars
} from './NavStyles';

const Nav = () => {
  const [ isOpen, setIsOpen ] = useState( false );
  const handleDrawer = () => {
    setIsOpen( true );
  }
  return (
    <Navs>
      <IconButton onClick={ handleDrawer }>
        <Menu />
      </IconButton>
      <NavsCenter>
        { navMenu.map( ( item, index ) => {
          return (
            <li key={ index }>
              <NavLink
                to={ item.url }
                exact
                activeStyle={ activeNav }
              >
                { item.name }
                <span>{ item.icon }</span>
              </NavLink>
            </li>
          );
        } ) }
      </NavsCenter>
      <NavsLeft>
        <Link to='/api/users/notes/create/note'>
          <Button>
            <AddOutlined />
          Create Note
        </Button>
        </Link>
      </NavsLeft>
      <NavsRight >
        <Link to='/api/users/notes/create/note'>
          <IconButton>
            <AddCircle />
          </IconButton>
        </Link>
      </NavsRight>
      <Drawer
        anchor='left'
        open={ isOpen }
        onClose={ () => setIsOpen( false ) }
      >
        <SidebarContainer>
          <Sidebars>
            { navMenu.map( ( item, index ) => {
              return (
                <li key={ index }>
                  <NavLink
                    to={ item.url }
                    exact
                    activeStyle={ activeNav }
                  >
                    { item.name }
                    <span>{ item.icon }</span>
                  </NavLink>
                </li>
              )
            } ) }
          </Sidebars>
        </SidebarContainer>
      </Drawer>
    </Navs>
  );
};

export default Nav;
