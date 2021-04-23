import React from 'react';
import { Link } from 'react-router-dom';
import { MenuBook } from '@material-ui/icons';
import nameToInitials, {user, fullName} from '../NameInitials'

import Buttons from '../buttons/Button';
import { Headers, HeadersRight } from './HeaderStyles';
import HeaderNavs from './HeaderNavs';
import { Avatar } from '@material-ui/core';

const Header = () => {
  return (
    <Headers>
      <h1><Link to='/'>Note3Sixty<MenuBook /></Link></h1>
      <h2><Link to='/'><MenuBook /></Link></h2>

      {user ? (
        <HeadersRight>
            <Link to='/api/users/profile'>
              <h4>{ fullName }</h4>
            <Avatar>{ nameToInitials( fullName ) }</Avatar>
            </Link>
          <HeaderNavs />
        </HeadersRight>
      ): (
          <div>
        <Buttons
          first='Signup'
          second='Signin'
          firstLink='/api/users/signup'
          secondLink='/api/users/signin'
        />
      </div>
      )}
    
    </Headers>
  );
}

export default Header;
