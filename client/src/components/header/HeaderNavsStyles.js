import styled, { css } from 'styled-components';

export const HeaderDropDown = styled.div`
  padding: 0;
  ${props => props.primary && css`
  width: 150px;
  height: auto;
   padding: 10px;
   margin-bottom: 5px;
   border-radius: 5px;
   p {
     font-weight: 400;
     font-size: 14px;
     margin: -10px 0;
     padding: 0;
   }
    :hover {
     background-color: #3f51b5;
     a {
       color: #fff;
     }
   }
     a {
      text-decoration: none;
      width: 150px;
      display: flex;
      align-items: center;
      color: #3f51b5;
      h4 {
        padding-right: 7px;
      }
    }
      @media (max-width: 445px){
      width: 80px;
      padding: 2px;
    }
  `}
`
