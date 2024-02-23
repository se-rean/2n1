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
import AppRoute from './routes';

const theme = createTheme ({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(','),
  },
});

function App() {



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
    <>
    <ThemeProvider theme={theme}>
      <AppRoute />
    </ThemeProvider>
     
     </>
  );
}

export default App;
