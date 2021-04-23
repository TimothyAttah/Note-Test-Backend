import React, { useState } from 'react'
import { Button, IconButton, Menu } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ArrowDropDown } from '@material-ui/icons';
import history from '../../history';
import { logout } from '../../redux/actions/authActions';


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
    <div>
      <IconButton onClick={handleClick}>
        <ArrowDropDown />
      </IconButton>
       <Menu
        id="simple-menu"
        anchorEl={ anchorEl }
        keepMounted
        open={ Boolean( anchorEl ) }
        onClose={ handleClose }
      >
        <ul>
          <li><Link to='/user/profile'>Profile</Link></li>
          <li><Link to='/user/profile'>Friends Posts</Link></li>
          <li><Button variant='contained' color='secondary' onClick={handleLogout}>Log Out</Button></li>
        </ul>
      </Menu>
    </div>
  )
}

export default HeaderNavs;
