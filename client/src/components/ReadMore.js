import React, { useState } from 'react';
import styled from 'styled-components';

const ReadMoreWrapper = styled.div`
  p {
    padding: 20px 0;
    line-height: 22px;
  }
`;


const ReadMore = ( { children, maxCharacterCount = 150 } ) => {
  const [ isTruncated ] = useState( true );
  const text = children
  const resultString = isTruncated ? text.slice( 0, maxCharacterCount ) : text
  return (
    <ReadMoreWrapper>
      <p>{resultString }...</p>
    </ReadMoreWrapper>
  );
};

export default ReadMore;
