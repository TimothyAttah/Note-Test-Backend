import React from 'react'
import Nav from '../../components/navs/Nav'
import NoteLists from './NoteLists'

const Notes = () => {
  return (
    <div>
      <Nav />
      <h2>Recent notes posts</h2>
      <NoteLists />
    </div>
  )
}

export default Notes
