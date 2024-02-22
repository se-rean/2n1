import React from 'react'
import AboutCard from '../../components/AboutCard'
import { ArrowRightAlt } from '@mui/icons-material'
import PulseButton from '../../components/PulseButton'
import Modal from '../../components/Modal'
function Top() {
  return (
    <div className='flex lg:flex-row lg:items-center flex-col home justify-between bg-blend-darken lg:h-[80vh] h-[50rem]'> 
      <div className='lg:flex-row lg:w-full lg:justify-center justify-start items-start lg:gap-[20rem] flex flex-col lg:items-center z-10'>
        <h1 className='leading-[50px] font-[600] text-[50px] lg:mt-[0px] ml-4 mt-[160px] lg:w-[25rem] lg:ml-[-20rem] lg:text-[70px] lg:font-[700] lg:leading-[73px]  '>Start your creative business</h1>
        <div className='ml-[2rem] mt-[70px] lg:ml-0 lg:mt-0'>
          <a href=''>
            <PulseButton />
          </a>
        </div> 
      </div>
    
      <Modal />
      <div className='lg:flex lg:absolute lg:bottom-[8vh] h-[200px] right-0 lg:w-[78%] z-10'>
        <div className='w-[30%] relative hidden lg:block'>
          <div className='bg-primary bottom-[4rem] w-[5vh] h-[9vh] rounded-t-full rounded-b-full absolute flex justify-center items-center'>
            <div className='border-2 bottom-10 w-[4vh] h-[8vh] flex justify-center rounded-t-full rounded-b-full'>
              <div className='round-dot mt-1 mb-1 w-2 rounded-full h-2 bg-gray-600'></div>
            </div>
          </div>
        </div> 
        <div className='h-[150px] lg:h-[17vh] w-full  bg-card2  cursor-pointer'>
          <AboutCard icon={<ArrowRightAlt />} title="We can help" header2="Have a project?" />
        </div> 
        <div className='h-[150px] lg:h-[17vh] w-full bg-card1 cursor-pointer'>
          <AboutCard icon={<ArrowRightAlt />} title="Join our team" header2="We are hiring" />
        </div> 
      </div>
    </div>
  )
}

export default Top
