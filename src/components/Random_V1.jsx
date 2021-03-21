import React, {useState, useEffect} from 'react'
import axios from "axios"


const API_KEY = process.env.REACT_APP_API_KEY

function Random_v1() {

    const [gif, setGif] = useState('')

    const fetchGif = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url) //promise

        const imageSrc = data.data.images.downsized_large.url
        //console.log(data)
        //console.log(imageSrc)
        setGif(imageSrc)
    }

    //ComponentDidMount
    useEffect(() => {

        fetchGif();
        
    }, []);

    function handleClick(){
        fetchGif();
    }

    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <button onClick={handleClick}>Create Random Gif</button>
        </div>
    )
}

export default Random_v1
