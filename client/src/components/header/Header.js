import React from 'react';
import { Link } from 'react-router-dom';
import { MenuBook } from '@material-ui/icons';
import NamesInitials,  {user, fullName} from '../NamesInitials'

import Buttons from '../buttons/Button';
import { Headers, HeadersRight } from './HeaderStyles';
import HeaderNavs from './HeaderNavs';
import { Avatar } from '@material-ui/core';

const Header = () => {
  return (
    <Headers>
      <h1><Link to={ user ? '/' : '/api/users/signin' }>Note3Sixty<MenuBook /></Link></h1>
      <h2><Link to={ user ? '/' : '/api/users/signin' }><MenuBook /></Link></h2>

      {user ? (
        <HeadersRight>
          <Link to='/api/users/profile'>
            <h4>{ fullName }</h4>
            <Avatar> <img src={ user.avatar ? user.avatar : user.results.avatar } alt=''/></Avatar>
          </Link>
          <HeaderNavs />
        </HeadersRight>
      ) : (
        <div>
          <Buttons
            first='Signup'
            second='Signin'
            firstLink='/api/users/signup'
            secondLink='/api/users/signin'
          />
        </div>
      ) }
    </Headers>
  );
};

export default Header;
