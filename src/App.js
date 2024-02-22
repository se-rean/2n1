import logo from './logo.svg';
import './App.css';
import 'animate.css';
import NavBar from './layouts/nav';
import { ThemeProvider, createTheme  } from '@mui/material/styles';
import React, { useState } from 'react'
import About from './pages/landing-page/About';
import Services from './pages/landing-page/Services';
import Portfolio from './pages/landing-page/Portfolio';
import Pricing from './pages/landing-page/Pricing';
import Testimonial from './pages/landing-page/Testimonial';
import Partners from './pages/landing-page/Partners';
import Blog from './pages/landing-page/Blog';
import Skills from './pages/landing-page/Skills';
import Footer from './layouts/Footer';
import Timeline from './pages/landing-page/Timeline';
import Contact from './pages/landing-page/Contact';
import Top from './pages/landing-page/Top';

const theme = createTheme ({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(','),
  },
});

function App() {

  const NAV_WIDTH = 240; 
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  
  const handleNavLinkClick = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // useEffect(() => {
  //   const scrollToHash = () => {
  //     if (window.location.hash) {
  //       const targetElement = document.getElementById(window.location.hash.substring(1));
  //       if (targetElement) {
  //         window.scrollTo({
  //           top: targetElement.offsetTop,
  //           behavior: 'smooth',
  //         });
  //       }
  //       window.location.hash = '';
  //     }
  //   };

  //   scrollToHash();

  //   // Cleanup function to prevent memory leaks
  //   return () => {
  //     window.removeEventListener('hashchange', scrollToHash);
  //   };
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavBar {...{
        handleToggleDrawer,
        drawerOpen,
        NAV_WIDTH,
        handleNavLinkClick,
      }}/>
      <section id='top' className=''>
        <Top />
      </section>
      <section id='services' className='pt-[5.5rem] lg:pt-20 z-10'>
        <Services />
      </section>
      <section id='about' className='pt-20'>
        <About />
      </section>
      <section id='portfolio' className='pt-20'>
        <Portfolio />
      </section>
      <section id='pricing' className='pt-20'>
        <Pricing />
      </section>
      <section id='testimonial' className='pt-20'>
        <Testimonial />
      </section>
      <section id='partners' className=''>
        <Partners />
      </section>
      <section id='blog' className='pt-20'>
        <Blog />
      </section>
      <section id='skills' className='pt-20'>
        <Skills />
      </section>
      <section id='timeline' className='pt-20'>
        <Timeline />
      </section>
      <section id='contact' className='pt-20'>
        <Contact />
      </section>
      <section id='footer' className=''>
        <Footer />
      </section>
    </ThemeProvider>
  );
}

export default App;
