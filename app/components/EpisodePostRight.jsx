// Environment
import React, {useState} from 'react';

import Image from 'next/image';
import { VideoCard } from './Card';

// Assets
import arrow from "../assets/play-solid.svg"






const EpisodePostRight = ({imgsrc, videosrc, lore }) => {

  // Feature Box 1  // Feature Box 1  // Feature Box 1  // Feature Box 1  // Feature Box 1

  const [videoPlayer1, setVideoPlayer1] = useState(false);
  const toggleVideo1 = () => {
    setVideoPlayer1(!videoPlayer1)
  }

  return (
    <div className='flex justify-center flex-col sm:flex-row'>
      <div className="sm:w-[50%] w-[100%] relative flex justify-center items-center" onClick={toggleVideo1}>
        <Image className={`absolute w-[15%] h-[15%] z-20 ${videoPlayer1 ? 'hidden' : 'visible'}`} src={arrow} alt="arrow" width={1000} height={1000} />
        <img className={` w-[100%] h-[600px] object-cover rounded-md z-10 w-5 ${videoPlayer1 ? 'hidden' : 'visible'}`} alt="VideoImage" src={imgsrc} />
        <iframe className={`h-[600px] w-[100%] ${videoPlayer1 ? 'visible' : 'hidden'}`}  width="100%" height="100%" src={videosrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </div>
      <div className='flex justify-center items-center sm:w-[50%] w-[100%] h-[600px] text-lg'>
        <p >
          {lore}
        </p>
      </div>
    </div>
  )
}

export default EpisodePostRight