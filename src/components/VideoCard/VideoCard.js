import React from 'react'
import { FaPlay } from "react-icons/fa";
import "./VideoCard.css";

const VideoCard = ({image,name,index}) => {
  return (
    <div className='videoCard' style={{backgroundImage:`url(${image})`}}>

<a href="#/"><FaPlay style={{fill:'rgb(255,255,255)'}} /></a>
      <p>{name}</p>

    </div>
  )
}

export default VideoCard