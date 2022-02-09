import React from 'react';
import Image from 'next/image';
import { useCookies } from 'react-cookie';

const Favorite: React.FunctionComponent<{}> = () => {
  const [cookies, setCookie] = useCookies(['image']);

  return(
      <div>
          <Image className="card-img-top" src={cookies.image} alt="Gambar Anjing" width={300} height={300}/>
      </div>
  )
};

export default Favorite;

