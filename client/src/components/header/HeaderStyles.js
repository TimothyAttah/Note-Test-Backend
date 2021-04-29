import styled from 'styled-components';

export const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  position: sticky;
  top: 0;
  z-index: 200;
  background-color: white;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
  h1 > a {
    color: #3f51b5;
    font-family: 'Cursive', serif;
    text-shadow:  -3px -3px 3px #fff7,
               3px 3px 3px #0003;
  }
    h2 {
      display: none;
    }
  @media (max-width: 414px){
    h1 {
      display: none;
    }
    h2 {
     display: block;
     a {
      color: #3f51b5;
     }
      .MuiSvgIcon-root {
      width: 35px;
      height: 35px;
    }
    }
    .MuiButtonGroup-groupedContainedPrimary:not(:last-child),
    .MuiButtonGroup-groupedHorizontal:not(:first-child){
       font-size: 12px;
       padding: 5px;
    }
   
  }
  @media (max-width: 375px){
     .MuiButtonGroup-groupedContainedPrimary:not(:last-child),
    .MuiButtonGroup-groupedHorizontal:not(:first-child){
       font-size: 8px;
       padding: 5px;
       font-weight: bold;
       letter-spacing: 0.8px;
    }
  }
`;

export const HeadersRight = styled.div`
display: flex;
a {
  display: flex;
  color: black;
  align-items: center;
  h4 {
    padding-right: 10px;
    color: #000;
  }
  @media (max-width: 414px){
    h4 {
      display: none;
    }
  }
}
`
