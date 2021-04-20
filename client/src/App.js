import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  *{
    margin: 0;
    box-sizing: border-box;
  }
  width: 100%;
  max-width: 1300px;
  border: 2px solid red;
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
`;

const App = () => {
  return (
    <MainContainer>
      <h1>Hello world</h1>
    </MainContainer>
  );
};

export default App;
