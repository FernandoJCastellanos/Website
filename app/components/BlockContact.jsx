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
          Soon got a job saved for my PC, left. Went deep into 3D while freelancing as a Motion Designer learned about business, art and Bitcoin.
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
          Have a great day friends!
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
            Learned about the Development workflows like  SCRUM and AGILE.
            Development is not just about coding but building and architecture.
            Computer Science is a never-ending rabbit hole so is Programming.
            I love how I feel so productive and I always have something to show for my time working, until I get those long hours of debugging sessions

          </p>
        </div>
        <div className='flex flex-col max-w-sm gap-4 py-5 px-5 border border-2 border-white rounded-md text-center'>
          <p className='text-lg'>
            3D. Art.
          </p>
          <p>
            Learned to learn, learned about the talent and skills some projects take. The long hours of changing colors, camera angles, textures, lighting, and modeling. It’s a whole other world a very unappreciated and underpaid world. People will never understand the energy it takes to put yourself out there like that. It’s just a swipe or a double click for you.
            <br/>
            That's our soul.

          </p>
        </div>
        <div className='flex flex-col max-w-sm gap-4 py-5 px-5 border border-2 border-white rounded-md text-center'>
          <p className='text-lg'>
            Motion Graphics Industry
          </p>
          <p>
            Not everyone is equal and it's okay. I’m nowhere close to being the best motion graphics designer. If you direct me and give a play-by-play of how you want your video to go I could pull it off. Giving a blank canvas and telling me to go crazy is something else. These kids are crazy talented most will never understand.
          </p>
        </div>
        <div className='flex flex-col max-w-sm gap-4 py-5 px-5 border border-2 border-white rounded-md text-center'>
          <p className='text-lg'>
            Film Production
          </p>
          <p>
            I love the film world. I love how everyone works 12-14 hours a day. I like how a group of crazy individuals who all want to do their own thing, decide to group up and put all their talent, time, and energy on the field and work as a unit. Movies are so planned and premeditated, that they’re practically a factory product.
          </p>
        </div>
        <div className='flex flex-col max-w-sm gap-4 py-5 px-5 border border-2 border-white rounded-md text-center'>
          <p className='text-lg'>
            Advertising Industry
          </p>
          <p>
            “The advertising world is where the Artist goes to die.”
          <br />
            -Luke Sullivan
          </p>
          <p>
            A book that I read back in Uni. I'll never forget it.
          </p>
        </div>
        <div className='flex flex-col max-w-sm gap-4 py-5 px-5 border border-2 border-white rounded-md text-center'>
          <p className='text-lg'>
            Entrepreneurship, Business, and Money.
          </p>
          <p>
            It’s been a long journey, a very fun rollercoaster not for the faint of heart. And I have a very long way to go. Lots of time to grind. It’ll be fun, for sure.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlockContact