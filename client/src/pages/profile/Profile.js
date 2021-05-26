import React, {useEffect, useState} from 'react';
import { Avatar, Button, Divider, Fab } from '@material-ui/core'
import { Camera } from '@material-ui/icons'
import styled, { css } from 'styled-components';
import { images } from '../../components/Images';
import { useDispatch, useSelector } from 'react-redux';
import { myNotes } from '../../redux/actions/notesActions';
import ReadMore from '../../components/ReadMore';
import { Link } from 'react-router-dom';
import FileBase from 'react-file-base64';
import NamesInitials, { fullName, user } from '../../components/NamesInitials';
import {uploadAvatar, allUploadAvatars, updateAvatar} from '../../redux/actions/avatarActions'





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
 border: 1px solid #eee;
  width: 250px;
  height: 300px;
  ${props => props.primary && css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .MuiAvatar-colorDefault{
      /* background-color: #fff; */
      color: #377cff;
    }
    .MuiAvatar-root {
      width: 150px;
      height: 150px;
      border: 2px solid #bdbdbd;
      font-size: 40px;
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

const AvatarContainer = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin: 15px auto;
  border: 1px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
 
   :hover {
       span{
           bottom: -15%;
        }
     }
  img {
    width: 100%;
    height:100%;
    display: block;
    object-fit: cover;
     position: relative;
    
  }
  span {
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: #377cff;
    opacity: 0.7;
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    color: #ddd;
    transition: 0.5s ease-in-out;
    #file_upload {
      position: absolute;
      top: 0;
      left:0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
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



const Profile = () => {
  const dispatch = useDispatch();
  const [ avatar, setAvatar ] = useState( '' );
  const [ previewSource, setPreviewSource ] = useState( '' );
  useEffect( () => {
    dispatch( myNotes() )
    dispatch(allUploadAvatars())
  },[dispatch])
  const notes = useSelector( state => state.notesReducer.notes );

  
  console.log(user);
  

  // const uploadImage = () => {
  //   const data = new FormData();
  //   data.append( 'file', image )
  //   data.append( 'upload_preset', 'note3sixty_v1' )
  //   data.append( 'cloud_name', 'timothycloud' )
  //   fetch( '/upload/upload_avatar', {
  //     method: 'POST',
  //     body: data
  //   } )
  //     .then( res => res.json() )
  //     .then( data => {
  //       console.log('Avatar data' + data);
  //       setAvatar(data.secure_url);
  //     } )
  //     .catch( err => {
  //     console.log(err);
  //   })
  // }
  
  // console.log( avatar );

  const handleInputAvatar = ( e ) => {
    const file = e.target.files[ 0 ]
    previewFile(file)
  }

  const previewFile = ( file ) => {
    const reader = new FileReader();
    reader.readAsDataURL( file )
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }
  

  const handleAvatar = ( e ) => {
    e.preventDefault();
    if ( !previewSource ) return;
    uploadImage(previewSource)
  }

  const uploadImage = async (base64EncodedImage) => {
   try {
     await fetch( '/upload', {
       method: 'POST',
       body: JSON.stringify( { data: base64EncodedImage } ),
       headers: {'Content-type': 'application/json'}
     })
   } catch (error) {
     console.log(error);
   }
  }

  // const handleSubmit = ( e ) => {
  //   e.preventDefault();
  //   dispatch( uploadAvatar( avatar ) )
  //   console.log(avatar);
  // }

  useEffect( () => {
    if ( avatar ) {
     const data = new FormData()
  data.append( 'file', avatar )
  data.append( 'upload_preset', 'note3sixty_v1' )
  data.append( 'cloud_name', 'timothycloud' )
  fetch( 'https://api.cloudinary.com/v1_1/timothycloud/image/upload', {
    method: 'POST',
    body: data
  } )
     .then( res => res.json() )
    .then( data => {
       console.log( data );
      dispatch(updateAvatar(data.url))
    } )
    .catch( error => {
      console.log( error );
    } )
    }
  },[ avatar, dispatch])

 const updateImage = (file) => {
    setAvatar(file)
  }
 console.log(user.avatar);
  return (
    <>
      {user || notes ? (
        <>
          <Profiles>
            <ProfileCardIcon>
              <ProfileCardIcon primary>
                {/* <Avatar >
                  {previewSource ? <img src={ previewSource } alt=''/> : (<NamesInitials fullName={ fullName } />)}
                </Avatar> */}
                <AvatarContainer>
                  <img src={ user.avatar ? user.avatar : user.results.avatar} alt=''/>
                <span>
                  <Camera />
                  <p>Change</p>
                  <input
                    type='file'
                      onChange={(e) => updateImage(e.target.files[0])}
                    id='file_upload'
                  />
                </span>
                </AvatarContainer>
              </ProfileCardIcon>


              {/* <form onSubmit={handleAvatar}>
                <input
                  type='file'
                  name='image'
                  onChange={ handleInputAvatar }
                  value={avatar}
                />
                <button type='submit'>Change</button>
              </form>
              { previewSource && (
                <img src={ previewSource } alt='' style={ { height: '200px' } }/>
              )} */}

             
              {/* <form onSubmit={handleSubmit}>
                 <input
                  type='file'
                 
                  name='name'
                  onChange={(e) => setAvatar(e.target.files[0])}
                />
                <button type='submit'>Change</button>
              </form>
              { avatar && (
                <img src={ avatar } alt='' style={ { height: '200px' } }/>
              )} */}
            </ProfileCardIcon>
            <ProfileRight>
              <h1>{ fullName }</h1>
              <h4>{ user.results.email }</h4>
              <Divider />
              <ProfileRight primary>
                <h4><span><Fab color='secondary'>{ notes.length }</Fab></span>Posts</h4>
                <h4><span><Fab color='secondary'>{ user.results.followers.length }</Fab></span>Followers</h4>
                <h4><span><Fab color='secondary'>{ user.results.following.length }</Fab></span>Following</h4>
              </ProfileRight>
            </ProfileRight>
          </Profiles>
          <Divider />
          <ProfilePostContainer>
            { notes ? (
              notes.map( note => {
                return (
                  <div key={ note._id } style={ { paddingBottom: '30px' } }>
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
                )
              } )
            ) : (
              <h2>Loading...</h2>
            ) }
          </ProfilePostContainer>
        </>
      ) : (
        <h2>Loading...</h2>
      ) }
    </>
  )
}

export default Profile;

  // { images ? (
  //                 <div> 
  //                  <Avatar>{ <img src={avatar ? avatar : user.results.avatar} alt='' /> }</Avatar>
  //                   <div>
  //                     <form onSubmit={handleAvatar}>
  //                        <input type='file' name='file' onChange={ ( e ) => setImage(e.target.files[0])} />
  //                       <FileBase
  //                         type='file'
  //                         multiple={ false }
  //                         onDone={({base64}) => setAvatar({avatar: base64})}
  //                       />
  //                     <button>Change</button>
  //                    </form>
  //                   </div>
  //          </div>
  //         ) : (
  //             <Avatar>{ nameToInitials( fullName ) }</Avatar>
  //         )}