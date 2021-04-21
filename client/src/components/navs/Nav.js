import React, {useState} from 'react';
import { Drawer, IconButton } from '@material-ui/core';
import {  AddCircle, AddOutlined, Menu } from '@material-ui/icons';

import { navMenu } from '../helper/Helper';
import { NavLink } from 'react-router-dom';
import Buttons from '../buttons/Button';

import styled from 'styled-components';

const Navs = styled.nav`
  background-color: #3f51b5;
  display: flex;
  justify-content: space-between;
   padding: 9px 20px 2px 10px;
   position: sticky;
   top: 0;
   .MuiIconButton-root {
     color: white;
   }
`;

const NavsCenter = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;
  width: 600px;
    margin: 0;
    padding: 0;

  li {
   display: flex;
    align-items: center;
    background-color: #e5e5e5;
     box-shadow:  -2px -2px 2px #fff7,
               2px 2px 2px #0002;
    cursor: pointer;
         :hover {
    animation: opacity 0.2s linear;
  @keyframes opacity{
  from{
    opacity: 0;
    transform: scale(0.7);
  }
}
  }
  }
   li > a {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    color: black;
    span {
      padding-left: 3px;
    }
    :hover {
      border-bottom: 2px solid teal;
      color: teal;
    }
  }
  @media (max-width: 900px){
    display: none;
  }
  
`
const NavsLeft = styled.div`
.MuiButton-root {
  padding: 5px 12px;
   background-color: #e5e5e5;
   button {
     color: black;
   }
}

@media (max-width: 414px){
display: none;
}
`
const NavsRight = styled.div`
 display: none;
 @media (max-width: 414px){
display: block;
}
`


const activeNav = {
  borderBottom: '2px solid teal',
  color: 'teal'
}

const Nav = () => {
  const [ isOpen, setIsOpen ] = useState( false );
  const handleDrawer = () => {
    setIsOpen( true );
  }
  return (
    <Navs>
      <IconButton onClick={handleDrawer}>
       <Menu />
      </IconButton>
      <NavsCenter>
        { navMenu.map( (item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={ item.url }
                exact
                activeStyle={activeNav}
              >
                { item.name }
                <span>{ item.icon }</span>
              </NavLink>
            </li>
          )
        })}
      </NavsCenter>
      <NavsLeft>
         <Buttons
          first={ <AddOutlined /> }
          second='Create Note'
          firstLink='/api/users/notes/create'
          secondLink='/api/users/notes/create'
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
        onClose={()=> setIsOpen(false)}
      >
        <div>
          <h3>Drawer is open</h3>
        </div>
      </Drawer>
    </Navs>
  )
}

export default Nav
