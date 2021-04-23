import styled, { css } from 'styled-components';

export const HeaderDropDown = styled.div`
  padding: 0;
 
    background-color: #bdbdbd;
  ${props => props.primary && css`
  width: 120px;
  height: auto;
  box-shadow: 5px 6px 8px -9px rgba(0, 0, 0, 0.5);
   background-color: #bdbdbd;
   padding: 10px;
   margin-bottom: 5px;
   border-radius: 5px;
    :hover {
     background-color: #3f51b5;
     a {
       color: #fff;
     }
   }
     a {
      text-decoration: none;
      width: 120px;
      display: flex;
      align-items: center;
      color: #000;
    }
      @media (max-width: 445px){
      width: 80px;
      padding: 2px;
    }
  `}
`
