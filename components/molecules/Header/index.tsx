import React from 'react';

const Header: React.FunctionComponent<{}> = (props) => {
  return(
    <div className='header'>
        <p className='logo-app'>MERN-Blog</p>
        <p className='menu-item'>Logout</p>
    </div>
  )
};

export default Header;
