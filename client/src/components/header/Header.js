import React from 'react';
import { Link } from 'react-router-dom';
import { MenuBook } from '@material-ui/icons'
import styled from 'styled-components';
import Buttons from '../buttons/Button';
import { colors } from '../elements';

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
  h1 > a {
    color: ${colors.teal};
    font-family: 'Cursive', serif;
  }
`;


const Header = () => {
  return (
    <Headers>
      <h1><Link>Note3Sixty<MenuBook /></Link></h1>
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
