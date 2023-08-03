// Environment
import React, {useState} from 'react';

import Image from 'next/image';


// Assets
import arrow from "../assets/play-solid.svg"






const EpisodePostLeft = ({imgsrc, videosrc, lore }) => {

  // Feature Box 1  // Feature Box 1  // Feature Box 1  // Feature Box 1  // Feature Box 1

  const [videoPlayer1, setVideoPlayer1] = useState(false);
  const toggleVideo1 = () => {
    setVideoPlayer1(!videoPlayer1)
  }
  // Button
  const [isVisible1, setIsVisible1] = useState(false);

  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };

  return (
    <div className='episodepost-container'>
        <div className='episodepost-lore'>
            <p>
                {lore}
            </p>
        </div>
        <div className='episodepost-content'>
            <div className="video-box" onClick={toggleVideo1}>
                <Image className="arrow" src={arrow} alt="arrow" width={1000} height={1000} />
                <img className={`thumbnail ${videoPlayer1 ? 'hidden' : 'visible'}`} alt="VideoImage" src={imgsrc} />
                <iframe className={`iframe-video ${videoPlayer1 ? 'visible' : 'hidden'}`}  width="100%" height="100%" src={videosrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </div>
        </div>
    </div>
  )
}

export default EpisodePostLeft