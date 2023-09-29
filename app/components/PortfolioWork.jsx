// Environment
import React, {useState} from "react";
import LearnMore from "./ShowMore";
import Image from 'next/image';


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


// Components

  
import arrow from "../assets/play-solid.svg"
import { Card } from "./Card";
  
  

  
  
  
const PortfolioWork = () => {




  // Portafolio Box 12 

  const [videoPlayer12, setVideoPlayer12] = useState(false);
  const toggleVideo12 = () => {
    setVideoPlayer12(!videoPlayer12)
  }
  // Button
  const [isVisible12, setIsVisible12] = useState(false);

  const toggleVisibility12 = () => {
    setIsVisible12(!isVisible12);
  };


  // Portafolio 12  // Portafolio 12  // Portafolio 212  // Portafolio 12  // Portafolio 12  // Portafolio 12  // Portafolio 12  // Portafolio 12

const title12="What are thoooose!!"
const img12 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/Nike%20E%20commerce%20App%20foto.png?alt=media&token=463477a0-0ed1-4e12-9a2a-0fa6c8acbe1d"
const video12 = ""
const techUsed12= "React Native and Redux"
const accomplishements12="Getting comfortable with Redux"
const repo12="https://github.com/FernandoJCastellanos/Nike-E-Commerce-app"





  // Portafolio Box 11 

  const [videoPlayer11, setVideoPlayer11] = useState(false);
  const toggleVideo11 = () => {
    setVideoPlayer11(!videoPlayer11)
  }
  // Button
  const [isVisible11, setIsVisible11] = useState(false);

  const toggleVisibility11 = () => {
    setIsVisible11(!isVisible11);
  };


  // Portafolio 11  // Portafolio 11  // Portafolio 211  // Portafolio 11  // Portafolio 11  // Portafolio 11  // Portafolio 11  // Portafolio 11

const title11="Keeping up with the Crypto Bros!"
const img11 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/cryptoverse%20foto.png?alt=media&token=c506e6a9-4c73-45f2-bac0-4594be589912"
const video11 = "https://www.youtube.com/embed/KtX6ak9g2Hg"
const techUsed11= "React, Redux and Typescript"
const accomplishements11="Practiced some API data pulling with Redux"
const repo11="https://github.com/FernandoJCastellanos/CryptoVerse"
const demo11 ="https://fernandojcastellanos.github.io/CryptoVerse/"



  // Portafolio Box 10 

  const [videoPlayer10, setVideoPlayer10] = useState(false);
  const toggleVideo10 = () => {
    setVideoPlayer10(!videoPlayer10)
  }
  // Button
  const [isVisible10, setIsVisible10] = useState(false);

  const toggleVisibility10 = () => {
    setIsVisible10(!isVisible10);
  };


  // Portafolio 10  // Portafolio 10  // Portafolio 210  // Portafolio 10  // Portafolio 10  // Portafolio 10  // Portafolio 10  // Portafolio 10

const title10="We are the Mad Scientist. You are the chef."
const img10 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/recipe%20app.png?alt=media&token=e628fe15-5fc7-4531-9230-47f04fac1578"
const video10 = "https://www.youtube.com/embed/cnwgg7GMEhA"
const techUsed10= "React, Typescript, SASS"
const accomplishements10="Finally learned how to turn the dang lights off these website"
const repo10="https://github.com/FernandoJCastellanos/Recipe-Site"
const demo10="https://fernandojcastellanos.github.io/Recipe-Site/"


  // Portafolio Box 9 

  const [videoPlayer9, setVideoPlayer9] = useState(false);
  const toggleVideo9 = () => {
    setVideoPlayer9(!videoPlayer9)
  }
  // Button
  const [isVisible9, setIsVisible9] = useState(false);

  const toggleVisibility9 = () => {
    setIsVisible9(!isVisible9);
  };


  // Portafolio 9  // Portafolio 9  // Portafolio 29  // Portafolio 9  // Portafolio 9  // Portafolio 9  // Portafolio 9  // Portafolio 9

const title9="Movies. Popcorn. Action!"
const img9 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/React%20Native%20Movie%20App%20photo.png?alt=media&token=66b175f4-cafc-4e2d-8920-bd891740a3ab"
const video9 = "https://www.youtube.com/embed/0emdp0ivIRQ"
const techUsed9= "React Native"
const accomplishements9="My first Mobile App"
const repo9="https://github.com/FernandoJCastellanos/OMDBapp--ReactNative"


  // Portafolio Box 8 

  const [videoPlayer8, setVideoPlayer8] = useState(false);
  const toggleVideo8 = () => {
    setVideoPlayer8(!videoPlayer8)
  }
  // Button
  const [isVisible8, setIsVisible8] = useState(false);

  const toggleVisibility8 = () => {
    setIsVisible8(!isVisible8);
  };


  // Portafolio 8  // Portafolio 8  // Portafolio 28  // Portafolio 8  // Portafolio 8  // Portafolio 8  // Portafolio 8  // Portafolio 8

const title8="Simple. We Build. We Sell."
const img8 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/React%20E-Commerce%20Website%20photo.png?alt=media&token=37a65aa4-1b11-4b1f-b9cd-621e301e9a3f"
const video8 = "https://www.youtube.com/embed/1dUh0SFUDcI"
const techUsed8= "React"
const accomplishements8="My first website built with React"
const repo8="https://github.com/FernandoJCastellanos/E-Commerce-Site---React"
const demo8="https://fernandojcastellanos.github.io/E-Commerce-Site---React/"



  // Portafolio Box 7 

  const [videoPlayer7, setVideoPlayer7] = useState(false);
  const toggleVideo7 = () => {
    setVideoPlayer7(!videoPlayer7)
  }
  // Button
  const [isVisible7, setIsVisible7] = useState(false);

  const toggleVisibility7 = () => {
    setIsVisible7(!isVisible7);
  };


  // Portafolio 7  // Portafolio 7  // Portafolio 27  // Portafolio 7  // Portafolio 7  // Portafolio 7  // Portafolio 7  // Portafolio 7

const title7="Old Developer Site"
const img7 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/old-website-developer.png?alt=media&token=401eb0a3-8a4e-4ebd-9c06-a5061de846f9"
const video7 = "https://www.youtube.com/embed/Ppm6D2ZvGcc"
const techUsed7= "HTML, CSS, JavaScript"
const accomplishements7="Website to show people how cool I am."
const repo7="https://github.com/FernandoJCastellanos/Vanilla-Frontend-Development-Website"
const demo7="https://fernandojcastellanos.github.io/Personal-Developer-Website/"



  // Portafolio Box 6 

  const [videoPlayer6, setVideoPlayer6] = useState(false);
  const toggleVideo6 = () => {
    setVideoPlayer6(!videoPlayer6)
  }
  // Button
  const [isVisible6, setIsVisible6] = useState(false);

  const toggleVisibility6 = () => {
    setIsVisible6(!isVisible6);
  };


  // Portafolio 6  // Portafolio 6  // Portafolio 26  // Portafolio 6  // Portafolio 6  // Portafolio 6  // Portafolio 6  // Portafolio 6

const title6="To the Mooooon!!!!"
const img6 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/space.png?alt=media&token=6b166d8a-5c18-40ee-92d0-64f074315fef"
const video6 = "https://www.youtube.com/embed/Jh7JkAkKp5g"
const techUsed6= "HTML, CSS, JavaScript"
const accomplishements6="Learned about accessibility and practiced Javascript"
const repo6="https://github.com/FernandoJCastellanos/Space-Tourism-Website"
const demo6="https://fernandojcastellanos.github.io/Space-Tourism-Website/"




  // Portafolio Box 5 

  const [videoPlayer5, setVideoPlayer5] = useState(false);
  const toggleVideo5 = () => {
    setVideoPlayer5(!videoPlayer5)
  }
  // Button
  const [isVisible5, setIsVisible5] = useState(false);

  const toggleVisibility5 = () => {
    setIsVisible5(!isVisible5);
  };


  // Portafolio 5  // Portafolio 5  // Portafolio 25  // Portafolio 5  // Portafolio 5  // Portafolio 5  // Portafolio 5  // Portafolio 5

const title5="We set the fashion"
const img5 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/base.png?alt=media&token=ac209c86-49a9-4a0f-9f7a-202a7710085a"
const video5 = "https://www.youtube.com/embed/1aehupwY3J8"
const techUsed5= "HTML, CSS, JavaScript"
const accomplishements5="Landing like an ODST"
const repo5="https://github.com/FernandoJCastellanos/base-apparel-landing-page"
const demo5="https://fernandojcastellanos.github.io/base-apparel-landing-page/"



  // Portafolio Box 4 

  const [videoPlayer4, setVideoPlayer4] = useState(false);
  const toggleVideo4 = () => {
    setVideoPlayer4(!videoPlayer4)
  }
  // Button
  const [isVisible4, setIsVisible4] = useState(false);

  const toggleVisibility4 = () => {
    setIsVisible4(!isVisible4);
  };


  // Portafolio 4  // Portafolio 4  // Portafolio 24  // Portafolio 4  // Portafolio 4  // Portafolio 4  // Portafolio 4  // Portafolio 4

const title4="The grass is greener on our Side"
const img4 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/sunnyside.png?alt=media&token=7d185c6c-ec31-428f-b890-1569628e6d6a"
const video4 = "https://www.youtube.com/embed/PkBH0ch-fIE"
const techUsed4= "HTML, CSS, JavaScript"
const accomplishements4="Build some cool looking frontpage"
const repo4="https://github.com/FernandoJCastellanos/SunnySide-Ad-Agency-"
const demo4="https://fernandojcastellanos.github.io/SunnySide-Ad-Agency-/"



  // Portafolio Box 3 

  const [videoPlayer3, setVideoPlayer3] = useState(false);
  const toggleVideo3 = () => {
    setVideoPlayer3(!videoPlayer3)
  }
  // Button
  const [isVisible3, setIsVisible3] = useState(false);

  const toggleVisibility3 = () => {
    setIsVisible3(!isVisible3);
  };


  // Portafolio 3  // Portafolio 3  // Portafolio 23  // Portafolio 3  // Portafolio 3  // Portafolio 3  // Portafolio 3  // Portafolio 3

const title3="My dream site!"
const img3 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/Personal.jpg?alt=media&token=3a109d32-f826-4c15-91ce-160e9f8c8c9d"
const video3 = "https://www.youtube.com/embed/eirOLkjPSoc"
const techUsed3= "HTML, CSS, JavaScript"
const accomplishements3="Built the website I've always wanted"
const repo3="https://github.com/FernandoJCastellanos/Personal-Art-Website"
const demo3 ="https://fernandojcastellanos.github.io/Personal-Art-Website/"



  // Portafolio Box 2 

  const [videoPlayer2, setVideoPlayer2] = useState(false);
  const toggleVideo2 = () => {
    setVideoPlayer2(!videoPlayer2)
  }
  // Button
  const [isVisible2, setIsVisible2] = useState(false);

  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };


  // Portafolio 2  // Portafolio 2  // Portafolio 2  // Portafolio 2  // Portafolio 2  // Portafolio 2  // Portafolio 2  // Portafolio 2

