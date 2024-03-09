import React from 'react'
import HeaderText from '../components/HeaderText'

function CareerPage() {
 
  return (
    <div className='content-container flex justify-center items-center bg-secBG pb-10'>
      <div className='w-[100%] flex justify-center items-center flex-col gap-5 pt-[10rem]'>
        <h1 className='text-[20px]  lg:tracking-wide font-[600] lg:text-[35px] lg:font-[700] lg:leading-[2rem] text-primaryText'>Join Our Team</h1>
        <p className='w-[40%] tracking-tighter text-center text-pretty text-secondaryText'>Become a part of our team and begin your journey to success now! We aim to build a culture that encourages innovation and teamwork. We're searching for    enthusiastic individuals who align with our values.
        </p>
        <p className='text-center text-pretty w-[40%] text-secondaryText  tracking-tighter'>
        We offer our team members the assistance and tools necessary for their growth and prosperity.
        </p>
        <p className='text-center text-pretty w-[40%] text-secondaryText  tracking-tighter'>Don't hesitate – be a part of our successful team and embark on a rewarding career in virtual assistant services. Explore our job openings to discover the perfect match for your skills.
        </p>
      </div>
      <div id='why-work-with-us' className='flex flex-col gap-10 pt-20 justify-center items-center'>
        <h1 className='text-[20px]  lg:tracking-wide font-[600] lg:text-[35px] lg:font-[700] lg:leading-[2rem] text-primaryText'>Why Work with Us</h1>
        <div className='flex flex-wrap justify-center gap-10 w-[70%]'>
          <div className='w-[20rem] h-[20rem]  flex justify-start items-center flex-col gap-2'>
            <img className='w-[5rem] h-[5rem]' src={require('../assets/career/icons8-growth-64.png')} alt=''/>
            <p className='text-[18px] text-primaryText font-bold tracking-wide'>Rapid Growth</p>
            <p className='text-center text-pretty text-secondaryText  tracking-tighter'>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua</p>
          </div>

          <div className='w-[20rem] h-[20rem]  flex justify-start items-center flex-col gap-2'>
            <img className='w-[5rem] h-[5rem]' src={require('../assets/career/icons8-collaboration-80.png')} alt=''/>
            <p className='text-[18px] text-primaryText font-bold tracking-wide'>Team Colaboration</p>
            <p className='text-center text-pretty text-secondaryText  tracking-tighter'>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua</p>
          </div>

          <div className='w-[20rem] h-[20rem]  flex justify-start items-center flex-col gap-2'>
            <img className='w-[5rem] h-[5rem]' src={require('../assets/career/icons8-star-50.png')} alt=''/>
            <p className='text-[18px] text-primaryText font-bold tracking-wide'>Vibrant Culture</p>
            <p className='text-center text-pretty text-secondaryText  tracking-tighter'>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua</p>
          </div>

          <div className='w-[20rem] h-[20rem]  flex justify-start items-center flex-col gap-2'>
            <img className='w-[5rem] h-[5rem]' src={require('../assets/career/icons8-people-50.png')} alt=''/>
            <p className='text-[18px] text-primaryText font-bold tracking-wide'>Executive Mentors</p>
            <p className='text-center text-pretty text-secondaryText  tracking-tighter'>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua</p>
          </div>

          <div className='w-[20rem] h-[20rem]  flex justify-start items-center flex-col gap-2'>
            <img className='w-[5rem] h-[5rem]' src={require('../assets/career/icons8-ribbon-64 (1).png')} alt=''/>
            <p className='text-[18px] text-primaryText font-bold tracking-wide'>Great Perks</p>
            <p className='text-center text-pretty text-secondaryText  tracking-tighter'>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua</p>
          </div>
           
        </div>
      </div>
    </div>
  )
}

export default CareerPage
