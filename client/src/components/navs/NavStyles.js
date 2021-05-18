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
    background-color: crimson;
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
    color: #fff;
    span {
      padding-left: 3px;
    }
    :hover {
      border-bottom: 2px solid #909090;
      color: #377cff;
      background-color: #e5e5e5;
    }
  }
  @media (max-width: 900px){
    display: none;
  }
  
`
export const NavsLeft = styled.div`
.MuiButton-root {
  padding: 5px 12px;
   background-color: crimson;
   color: #fff;
    :hover {
       background-color: #e5e5e5;
     }
    a {
     color: #fff;
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
  borderBottom: '2px solid #909090',
  color: '#377cff',
  backgroundColor: '#e5e5e5'
}


export const SidebarContainer = styled.div`
  width: 200px;
  padding: 30px 20px 0px 20px;
`;

export const Sidebars = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 200px;
  li {
      display: flex;
    align-items: center;
    
  }
  li a {
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    margin: 10px 0;
    padding: 15px;
    background-color: #377cff;
    border-radius: 6px;
    span {
      padding-left: 10px;
    }
    :hover {
      background-color: #3d3d3d;
      color: #909090;
    }
  }
`;