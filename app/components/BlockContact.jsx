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
    <div>
      {/* Services to provide */}
      <div className='service-container'>
        <p className='service-title'>
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
      <div className='contact-master-container'>
        <div className='contact-container'>
          <Image src={email} alt='email-icon' className='contact-icon'/>
          <p className='contact-text'>fernandojcastellanos@gmail.com</p>
        </div>
        <div className='contact-container'>
          <Image src={twitter} alt='twitter-icon' className='contact-icon'/>
          <p className='contact-text'>@FernandoJCaste1</p>
        </div>
        <div className='contact-container'>
          <Image src={linkedin} alt='linkedin-icon' className='contact-icon'/>
          <p className='contact-text'>LinkedIn</p>
        </div>
        <div className='contact-container'>
          <Image src={cv} alt='cv-icon' className='contact-icon'/>
          <p className='contact-text'>Curriculum Vitae</p>
        </div>
      </div>
      <HR1 />
      {/* About me */}
      <div className='about-container'>
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
      <div className='background-container'>
        <div className='background-block'>
          <p>
            Developer World
          </p>
          <p>
          </p>
        </div>
        <div className='background-block'>
          <p>
            3D. Artist.
          </p>
          <p>
            
          </p>
        </div>
        <div className='background-block'>
          <p>
            2D Motion Designer
          </p>
          <p>
            
          </p>
        </div>
        <div className='background-block'>
          <p>
            Film Production Background
          </p>
          <p>
            
          </p>
        </div>
        <div className='background-block'>
          <p>
            Advertising Industry
          </p>
          <p>
            
          </p>
        </div>
        <div className='background-block'>
          <p>
            Solopreneurship, Business and Money.
          </p>
          <p>
            
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlockContact