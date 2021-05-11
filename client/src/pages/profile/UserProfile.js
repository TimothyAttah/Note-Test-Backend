import React, {useEffect, useState} from 'react';
import { Avatar, Button, Divider, Fab } from '@material-ui/core';
import nameToInitials, { user } from '../../components/NameInitials';
import styled, { css } from 'styled-components';
import { images } from '../../components/Images';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ReadMore from '../../components/ReadMore';


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

const ProfilePostContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 20px;
`;

const ProfilePost = styled.div`
  width: 400px;
  height: 300px;
  border: 2px solid gray;
  position: relative;
  border-radius: 5px;
  h2 {
    padding: 20px 10px 10px 10px;
  }
   @media (max-width:450px){
    width: 250px;
    h2 {
      font-size: 18px;
    }
  }
`;



const ProfilePostContent = styled.div`
padding: 10px 10px 20px 10px;

`;


const ProfilePostButton = styled.div`
padding-top: 50px;
position: absolute;
bottom: 20px;
right: 10px;
`;




const UserProfile = () => {
  const dispatch = useDispatch();
  const [ userProfile, setUserProfile ] = useState( null );
  const { id } = useParams();
  
  useEffect( () => {
     fetch( `/auth/users/${ id }/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem( 'jwt' )
    }
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
      } else {
        setUserProfile( data );
    }
    } ).catch( err => {
    console.log(err);
  })
  }, [ dispatch, id ] );

  const [ showFollow, setShowFollow ] = useState( user && user.results ? !user.results.following.includes( id ) : true );
 
  const fullName = `${userProfile && userProfile.user.firstName } ${ userProfile && userProfile.user.lastName }`

  //http://localhost:8080/auth/users/follow
  const followUser = () => {
    fetch( `/auth/users/follow`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem( 'jwt' )
      },
      body: JSON.stringify( { followId: id } )
    } ).then( res => res.json() )
      .then( data => {
        console.log( data );
        localStorage.setItem( 'user', JSON.stringify( data ) );
        setUserProfile( ( prevState ) => {
          return {
            ...prevState,
            user: {
              ...prevState.user,
              followers: [ ...prevState.user.followers, data._id ]
            }
          }
        } );
        setShowFollow( false );
      } )
      .catch( err => {
        console.log( err );
      } )
  };

  const unFollowUser = () => {
    fetch( `/auth/users/unfollow`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem( 'jwt' )
      },
      body: JSON.stringify( { unfollowId: id } )
    } ).then( res => res.json() )
      .then( data => {
        localStorage.setItem( 'user', JSON.stringify( data ) );
        setUserProfile( ( prevState ) => {
          const newFollower = prevState.user.followers.filter( item => item !== data._id );
          return {
            ...prevState,
            user: {
              ...prevState.user,
              followers: newFollower
            }
          }
        } );
        setShowFollow( true );
        //  window.location.reload( false );
      } )
      .catch( err => {
        console.log( err );
      } )
  };

  console.log( userProfile );

  return (
    <>
      {userProfile ? (
        <>
          <Profiles>
            <ProfileCardIcon>
              <ProfileCardIcon primary>
                { images ? (
                  <Avatar>{ images && <img src={ images.Benita } alt='' /> }</Avatar>
                ) : (
                  <Avatar>{ nameToInitials( fullName ) }</Avatar>
                ) }
              </ProfileCardIcon>
        
            </ProfileCardIcon>

            <ProfileRight>
              <>
                <h1>{ fullName }</h1>
                <h4>{ userProfile.user.email }</h4>
              </>
              <Divider />
              { userProfile.posts && (
                <ProfileRight primary>
                  <h4><span><Fab color='secondary'>{ userProfile.posts.length }</Fab></span>Posts</h4>
                  <h4><span><Fab color='secondary'>{ userProfile.user.followers.length }</Fab></span>Followers</h4>
                  <h4><span><Fab color='secondary'>{ userProfile.user.following.length }</Fab></span>Following</h4>
                </ProfileRight>
              ) }
              <div>
                { showFollow ? (
                  <Button variant='contained' color='primary' onClick={ () => followUser() }>Follow</Button>
                ) : (
                  <Button variant='contained' color='primary' onClick={ () => unFollowUser() }>Unfollow</Button>
                )
                }
              </div>
              
            </ProfileRight>
          </Profiles>
          <Divider />
          <ProfilePostContainer>
            {
              userProfile.posts.map( note => {
                return (
                   <div key={note._id} style={{paddingBottom: '30px'}}>
                <ProfilePost >
                  <h2>{ note.title }</h2>
                  <Divider />
                  <ProfilePostContent>
                     <ReadMore>
                  { note.content }
                    </ReadMore>
                </ProfilePostContent>
                  <ProfilePostButton>
                     <Button variant='contained' size='small' color='primary'>
                      <Link to={ `/api/users/notes/${ note._id }/note/read` }>Read More</Link>
                    </Button>
                 </ProfilePostButton>
                   
                  
              </ProfilePost>
              </div>
                );
              } )
            }
          </ProfilePostContainer>
        </>
      ) : (
        <h2>Loading profile...</h2>
      ) }
    </>
  );
};

export default UserProfile;
