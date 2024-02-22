import React from 'react'

function TestimonialCard({ message, name, position }) {
  return (
    <div className='snap-center flex w-full flex-col lg:justify-start lg:items-start cursor-pointer hoverActiveBorder'>
      <p className='w-[370px] mr-[100px] lg:self-start mb-[60px] lg:max-w-none lg:text-left'>{message}</p>
      <div className='lg:flex lg:flex-col lg:justify-start lg:items-start'>
        <img src='' alt=''/>
        <p>{name}</p>
        <p>{position}</p>
        <div className='bg-card1 w-[10rem] lg:w-full h-1 hoverBorder'></div>
      </div>
    </div>
  )
}

export default TestimonialCard
