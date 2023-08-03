"use client"
// MyContext.js (continued)
import React, { useState } from 'react';

const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {


  // NAVBAR
  const [navbarActive, setNavbarActive] = useState(2);
  const moveToDeveloper = () => {
    setNavbarActive(1)
  }
  const moveToContact = () => {
    setNavbarActive(2)
  }
  const moveToMotion = () => {
    setNavbarActive(3)
  }
  const getNavItemClass = (navItem) => {
    switch (navItem) {
      case '1':
        return 'navbar-bar-developer';
      case '2':
        return 'navbar-bar-contact';
      case '3':
        return 'navbar-bar-motion';
      default:
        return 'navbar-bar-contact';
    }
  };

  // Motion NAVBAR
  const [motionbar, setMotionBar] = useState(1);
  const moveToSingle = () => {
    setMotionBar(1)
  }
  const moveToEpisode = () => {
    setMotionBar(2)
  }

  return (
    <MyContext.Provider value={{ navbarActive, moveToDeveloper, moveToContact, moveToMotion, getNavItemClass, motionbar, moveToSingle, moveToEpisode }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContextProvider, MyContext };