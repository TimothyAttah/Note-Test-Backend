import React, { useState } from 'react';
import { v4 } from 'uuid';

const TodosForm = () => {
  const [ content, setContent ] = useState( '' );
  const handleSubmit = ( e ) => {
    e.preventDefault();
    const newTodos = {
      id: v4(),
      content
    }
    console.log( newTodos );
    setContent('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='content'
          value={content}
          onChange={ ( e ) => setContent( e.target.value ) }
        />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default TodosForm;
