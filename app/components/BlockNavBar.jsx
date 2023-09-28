"use client"
// Environment
import React, { useContext } from 'react';
import { MyContext } from '../MyContext';


// Assets
import HR1 from './HR1'


const BlockNavBar = () => {



  const { navbarActive, moveToDeveloper, moveToContact, moveToMotion, getNavItemClass } = useContext(MyContext);


// console.log(navbarActive)
  return (
    <div className=''>
      <HR1 />
      <div className='navbar-container text-lg'>
        <div className={`
        navbar-bar
        ${navbarActive === 1 ? 'navbar-bar-developer' : ''}
        ${navbarActive === 2 ? 'navbar-bar-contact' : ''}
        ${navbarActive === 3 ? 'navbar-bar-motion' : ''}
        `}></div>
        <div className='navitem ' onClick={moveToDeveloper}>
      	  Developer
        </div>
        <div className='navitem' onClick={moveToContact}>
          Contact
        </div>
        <div className='navitem' onClick={moveToMotion}>
          Motion Design
        </div>
      </div>
      <HR1 />
    </div>
  )
}

export default BlockNavBar