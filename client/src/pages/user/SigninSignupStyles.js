import styled, {css} from 'styled-components';

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.5px;
`

export const Subtitle = styled.h3`
  display: flex;
  justify-content: flex-start;
  color: #356DFB;
  text-transform: capitalize;
;
`

export const Description = styled.small`
  color: #777;
  font-size: 18px;
  text-transform: capitalize;
   @media (max-width: 414px){
    font-size: 16px;
  }
  ${props => props.primary && css`
     display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  a {
    color: #356dfb;
    text-decoration: none;
    margin-left: 10px;
  }
  `}
   @media (max-width: 414px){
    font-size: 10px;
    font-weight: bold;
    a {
      margin-left: 4px;
    }
  }
`;

export const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    text-transform: uppercase;
    font-size: 15px;
    color: #B6B8C9;
    margin: 0 10px;
  }
`

export const ButtonWrapper = styled.div`
  a {
  position: relative;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 30px 0;
  }
  a > button {
  width: 100%;
  padding: 10px 0;
  background-color: crimson;
  color: #fff;
   @media (max-width: 414px){
    font-size: 10px;
  }
:hover {
  background-color: #073cc2;
  img {
     border: 1px solid #356DFB;
  }
}

span {
  justify-content: center;
   @media (max-width: 414px){
    margin-left: 20px;
  }
}
img {
  margin-right: 20px;
  position: absolute;
  left: 0;
  background-color: #fff;
  padding: 6px 10px;
  border: 1px solid crimson;
   @media (max-width: 414px){
    width: 22.5px;
  }
}
  }
`
