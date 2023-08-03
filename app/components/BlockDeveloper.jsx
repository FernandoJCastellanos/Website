// Environment
import React, { useState, useEffect } from 'react';



// Assets
import PortfolioWork from './PortfolioWork'
import FeaturedWork from './FeaturedWork'
import HR1 from './HR1'



const BlockDeveloper = () => {




  return (
    <div>
      {/* hard skills */}
      <div className='service-container'>
        <p className='service-title'>
          Developer Hard Skills
        </p>
        <ul className='service-list'>
          <li>
            HTML
          </li>
          <li>
            CSS
          </li>
          <li>
            Javascript
          </li>
          <li>
            React
          </li>
          <li>
            React Native
          </li>
          <li>
            Nextjs
          </li>
          <li>
            Sass
          </li>
          <li>
            Typescript
          </li>
          <li>
            Tailwind
          </li>
          <li>
            Bootstrap
          </li>
          <li>
            Wordpress
          </li>
          <li>
            Headless Wordpress
          </li>
          <li>
            NodeJS
          </li>
          <li>
            MongoDB
          </li>
          <li>
            AWS Amplify
          </li>
          <li>
            Redux
          </li>
          <li>
            APIs
          </li>
          <li>
            Git
          </li>
          <li>
            Github
          </li>
          <li>
            Lottie
          </li>
        </ul>
      </div>
      <HR1 />
      {/* featured work */}
      <div>
        <FeaturedWork />
      </div>
      <HR1 />
      {/* portfolio chronological */}
      <PortfolioWork />
    </div>
  )
}

export default BlockDeveloper