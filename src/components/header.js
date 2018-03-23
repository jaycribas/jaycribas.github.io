import React from 'react'

const Header = ({ name }) => (
  <nav>
    {name.toUpperCase()}
  </nav>
);

export default Header;
