import React, {useState} from 'react';
import { Drawer, IconButton } from '@material-ui/core';
import {  AddCircle, AddOutlined, Menu } from '@material-ui/icons';

import { navMenu } from '../helper/Helper';
import { NavLink } from 'react-router-dom';
import Buttons from '../buttons/Button';
import {
  Navs, NavsCenter, NavsLeft, NavsRight, activeNav, SidebarContainer
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
        <Buttons
          first={ <AddOutlined /> }
          second='Create Note'
          firstLink='/api/users/notes/create/note'
          secondLink='/api/users/notes/create/note'
        />
      </NavsLeft>
      <NavsRight >
        <IconButton>
          <AddCircle />
        </IconButton>
      </NavsRight>
      <Drawer
        anchor='left'
        open={ isOpen }
        onClose={ () => setIsOpen( false ) }
      >
        <SidebarContainer>
          <ul>
            { navMenu.map( (item, index) => {
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
            })}
          </ul>
        </SidebarContainer>
      </Drawer>
    </Navs>
  );
};

export default Nav;
