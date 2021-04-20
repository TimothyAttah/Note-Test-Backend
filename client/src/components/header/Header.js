import React from 'react';
import { Link } from 'react-router-dom';
import {MenuBook} from '@material-ui/icons'
import { Button, ButtonGroup } from '@material-ui/core';



const Header = () => {
  return (
    <div>
      <h1><Link>Note3Sixty<MenuBook /></Link></h1>
      <div>
        <ButtonGroup>
          <Button>Signup</Button>
          <Button>Signin</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Header;
