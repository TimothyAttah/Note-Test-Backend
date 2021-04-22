import React, {useState} from 'react'
import {  IconButton } from '@material-ui/core'
import { InsertComment } from '@material-ui/icons'
import styled from 'styled-components';

const OpenComment = ({myComment}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
   const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const Container = styled.div`
    .icon{
     position: absolute;
     left: 300px;
   }
   @media (max-width: 730px){
     .icon {
       left: 120px ;
     }
   }
   @media (max-width: 445px){
     .icon {
       left: 68px ;
       font-size: 10px;
        font-weight: bold;
        padding-top: 5px;
     }
     span {
       font-size: 12px;
       font-weight: bold;
     }
   }
  @media (max-width: 290px){
     .icon {
      left: 65px ;
      padding-top: 3.5px;
      span {
        font-size: 9px;
      }
     }
  }
  `
 
  return (
    <Container>
      <IconButton onClick={ handleClick } className='icon'><InsertComment /><span>Comment</span></IconButton>
      <div>
      {isOpen && myComment } 
      </div>
    </Container>
  )
}

export default OpenComment;
