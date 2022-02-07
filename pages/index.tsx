import React, { useEffect, useState } from 'react';
import Image  from 'next/image';

const Index: React.FunctionComponent<{}> = () => {

  const [Gambar,setGambar] = useState('');
  const [Anjing,setAnjing] = useState('affenpinscher');

  const ambilData = async () =>{
    let link = await fetch('https://dog.ceo/api/breed'+Anjing+'/images/random');
    let json = await link.json();

    setGambar(json['message']);
  };

  const ambilInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAnjing(value);
  }

  const submitInput = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    ambilData();
  } 

  useEffect(()=>{
    ambilData();
  }, []);

  return(
    <div>
      <form onSubmit={submitInput} className="d-flex mt-2">
        <input id="input-anjing" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={ambilInput}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <img className="mt-2 mb-2" src={Gambar} alt="" />
    </div>
  )
};

export default Index;