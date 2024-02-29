import React, { useState } from 'react'
import Top from '../pages/landing-page/Top'
import Services from '../pages/landing-page/Services'
import About from '../pages/landing-page/About'
import Portfolio from '../pages/landing-page/Portfolio'
import Pricing from '../pages/landing-page/Pricing'
import Testimonial from '../pages/landing-page/Testimonial'
import Partners from '../pages/landing-page/Partners'
import Blog from '../pages/landing-page/Blog'
import Skills from '../pages/landing-page/Skills'
import Timeline from '../pages/landing-page/Timeline'
import Contact from '../pages/landing-page/Contact'
import Footer from '../layouts/Footer'
export default function LandingPage() {



  return (
    <>
    <section id='top' className=''>
        <Top />
      </section>
      <section id='services' className='pt-[5.5rem] lg:pt-20 z-10'>
        <Services />
      </section>
      <section id='about' className='pt-20'>
        <About />
      </section>
      <section id='portfolio' className='pt-20 bg-[#1b212c]'>
        <Portfolio />
      </section>
      {/* <section id='pricing' className='pt-20'>
        <Pricing />
      </section> */}
      <section id='testimonial' className='pt-20 '>
        <Testimonial />
      </section>
      <section id='partners' className='pt-20 bg-[#1b212c]'>
        <Partners />
      </section>
      <section id='blog' className='pt-20'>
        <Blog />
      </section>
      {/* <section id='skills' className='pt-20 bg-[#1b212c]'>
        <Skills />
      </section> */}
      <section id='timeline' className='pt-20'>
        <Timeline />
      </section>
      <section id='contact' className='pt-20 bg-[#1b212c]'>
        <Contact />
      </section>
      </>
  )
}
