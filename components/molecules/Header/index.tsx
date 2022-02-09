import React from 'react';
import Link from 'next/link'

const Header: React.FunctionComponent<{}> = (props) => {
  return(
    <div className='header'>
        <p className='logo-app'>Dog-API</p>
        <Link href="/favorite">Favorite</Link>
        <p className='menu-item'>Logout</p>
    </div>
  )
};

export default Header;
