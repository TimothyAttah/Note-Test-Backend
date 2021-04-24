import { Avatar, Divider, Fab } from '@material-ui/core'
import React from 'react'
import nameToInitials, {fullName, user} from '../../components/NameInitials'
import styled, { css } from 'styled-components';
import {images} from '../../components/Images'


const Profiles = styled.div`
  display: flex;
  justify-content: space-around;
`

const ProfileCardIcon = styled.div`
  border: 2px solid green;
  width: 250px;
  height: 300px;
  ${props => props.primary && css`
    display: flex;
    justify-content: center;
    align-items: center;
    .MuiAvatar-colorDefault{
       background-color: #fff;
    }
    .MuiAvatar-root {
      width: 150px;
      height: 150px;
      border: 2px solid #bdbdbd;
     img {
       object-fit: contain;
       max-width: 100%;
     }
    }
  `}
`;

const ProfileRight = styled.div`
 width: 500px;
 ${props => props.primary && css`
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    h4 {
      color: #bdbdbd;
        display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
       height: 85px;
    }
    span {
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
 `}
`


const Profile = ( ) => {
  
  return (
    <Profiles>
      <ProfileCardIcon>
        <ProfileCardIcon primary>
          { images ? (
            <Avatar>{ images && <img src={images.Benita} alt='' />}</Avatar>
          ) : (
              <Avatar>{ nameToInitials( fullName ) }</Avatar>
          )}
          </ProfileCardIcon>
        
      </ProfileCardIcon>

      <ProfileRight>
        <h1>{ fullName }</h1>
        <h4>{ user && user.email }</h4>
        <Divider/>
        <ProfileRight primary>
          <h4><span><Fab color='secondary'>90</Fab></span>Posts</h4>
          <h4><span><Fab color='secondary'>1.5k</Fab></span>Followers</h4>
          <h4><span><Fab color='secondary'>304</Fab></span>Following</h4>
        </ProfileRight>
      </ProfileRight>
    </Profiles>
  )
}

export default Profile;
