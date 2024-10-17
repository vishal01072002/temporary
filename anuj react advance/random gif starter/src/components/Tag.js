import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// api key
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const Tag = () => {

  /*
  // const[gif,setgif] = useState('');

  // const[loading,setloading] = useState(false);

  async function fetchdata() {

    setloading(true);

    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY} &tag=${tag}`;
    const {data} = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    //console.log(imageSource);
    setgif(imageSource);

    setloading(true);

    //const output = await axios.get(url);
    //console.log(output);
  }

  useEffect( () => {
    fetchdata();
  } ,[] )

  */

  const[tag,setTag] = useState('car');

  const {gif ,loading,fetchdata} = useGif(tag);

  function clickHandler () {
    fetchdata(tag);
  }

  function changeHandler (event) {
    setTag(event.target.value);
  }

  return (
    <div className='w-1/2 rounded-lg bg-blue-500 border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='text-2xl uppercase underline font-bold mt-[15px]'>
        Random {tag} Gif
      </h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>) 
      }

      <input className='w-10/12 p-1 text-lg rounded-lg mb-[2px] text-center'
        onChange={changeHandler}
        value={tag}
      />

      <button onClick={clickHandler} 
      className='bg-white w-10/12 p-1 text-lg rounded-lg mb-[20px]'>
        Generate
      </button>

    </div>
  )
}

export default Tag;