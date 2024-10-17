import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

//const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    const[gif,setgif] = useState('');

  const[loading,setloading] = useState(false);


  async function fetchdata(tag) {

    setloading(true);

    
    const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url );
    const imageSource = data.data.images.downsized_large.url;
    //console.log(imageSource);
    setgif(imageSource);

    setloading(false);

    //const output = await axios.get(url);
    //console.log(output);
  }

  useEffect( () => {
    fetchdata('car');
  } ,[] )

  return {gif,loading,fetchdata};
  
}

export default useGif;