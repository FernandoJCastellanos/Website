"use client"
// Environment
import React from 'react'
import Lottie from "lottie-react";
import Image from 'next/image';



// Assets
import happyface from "../assets/data.json"
import profilepic from "../assets/foto.png"




const BlockProfilePic = () => {


  return (
    <div className='profile-container'>
      <div className='profile-lottie'>
 
        <Lottie loop={false} animationData={ happyface } autoplay={true} />

      </div>

      <div className='profile-pic'>
        <Image
          src={profilepic} 
          alt="My Image"
          width={1000} 
          height={1000} 
        />
      </div>
    </div>
  )
}

export default BlockProfilePic