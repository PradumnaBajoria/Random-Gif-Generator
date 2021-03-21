import React, {useState, useEffect} from 'react'
import axios from "axios"


const API_KEY = process.env.REACT_APP_API_KEY

function Random_v1() {
    
    const [tag, setTag] = useState('')
    const [gif, setGif] = useState('')

    const fetchGif = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data} = await axios.get(url) //promise

        const imageSrc = data.data.images.downsized_large.url
        //console.log(data)
        //console.log(imageSrc)
        setGif(imageSrc)
    }

    //ComponentDidMount
    useEffect(() => {

        fetchGif(tag);
        
    }, [tag]);

    function handleClick(){
        fetchGif(tag);
    }

    return (
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={handleClick}>Create Random Gif</button>
        </div>
    )
}

export default Random_v1
