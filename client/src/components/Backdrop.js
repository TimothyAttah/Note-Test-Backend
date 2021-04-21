import React from 'react'
import styled from 'styled-components';

const BackdropWrapper = styled.div`
top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: 500;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
`

const Backdrop = ({onClick}) => <BackdropWrapper onClick={onClick}></BackdropWrapper>


export default Backdrop
