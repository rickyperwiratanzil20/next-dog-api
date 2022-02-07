import React from 'react';
import { ICFacebook, LogoImportir } from '../../../public/assets';
import Image from 'next/image'

const Footer: React.FunctionComponent<{}> = (props) => {
  return(
    <div>
      <div className='footer'>
        <div className='logo'>
          <Image className='logo' src={LogoImportir} alt="Landscape picture"/>
        </div>
        <div className='sosial-wrapper'>
        </div>
      </div>
      <div className='copyright'>
        <p>Copyright</p>
      </div>
    </div>
  )
};

export default Footer;
