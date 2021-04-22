import React, { useState } from 'react'
import { IconButton, Menu } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import { popupNav } from '../helper/Helper';
import { Link } from 'react-router-dom';

const PopupNav = () => {
   const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
       <IconButton aria-label="settings" onClick={ handleClick }>
        <MoreHoriz />
      </IconButton>
       <Menu
        id="simple-menu"
        anchorEl={ anchorEl }
        keepMounted
        open={ Boolean( anchorEl ) }
        onClose={ handleClose }
      >
        <div>
          { popupNav.map( (item, index) => {
            return (
              <div key={index}>
                <Link to={item.url}>
                  {item.icon }
                  {item.name}
                </Link>
              </div>
            )
          })}
        </div>
      </Menu>
    </div>
  )
}

export default PopupNav;
