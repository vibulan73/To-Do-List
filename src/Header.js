import React from 'react'

function Header(props) {
  return (
    <header>
        <h1>{props.title}</h1>
        {/* <h1>To Do List</h1> */}
    </header>  
  )
}
Header.defaultProps={
  title :"To Do List"
}

export default Header