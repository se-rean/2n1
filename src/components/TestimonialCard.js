import React from 'react'
import bg from '../assets/CLIENT TESTIMONIAL-1.png'
function TestimonialCard({ message, name, position, img }) {
  return (
    <div className='snap-center h-full flex w-full testimonial-card flex-col lg:justify-between lg:items-start cursor-pointer hoverActiveBorder'>
      {/* <p className='p-2 mb-[60px] pt-10  z-10 w-full'>{message}</p> */}
      <img alt='' className='object-fill w-full top-0 h-full  opacity-[70%]' src={img}/>
      {/* <div className='lg:flex lg:flex-col lg:justify-start lg:items-start z-10 p-2 self-start'>
        <img src='' alt=''/>
        <p>{name}</p>
        <p>{position}</p>
        <div className='bg-card1 w-[10rem] lg:w-full h-1 hoverBorder'></div>
      </div> */}
    </div>
  )
}

export default TestimonialCard
