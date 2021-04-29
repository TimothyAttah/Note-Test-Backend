import React, {useState} from 'react'

const ReadMore = ( { children, maxCharacterCount = 150 } ) => {
  const [ isTruncated ] = useState( true );

  const text = children

  const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text
  return (
    <div>
      {resultString}...
    </div>
  )
}

export default ReadMore
