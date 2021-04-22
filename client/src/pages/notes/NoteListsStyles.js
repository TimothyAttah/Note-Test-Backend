import styled, { css } from 'styled-components';

export const Notes = styled.div`
  width: 700px;
  height: auto;
  box-shadow: 5px 6px 8px -9px rgba(0, 0, 0, 0.5);
  padding: 20px 10px;
  box-sizing: content-box;
  position: relative;
  ${props => props.primary && css`
  display: flex;
  justify-content: space-between;
  box-shadow: none;
  padding: 10px 0;
  width:100%;
  `};

  @media (max-width: 730px){
    width: 400px;
  }
  @media (max-width: 445px){
    width: 250px;
  }
  @media (max-width: 290px){
    width: 230px;
  }
`;

export const NoteLeft = styled.div`
display: flex;
align-items: center;
height: 55px;

.MuiAvatar-root{
  height: 60px;
  width: 60px;
};
.MuiSvgIcon-root {
  height: 50px;
  width: 50px;
};

${props => props.primary && css`
  padding: 8px 10px;
  display: block;
  h5 {
    padding: 5px 0;
  };
  
  @media (max-width: 730px){
    padding-left: 0;
  }
  @media (max-width: 445px){
    font-size: 12px;
  }
`};
@media (max-width: 730px){
  display: block;
  .MuiAvatar-root{
  height: 30px;
  width: 30px;
  margin: 10px auto;
};
.MuiSvgIcon-root {
  height: 28px;
  width: 28px;
}
};

@media (max-width: 445px){
   .MuiAvatar-root{
  margin: 0;
}
}
`;

export const NoteCenter = styled.div`
  width: 400px;
  p {
    padding-top: 20px;
  }
  @media (max-width: 730px){
    width: 220px;
    h2 {
      font-size: 18px;
    }
  }
  @media (max-width: 445px){
    width: 150px;
    padding-left: 10px;
     h2 {
      font-size: 12px;
    }
     p {
      width: 120px;
      font-size: 11px;
      line-height: 15px;
    }
  };
`;

export const NoteComments = styled.div`
 display: flex;
 justify-content: space-around;
 padding: 15px 0;
 ${props => props.primary && css`
 position: relative;
 .MuiButton-root {
   font-size: 10px;
   text-transform: capitalize;

 }
 .MuiSvgIcon-root{
   font-size: 15px;
 }
  span{
     font-size: 15px;
     padding-left: 5px;
   }
 .MuiButton-contained, .MuiButtonBase-root {
   padding: 5px;
   margin: 0;
   position: absolute;
   right: 0;
   top: 8px;
 }
 @media (max-width: 445px){
 .MuiButton-contained, .MuiButtonBase-root {
   padding: 2px;
    a {
     font-size: 10px;
   }
 }
 }
 @media (max-width: 290px){
   .MuiSvgIcon-root, span{
   font-size: 10px;
   font-weight: bold;
 }
 }
 `}
 @media (max-width: 445px){
   h4 {
     font-size: 12px;
   }
 }
`;

export const NoteCommentsLeft = styled.div`
 display: flex;
 align-items: center;
 .MuiSvgIcon-root {
    font-size: 18px;
 }
 h4 > span {
   padding-left: 5px;
 }
 @media (max-width: 445px){
   .MuiSvgIcon-root, h4 {
    font-size: 12px;
 }
 }
`;
