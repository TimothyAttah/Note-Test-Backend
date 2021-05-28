import styled from 'styled-components';
import { images } from '../../components/Images'

export const BalanceContainer = styled.div`
  width: 100%;
  height: 350px;
  background: url(${images.backgroundImgTwo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
`;

export const TotalBalance = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
 width: 100%;
  color: #fff;
 
  position: relative;
  padding-top: 30px;
  padding-bottom: 50px;
  opacity: 0.9;
  overflow: hidden;
  h1, h2 {
     font-size: 50px;
  }
  h2 {
   padding-right: 10px;
  }
  @media (max-width: 1100px){
    font-size: 25px;
  }
  @media (max-width: 900px){
    font-size: 20px;
  }
  @media (max-width: 550px){
    padding-top: 10px;
    padding-bottom: 18px;
     h1, h2{
      font-size: 26px;
    }
  }
  @media (max-width: 375px){
    h1, h2{
      font-size: 20px;
    }
  }
  @media (max-width: 280px){
    h1, h2{
      font-size: 15px;
    }
  }
  `;

export const TotalContainer = styled.div`
  padding-left: 450px;
  padding-top: 30px;
   @media (max-width: 1100px){
    padding-left: 300px;
  }
   @media (max-width: 768px){
    padding-left: 220px;
  }
   @media (max-width: 650px){
    padding-left: 150px;
   padding-top: 22px;
  }
   @media (max-width: 450px){
    padding-left: 100px;
  }
   @media (max-width: 414px){
    padding-left: 80px;
  }
   @media (max-width: 375px){
    padding-left: 65px;
  }
   @media (max-width: 320px){
    padding-left: 55px;
  }
   @media (max-width: 280px){
    padding-left: 38px;
  }
`;


export const BalanceWrapper = styled.div`
  padding-left: 320px;
 width: 80%;
 @media (max-width: 1100px){
    padding-left: 180px;
  }
    @media (max-width: 650px){
    padding-left: 90px;
  }
   
    @media (max-width: 450px){
    padding-left: 60px;
    width: 90%;
  }
    @media (max-width: 400px){
    padding-left: 30px;
  }
    @media (max-width: 375px){
    padding-left: 50px;
  }
`;

export const TotalIncome = styled.div`
  width: 400px;
  position: relative;
  opacity: 0.9;
  background-color: ${ props => props.primary ? 'red' : 'green' };
  color: #fff;
  padding: 10px 20px;
  span {
    position: absolute;
    right: 20px;
    letter-spacing: 1.5px;
  };
   @media (max-width: 900px){
   font-size: 15px;
   width: 300px;
  }
   @media (max-width: 550px){
   font-size: 13px;
   width: 220px;
   span {
     right: 10px;
     letter-spacing: 1px;
   }
  }
   @media (max-width: 375px){
   font-size: 10px;
   width: 200px;
   span {
     right: 10px;
     letter-spacing: 0.5px;
   }
  }
`;