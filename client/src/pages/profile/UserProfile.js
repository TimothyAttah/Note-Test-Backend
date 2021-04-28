import React, {useEffect, useState} from 'react';
import { Avatar, Button, Divider, Fab } from '@material-ui/core'
import nameToInitials, {user, info} from '../../components/NameInitials'
import styled, { css } from 'styled-components';
import { images } from '../../components/Images';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'




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
 `}
`


const UserProfile = () => {
  const dispatch = useDispatch();
  const [ userProfile, setUserProfile ] = useState( null )
  const { id } = useParams();
  
  useEffect( () => {
    JSON.parse( localStorage.getItem( 'info' ) );
     fetch( `http://localhost:8080/auth/users/${ id }/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+localStorage.getItem('jwt')
    }
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
      } else {
        setUserProfile(data)
    }
    } ).catch( err => {
    console.log(err);
  })
  }, [ dispatch, id ] );

  const [showFollow, setShowFollow] = useState(info && info.result ? !info.result.following.includes(id ): true)
 
  const fullName = `${userProfile && userProfile.user.firstName } ${ userProfile && userProfile.user.lastName }`
 


const followUser = () => {
    fetch( 'http://localhost:8080/auth/users/follow', {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+ localStorage.getItem('jwt')
      },
      body: JSON.stringify({followId: id})
    } ).then( res => res.json() )
      .then( data => {
        console.log(data);
        localStorage.setItem('info', JSON.stringify(data))
        setUserProfile( ( prevState ) => {
          return {
            ...prevState,
            info: {
              ...prevState.user,
            followers: [...prevState.user.followers, data._id]
            }
          }
        } )
        setShowFollow( false )
        window.location.reload(false)
      } )
      .catch( err => {
      console.log(err);
    })
  }

   

  const unFollowUser = () => {
    fetch( 'http://localhost:8080/auth/users/unfollow', {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+ localStorage.getItem('jwt')
      },
      body: JSON.stringify({unfollowId: id})
    } ).then( res => res.json() )
      .then( data => {
       localStorage.setItem('info', JSON.stringify(data))
        setUserProfile( ( prevState ) => {
          const newFollower = prevState.user.followers.filter(item => item !== data._id)
          return {
            ...prevState,
            user: {
              ...prevState.user,
              followers: newFollower
            }
          }
        } )
         setShowFollow( true );
       window.location.reload( false );
      
      } )
      .catch( err => {
      console.log(err);
    })
  }

console.log(userProfile);



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
                {  showFollow ? (
                  <Button variant='contained' color='primary' onClick={ () => followUser() }>Follow</Button>
                  ) : (
                    <Button variant='contained' color='primary' onClick={()=> unFollowUser()}>Unfollow</Button>
                     )
                  }
               {/* <Button variant='contained' color='primary' onClick={ () => followUser() }>Follow</Button>
                 <Button variant='contained' color='primary' onClick={()=> unFollowUser()}>Unfollow</Button> */}
              </div>
              
            </ProfileRight>
          </Profiles>
          <Divider />
          <div>
            {
              userProfile.posts.map( note => {
                return (
                  <div key={ note._id }>
                    <h2>{ note.title }</h2>
                    <p>{ note.content }</p>
                  </div>
                );
              } )
            }
          </div>
        </>
      ) : (
        <h2>Loading profile...</h2>
      ) }
    </>
  );
};

export default UserProfile;
