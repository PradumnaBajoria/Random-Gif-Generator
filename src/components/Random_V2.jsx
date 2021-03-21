import React from 'react'

import useGif from "../useGif"

function Tag() {
    const {gif, fetchGif} = useGif()

    function handleClick(){
        fetchGif();
    }

    //giving height and width to maintain interface
    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img width="500px" height="300px" src={gif} alt="Random Gif" />
            <button onClick={handleClick}>Create Random Gif</button>
        </div>
    )
}

export default Tag
