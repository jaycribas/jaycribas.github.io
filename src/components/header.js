import React from 'react'

const Header = ({name}) => {
  return (
    <nav>
      {name.toUpperCase()}
    </nav>
  )
}

export default Header
