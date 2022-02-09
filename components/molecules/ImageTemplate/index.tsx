import React from 'react';
import Image from 'next/image';
import { useCookies } from "react-cookie"

const ImageTemplate:  React.FunctionComponent<{
  Gambar : string,
}>= (props) => {
  const [cookie, setCookie] = useCookies(["image"]);
  const oldImage = cookie.image;

  const getImage = () => {
    setCookie("image", "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg", {
      path: "/",
      maxAge: 3600, // Expires after 1hr
      sameSite: true,
    })
  }

  return(
    <div className ="m-1 card" style={{width: "18rem"}}>
      <Image className="card-img-top" src={props.Gambar} alt="Gambar Anjing" width={300} height={300}/>
      <div className ="card-body">
        <button className='btn btn-danger' onClick={getImage}>Favorite</button>
      </div>
    </div>
  )
};

export default ImageTemplate;
