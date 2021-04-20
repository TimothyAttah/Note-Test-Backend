import React from 'react';
import { Link } from 'react-router-dom';
import { MenuBook } from '@material-ui/icons';

import Buttons from '../buttons/Button';
import { Headers } from './HeaderStyles';

const Header = () => {
  return (
    <Headers>
      <h1><Link to='/api/user'>Note3Sixty<MenuBook /></Link></h1>
      <h2><Link to='/api/user'><MenuBook /></Link></h2>

      <div>
        <Buttons
          first='Signup'
          second='Signin'
          firstLink='/api/user/signup'
          secondLink='/api/user/signin'
        />
      </div>
    </Headers>
  );
}

export default Header;
