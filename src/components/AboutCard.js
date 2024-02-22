import React from 'react'

function AboutCard({ header, header2, title, icon }) {
  return (
    <div className="   h-full     p-4 drop-shadow-2xl hover:drop-shadow-xl  bg-gradient-to-b flex justify-around flex-col items-center gap-6 w-full"> 
    {
      header && (
      <p className='text-[44px] font-[700] tracking-[100%] text-tertiary'>{header}</p> 
      )
    }

    {
      header2 && (
        <p className='text-[24px] font-[700] tracking-[100%] text-tertiary'>{header2}</p>
      )
    }
    {
      title && (
        <p className='text-[16px] font-[700]  text-primary mt-[-4rem]'>{title} 
        
        {
          icon && icon
        }
        </p>       
      ) 
    }
    
  </div> 
  )
}

export default AboutCard
