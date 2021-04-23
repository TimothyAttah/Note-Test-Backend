import React, { useState } from 'react'
import { Button, IconButton, Menu } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ArrowDropDown } from '@material-ui/icons';
import history from '../../history';
import { logout } from '../../redux/actions/authActions';
import {HeaderDropDown} from './HeaderNavsStyles'


const HeaderNavs = ({note}) => {
  const [ anchorEl, setAnchorEl ] = useState( null );
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout())
    history.push( '/api/users/signin' )
    window.location.reload( false );
  }
 
  return (
    <>
      <IconButton onClick={ handleClick }>
        <ArrowDropDown />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={ anchorEl }
        keepMounted
        open={ Boolean( anchorEl ) }
        onClose={ handleClose }
        style={ { top: '50px', padding: '0', margin: '0' } }
      >
        <HeaderDropDown>
          <HeaderDropDown primary><Link to='/user/profile'>Profile</Link></HeaderDropDown>
          <HeaderDropDown primary><Link to='/user/profile'>Friends Posts</Link></HeaderDropDown>
          <HeaderDropDown primary><Button variant='contained' color='secondary' onClick={ handleLogout }>Log Out</Button></HeaderDropDown>
        </HeaderDropDown>
      </Menu>
    </>
  );
}

export default HeaderNavs;
