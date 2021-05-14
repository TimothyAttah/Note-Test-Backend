import styled from 'styled-components';

export const Navs = styled.nav`
  background-color: #377cff;
  display: flex;
  justify-content: space-between;
  align-items: center;
   padding: 15px 20px 5px 10px;
   position: sticky;
  top: 67px;
   z-index: 100;
   .MuiIconButton-root {
     color: white;
   }
   @media (max-width: 445px){
     top: 60px;
   }
`;

export const NavsCenter = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;
  width: 600px;
    margin: 0;
    padding: 0;

  li {
   display: flex;
    align-items: center;
    background-color: #e5e5e5;
     box-shadow:  -2px -2px 2px #fff7,
               2px 2px 2px #0002;
    cursor: pointer;
         :hover {
    animation: opacity 0.2s linear;
  @keyframes opacity{
  from{
    opacity: 0;
    transform: scale(0.7);
  }
}
  }
  }
   li > a {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    color: black;
    span {
      padding-left: 3px;
    }
    :hover {
      border-bottom: 2px solid teal;
      color: teal;
    }
  }
  @media (max-width: 900px){
    display: none;
  }
  
`
export const NavsLeft = styled.div`
.MuiButton-root {
  padding: 5px 12px;
   background-color: #e5e5e5;
    a {
     color: black;
     display: flex;
     justify-content: center;
     align-items: center;
   }
}

@media (max-width: 414px){
display: none;
}
`
export const NavsRight = styled.div`
 display: none;
 @media (max-width: 414px){
display: block;
}
`


export const activeNav = {
  borderBottom: '2px solid teal',
  color: 'teal'
}
