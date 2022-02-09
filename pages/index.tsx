import React, { useEffect, useState } from 'react';
import ImageTemplate from '../components/molecules/ImageTemplate';

export default function Test({dataDog}: any, dataArray: []) {
    dataArray = dataDog.message;

    const [dog,setDog] = useState('');
    const [listData, setListData] = useState([]);

    const getData = async () =>{
        let link = await fetch('https://dog.ceo/api/breed/'+dog+'/images/random/20');
        let json = await link.json();
        if(json.status == 'error'){
            setListData([]);
        }
        else{
            setListData(json.message);
        }
    };

    const getInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setDog(value);
    }

    const submitInput = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        getData();
    } 

    useEffect(()=>{
        setListData(dataArray);
    }, []);

  return(
      <div>
        <form onSubmit={submitInput} className="d-flex mt-2">
            <input id="input-anjing" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={getInput}/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className='d-flex flex-row flex-wrap'>
        {listData.length != 0 ? 
        listData.map((dog)=>(
            // eslint-disable-next-line react/jsx-key
            <ImageTemplate Gambar={dog}/>
        )): <p>Not Found</p>}
        </div>
      </div>
  )
}

export async function getStaticProps() {
    const res = await fetch('https://dog.ceo/api/breed/hound/images/random/20');
    const dataDog = await res.json();
    return{
        props: {
            dataDog: dataDog
        },
        revalidate: 10,
    };
}