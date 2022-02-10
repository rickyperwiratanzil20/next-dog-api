import React from 'react';
import Link from 'next/link'

const Header: React.FunctionComponent<{}> = (props) => {
  return(
    <div className='header'>
        <p className='logo-app'><Link href="/">DOG-API</Link></p>
        <div className='header-right'>
          <p className='favorite-link'><Link href="/favorite">Favorite</Link></p>
          <p className='menu-item'>Logout</p>
        </div>
    </div>
  )
};

export default Header;
