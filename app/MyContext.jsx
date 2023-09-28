"use client"
// MyContext.js (continued)
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {

  // Function to save data to localStorage
const saveToLocalStorage = (key, value) => {
  Cookies.set(key, value, { expires: 365 }); // You can change the expiration as needed
};

// Function to retrieve data from localStorage
const getFromLocalStorage = (key) => {
  return Cookies.get(key);
};


  // NAVBAR
  const [navbarActive, setNavbarActive] = useState(2);
  useEffect(() => {
    async function fetchData() {
      try {
        const savedNavbarActive = await getFromLocalStorage('navbarActive');
        if (savedNavbarActive) {
          setNavbarActive(parseInt(savedNavbarActive, 10));
        }
      } catch (error) {
        // Handle any errors that occur during retrieval
        console.error('Error retrieving data from localStorage:', error);
      }
    }

    fetchData();
  }, []);
  useEffect(() => {
    saveToLocalStorage('navbarActive', navbarActive);
  }, [navbarActive]);


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