const title2="We Drum to the Beat of our Hearts"
const img2 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/Drumkit.png?alt=media&token=fd0a912e-74b7-4182-bbfe-1bfe3d2d7caa"
const video2 = "https://www.youtube.com/embed/VXNTfJcLVbU"
const techUsed2= "HTML, CSS, JavaScript"
const accomplishements2="Practicing some Vanilla JS"
const Repo2="https://github.com/FernandoJCastellanos/Drum-Kit"
const demo2="https://fernandojcastellanos.github.io/Drum-Kit/"


  // Portafolio Box 1 

  const [videoPlayer1, setVideoPlayer1] = useState(false);
  const toggleVideo1 = () => {
    setVideoPlayer1(!videoPlayer1)
  }
  // Button
  const [isVisible1, setIsVisible1] = useState(false);

  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };


  // Portafolio 1

const title1="Dog chill Dog world"
const img1 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/Tindog.png?alt=media&token=79260380-1974-4b81-ba7d-45e6563afa62"
const video1 = "https://www.youtube.com/embed/xQx6QH6_z9M"
const techUsed1= "HTML, CSS, JavaScript"
const accomplishements1="My first website built in Vanilla"
const Repo1="https://github.com/FernandoJCastellanos/Tindog"
const Demo1="https://fernandojcastellanos.github.io/Tindog/"




const elementsRef = useRef([]);



    return (
    <div id="portafolio" className="w-[100%] m-12">
        <div >
          <p className= "text-center mb-12 text-xl">
            Portfolio Chronological
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mx-12">
          <div class="">
            <Card title={title1} img={img1} video={video1} accomplishments={accomplishements1} techUsed={techUsed1} Repo={Repo1}
              toggleVideo={toggleVideo1} videoPlayer={videoPlayer1} toggleVisibility={toggleVisibility1} isVisible={isVisible1}  
            />
          </div>
          <div class="">
            <Card title={title1} img={img1} video={video1} accomplishments={accomplishements1} techUsed={techUsed1} Repo={Repo1} Demo={Demo1}
              toggleVideo={toggleVideo1} videoPlayer={videoPlayer1} toggleVisibility={toggleVisibility1} isVisible={isVisible1}  
            />
          </div>
        </div>
    </div>
  
    )}
  
  export default PortfolioWork;