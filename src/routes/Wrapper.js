import React, { useState } from 'react'

import NavBar from '../layouts/nav'
import Footer from '../layouts/Footer'
export default function Wrapper({ children }) {
  const NAV_WIDTH = 240; 
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  
  const handleNavLinkClick = (id) => {
    const targetElement = document.getElementById(id.split('#')[1]);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>   
    <NavBar  {...{
          handleToggleDrawer,
          drawerOpen,
          NAV_WIDTH,
          handleNavLinkClick,
        }}/> 
    {children}
    <div className='w-full pt-20 flex lg:justify-center lg:items-center z-50 '> 
      <Footer />
    </div> 
    </>
  )
}
