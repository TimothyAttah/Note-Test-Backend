import React, { useState } from 'react'
import { IconButton, Menu } from '@material-ui/core';

import { ArrowDropDown } from '@material-ui/icons';
import { HeaderDropDown } from '../header/HeaderNavsStyles'

const BudgetsNav = ({setIsOpen}) => {
  const [ anchorEl, setAnchorEl ] = useState( null );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl( null );
  };
 
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
          <HeaderDropDown  onClick={() => setIsOpen(false)} primary> + </HeaderDropDown>
          <HeaderDropDown onClick={() => setIsOpen(true)} primary> - </HeaderDropDown>
        </HeaderDropDown>
      </Menu>
    </>
  );
}

export default BudgetsNav;
