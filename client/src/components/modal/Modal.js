import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const ModalContainer = styled.div`
 width: 700px;
 margin: 0 auto;
 background-color: #fff;
 padding: 10px 20px;
 border-radius: 10px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 flex-wrap: wrap;
 z-index: 999;
 box-sizing: border-box;
 position: absolute;
 top: 300px;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 745px){
    width: 500px;
  }
  @media (max-width: 540px){
    width: 400px;
  }
  @media (max-width: 414px){
    width: 350px;
  }
  @media (max-width: 375px){
    width: 300px;
  }
  @media (max-width: 320px){
    width: 270px;
  }
  @media (max-width: 280px){
    width: 230px;
  }
`

const Modal = ({children}) => {
  return ReactDom.createPortal(
    <>
      <ModalContainer>
      {children}
      </ModalContainer>
    </>,
    document.getElementById('modal')
  )
}

export default Modal;
