import React, {useEffect} from 'react';
import { Avatar, Divider, Fab } from '@material-ui/core'
import nameToInitials, {fullName, user} from '../../components/NameInitials'
import styled, { css } from 'styled-components';
import { images } from '../../components/Images';
import { useDispatch, useSelector } from 'react-redux';
import { myNotes } from '../../redux/actions/notesActions';




const Profiles = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 700px){
    display: block;
  padding-left: 200px;
  }
  @media (max-width: 545px){
    padding-left: 100px;
  }
  @media (max-width: 450px){
    padding-left: 30px;
  }
`;

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
  @media (max-width: 600px){
   width: 200px;
   height: 200px;
     .MuiAvatar-root {
      width: 100px;
      height: 100px;
    }
  }
`;

const ProfileRight = styled.div`
 width: 500px;
 ${props => props.primary && css`
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
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
    @media (max-width: 600px){
      h4{
        height: 65px;
      }
      .MuiFab-root {
        width: 35px;
        height: 35px;    
      }
 };
 @media (max-width: 450px){
   padding: 30px 0;
    h4 {
      width: 100px;
      font-size: 12px;
      font-weight: bolder;
      padding-right: 15px;
      align-items: flex-start;
    }
  }
 `};
 @media (max-width: 850px){
   width: 300px;
 };

 @media (max-width: 450px){
   h1 {font-size: 20px;}
   h4{font-size: 12px;}
 };
  @media (max-width: 300px){
    width: 150px;
 };
`


const Profile = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(myNotes())
  },[dispatch])
  const notes = useSelector( state => state.notesReducer.notes );
  console.log( notes );
  console.log( user );
  
  return (
    <>
      {user || notes ? (
        <>
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
        <h4>{ user.results.email }</h4>
        <Divider/>
        <ProfileRight primary>
            <h4><span><Fab color='secondary'>{ notes.length }</Fab></span>Posts</h4>
          <h4><span><Fab color='secondary'>{user.results.followers.length}</Fab></span>Followers</h4>
          <h4><span><Fab color='secondary'>{user.results.following.length}</Fab></span>Following</h4>
        </ProfileRight>
      </ProfileRight>
      </Profiles>
      <Divider />
      <div>
        { notes ? (
          notes.map( note => {
            return (
              <div key={note._id}>
                <h2>{note.title}</h2>
                <p>{ note.content }</p>
              </div>
            )
          })
        ): (
          <h2>Loading...</h2>
       )}
      </div>
        </>
      ): (
        <h2>Loading...</h2>
      )}
    </>
  )
}

export default Profile;
