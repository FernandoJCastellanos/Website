// Environment
import React from 'react'
import Image from 'next/image';



// Assets

  import email from "../assets/icons/email-icon.svg"
  import cv from "../assets/icons/cv-icon.svg"
  import linkedin from "../assets/icons/linkedin-icon.svg"
  import twitter from "../assets/icons/twitter.svg"
  import HR1 from './HR1';

const BlockContact = () => {
  return (
    <div className='justify-center items-center flex flex-col'>
      {/* Services to provide */}
      <div className='max-w-2xl border border-2 border-white rounded-md mx-10 my-12 px-5 pb-10'>
        <p className='text-center my-8 text-xl'>
          Service
        </p>
        <ul className='service-list'>
          <li>
            Web Dev
          </li>
          <li>
            App Dev
          </li>
          <li>
            3D Motion
          </li>
          <li>
            2D Motion
          </li>
          <li>
            Strategy Sessions
          </li>
          <li>
            Consulting Sessions
          </li>
          <li>
            Discovery
          </li>
          <li>
            Creative Direction
          </li>
          <li>
            Art Direction
          </li>
          <li>
            Design
          </li>
          <li>
            Production
          </li>
          <li>
            Project Management
          </li>
          <li>
            Great Service
          </li>
        </ul>
      </div>
      {/* Contact form */}
      <HR1 />
      <div className=' flex flex-col my-12 gap-10'>
        <a className=' flex gap-3 justify-center items-center' href='mailto:fernandojcastellanos@gmail.com' >
          <Image className='h-7 w-8' src={email} alt='email-icon' />
          <p className=''>fernandojcastellanos@gmail.com</p>
        </a>
        <a className=' flex gap-3 justify-center items-center' href="https://twitter.com/FernandoJCaste1" target="_blank" >
          <Image className='h-7 w-8' src={twitter} alt='twitter-icon' />
          <p className='contact-text'>@FernandoJCaste1</p>
        </a>
        <a className=' flex gap-3 justify-center items-center' href="https://www.linkedin.com/in/fernando-castellanos-03a484160/" target="_blank">
          <Image className='max-h-72 w-8' src={linkedin} alt='linkedin-icon' />
          <p className='contact-text'>LinkedIn</p>
        </a>
        <a  className=' flex gap-3 justify-center items-center' href='https://drive.google.com/drive/folders/1t5QwxgHUe2o40-wHOCAccktlMVxIGA-G?usp=sharing' target="_blank">
          <Image className='h-7 w-8' src={cv} alt='cv-icon' />
          <p className=''>Curriculum Vitae</p>
        </a>
      </div>
      <HR1 />
      {/* About me */}
      <div className='flex flex-col gap-5 text-center max-w-xl my-12 mx-12'>
        <p>
          Good morning friends!
        </p>
        <p>
          About me?
        </p>
        <p>
          I’ve always wanted to make films for a living, back in the early years of youtube FreddieW/crew and Corridor Digital my idols.
        </p>
        <p>
          Went for an advertising degree because of a film director who my mom invited because she was his 1st grade teacher. He spent a whole afternoon and night talking to me about his life and career trajectory.
        </p>
        <p>
          Thank you Pedro!
        </p>
        <p>
          Did some internships as a PA (Production Assistant) in 2 movie sets. If I'm going to direct movies I have to be the best.
        </p>
        <p>
          Soon got a job saved for my PC, left. Went deep into 3D while freelancing as Motion Designer learned about business, art and Bitcoin.
        </p>
        <p>
          Wanting to be more hirable. Took a break, spent the last 2 years learning about Computer Science and programming.
        </p>
        <p>
          As a freelancer the future is uncertain, to be honest it’s a bit scary.
        </p>
        <p>
          Now that I feel comfortable in my skills as a Developer. I'm diving back into freelancing and see what the future holds.
        </p>
        <p>
          Have a great day guys!
          <br/>
          Cheers!
        </p>
      </div>
      <div className='hr-1-container'>
        <hr className='hr-1'/>
      </div>
      {/* background */}
      <div className='flex flex-row flex-1 flex-wrap justify-evenly gap-10  my-12 mx-10'>
        <div className=' flex flex-col max-w-sm gap-4 py-5 px-5 border border-2 border-white rounded-md text-center '>
          <p className='text-lg'>
            Developer World
          </p>
          <p>
            this is textborder bwhite rrder-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-md
          </p>
        </div>
        <div className='flex flex-col max-w-sm gap-4 py-5 px-5 border border-2 border-white rounded-md text-center'>
          <p className='text-lg'>
            3D. Artist.
          </p>
          <p>
          this is textborder bwhite rrder-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-md

          </p>
        </div>
        <div className='flex flex-col max-w-sm gap-4 py-5 px-5 border border-2 border-white rounded-md text-center'>
          <p className='text-lg'>
            2D Motion Designer
          </p>
          <p>
          this is textborder bwhite rrder-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-md

          </p>
        </div>
        <div className='flex flex-col max-w-sm gap-4 py-5 px-5 border border-2 border-white rounded-md text-center'>
          <p className='text-lg'>
            Film Production Background
          </p>
          <p>
          this is textborder bwhite rrder-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-md

          </p>
        </div>
        <div className='flex flex-col max-w-sm gap-4 py-5 px-5 border border-2 border-white rounded-md text-center'>
          <p className='text-lg'>
            Advertising Industry
          </p>
          <p>
          this is textborder bwhite rrder-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-md

          </p>
        </div>
        <div className='flex flex-col max-w-sm gap-4 py-5 px-5 border border-2 border-white rounded-md text-center'>
          <p className='text-lg'>
            Solopreneurship, Business and Money.
          </p>
          <p>
          this is textborder bwhite rrder-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-mdborder border-2 border-white rounded-md

          </p>
        </div>
      </div>
    </div>
  )
}

export default BlockContact