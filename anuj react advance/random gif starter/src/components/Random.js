import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// api key
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const Random = () => {

  /*
  const[gif,setgif] = useState('');

  const[loading,setloading] = useState(false);


  async function fetchdata() {

    setloading(true);

    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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

  function clickHandler () {
    fetchdata();
  }

  */

  // usegif vale hook se data nikalenge
  const {gif ,loading,fetchdata} = useGif();

  function clickHandler () {
    fetchdata();
  }

  return (
    <div className='w-1/2 rounded-lg bg-green-500 border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='text-2xl uppercase underline font-bold mt-[15px]'>
        Random Gif
      </h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>) 
      }

      <button onClick={clickHandler} 
      className='bg-white w-11/12 p-1 text-lg rounded-lg mb-[20px]'>
        Generate
      </button>

    </div>
  )
}

export default Random;