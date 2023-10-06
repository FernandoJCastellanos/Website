import React, {useState} from 'react'
import arrow from "../assets/play-solid.svg"
import promo from "../assets/promo.png"
import Image from "next/image";




const BlockIntro = () => {

  // Portfolio Box 1 
  const [videoPlayer, setVideoPlayer] = useState(false);
  const toggleVideo = () => {
    setVideoPlayer(!videoPlayer)
  }
  // Button
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible1(!isVisible);
  };


  return (
    <div className='flex justify-center items-center h-[400px] text-lg'>
      <div className='w-[50%] text-center px-[10%]'>
        Business- Strategy - Production - Developer - 3D Artist - 3D/2DMotion Designer - Advertising Major
      </div>
      <div className=" w-[50%] text-center relative flex justify-center items-center" onClick={toggleVideo}>
        <Image className={`absolute w-[15%] h-[15%] z-20 ${videoPlayer ? 'hidden' : 'visible'}`} src={arrow} alt="arrow" width={1000} height={1000} />
        <Image className={`absolute w-[102%] h-[100%] object-cover right-[1px] z-10 ${videoPlayer ? 'hidden' : 'visible'}`} alt="VideoImage" src={promo} />
        <iframe className={`h-[300px] w-[99%] `}  width="100%" height="100%" src="https://www.youtube.com/embed/Pd3ikFsSNVM?si=zA9A4ugClU1hbWOv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </div>
    </div>
  )
}
export default BlockIntro