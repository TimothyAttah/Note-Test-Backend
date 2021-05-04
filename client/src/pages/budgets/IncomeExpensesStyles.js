import styled from 'styled-components';

export const BudgetsContainer = styled.div`
  width: 500px;
  padding-top: 20px;
  padding-left: ${props => props.expenses ? '0' : '20px'};
  padding-right: ${props => props.expenses ? '20px' : '0'};
   h1 {
    color:  ${props => props.expenses ? 'red' : 'green'};
    opacity: 0.7;
  }
  @media (max-width: 1000px){
    width: 320px;
      h1{
      font-size: 20px;
    }
  }
  @media (max-width: 650px){
    width: 280px;
    padding-left: 10px;
      h1{
      font-size: 16px;
    }
  }
   @media (max-width: 580px){
    width: 250px;
  }
   @media (max-width: 510px){
    width: 200px;
  }
   @media (max-width: 414px){
    width: 175px;
    h1 {
      font-size: 13px;
      font-weight: bolder;
    }
  }
    @media (max-width: 360px){
    width: 160px;
  }
   @media (max-width: 320px){
    width: 130px;
     h1 {
      font-size: 11px;
      font-weight: bolder;
    }
  }
`;

export const Budgets = styled.ul`
  padding: 0;
  margin: 0;
  li {
    border: 1px solid  ${props => props.expenses ? 'red' : 'green'};
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 1000px){
    li {
      font-size: 15px;
    }
  }
  @media (max-width: 580px){
    li {
      font-size: 12px;
    }
  }
   @media (max-width: 414px){
    li {
      font-size: 10px;
      font-weight: bolder;
    }
  }
`;

export const BudgetsItems = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-weight: bold;
  span {
     padding-left: 10px;
     color: gray;
  }
  @media (max-width: 414px){
    span {
      padding-left: 5px;
      font-weight: bolder;
    }
  }
`;

export const BudgetsButton = styled.div`
  .MuiIconButton-root {
    padding: 0 5px;
    color:  ${props => props.expenses ? 'red' : 'green'};
    opacity: 0.9;
  }
   @media (max-width: 580px){
    padding: 0;
    .MuiSvgIcon-root {
      font-size: 12px;
    }
  }
   @media (max-width: 510px){
    .MuiIconButton-root {
      display: block;
      padding-bottom: 3px;
    }
  }
   @media (max-width: 414px){
   .MuiIconButton-root{
     margin-left: 15px;
   }
  }
   @media (max-width: 320px){
   .MuiIconButton-root{
     margin-left: 12px;
   }
  }
`;
