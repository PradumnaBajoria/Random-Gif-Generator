import React from 'react'

import useGif from "../useGif"

function Tag() {
    const {gif, fetchGif} = useGif()

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

export default Tag
