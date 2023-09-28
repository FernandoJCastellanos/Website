// Environment
import React, {useState} from "react";
import ShowMore from "./ShowMore";
import Image from 'next/image';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// Components

// Components

  
  import arrow from "../assets/play-solid.svg"
import { Card } from "./Card";
  
  
  
  
  
  
  
  
const FeaturedWork = () => {

  const elementsRef = useRef([]);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   elementsRef.current.forEach((element) => {
  //     gsap.fromTo(
  //       element,
  //       { opacity: 0,
  //       y: -30 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.5,
  //         scrollTrigger: {
  //           trigger: element,
  //           start: 'center 95%',
  //           end: 'center 5%',
  //           toggleActions: 'play reverse play reverse',
  //           // markers: true
  //         },
  //       }
  //     );
  //   });
  // }, []);


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

  // Feature Box 2  // Feature Box 2  // Feature Box 2  // Feature Box 2  // Feature Box 2 

  const [videoPlayer2, setVideoPlayer2] = useState(false);
  const toggleVideo2 = () => {
    setVideoPlayer2(!videoPlayer2)
  }
    // Button
  const [isVisible2, setIsVisible2] = useState(false);
  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };

  // Feature Box 2  // Feature Box 2  // Feature Box 2  // Feature Box 2  // Feature Box 2

  const [videoPlayer3, setVideoPlayer3] = useState(false);
  const toggleVideo3 = () => {
    setVideoPlayer3(!videoPlayer3)
  }
    // Button
  const [isVisible3, setIsVisible3] = useState(false);
  const toggleVisibility3 = () => {
    setIsVisible3(!isVisible3);
  };




// Feature 1

const title1="Own Personal Art Gallery"
const img1 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/Personal.jpg?alt=media&token=3a109d32-f826-4c15-91ce-160e9f8c8c9d"
const video1 = "https://www.youtube.com/embed/eirOLkjPSoc"
const techUsed1= "HTML, CSS, JavaScript"
const GitHub1="https://github.com/FernandoJCastellanos/Personal-Art-Website"

// Feature 2
const title2="We Build it, You Cook it!"
const img2 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/recipe%20app.png?alt=media&token=e628fe15-5fc7-4531-9230-47f04fac1578"
const video2 = "https://www.youtube.com/embed/cnwgg7GMEhA"
const techUsed2= "React, Typescript, SASS"
const GitHub2="https://github.com/FernandoJCastellanos/Recipe-Site"

// Feature 3
const title3="Keeping up with the CryptoBros"
const img3 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/cryptoverse%20foto.png?alt=media&token=c506e6a9-4c73-45f2-bac0-4594be589912"
const video3 = "https://www.youtube.com/embed/KtX6ak9g2Hg"
const techUsed3= "React, Redux and Typescript"
const GitHub3="https://github.com/FernandoJCastellanos/CryptoVerse"

    return (
    <div id="featured-work" className="w-[100%] my-12">
        <div>
          <p className= "text-center mb-12 text-xl">
            Featured Work
          </p>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 mx-12">
          <div>
          <Card title={title1} img={img1} video={video1} techUsed={techUsed1} GitHub={GitHub1}
              toggleVideo={toggleVideo1} videoPlayer={videoPlayer1} toggleVisibility={toggleVisibility1} isVisible={isVisible1}  
            />
          </div>
          <div>
            <Card title={title1} img={img2} video={video2} techUsed={techUsed2} GitHub={GitHub2}
                toggleVideo={toggleVideo2} videoPlayer={videoPlayer2} toggleVisibility={toggleVisibility2} isVisible={isVisible2}  
              />
          </div>
          <div>
            <Card title={title3} img={img3} video={video3} techUsed={techUsed3} GitHub={GitHub3}
                toggleVideo={toggleVideo3} videoPlayer={videoPlayer3} toggleVisibility={toggleVisibility3} isVisible={isVisible3}  
              />
          </div>
        </div>
    </div>
  
    );
  }
  
  export default FeaturedWork;