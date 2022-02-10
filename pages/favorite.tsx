import React from 'react';
import Image from 'next/image';
import { useCookies } from 'react-cookie';

const Favorite: React.FunctionComponent<{}> = () => {
  const [cookies, setCookie] = useCookies(['image']);

  return(
      <div className='d-flex flex-row flex-wrap mt-2'>
        {cookies.image ? 
        cookies.image.map((dog: any)=>(
          // eslint-disable-next-line react/jsx-key
          <div className ="m-1 card" style={{width: "18rem"}}>
            <Image className="card-img-top" src={dog} alt="Gambar Anjing" width={300} height={300}/>
          </div>
        )): <p>Not Found</p>}
      </div>
  )
};

export default Favorite;

