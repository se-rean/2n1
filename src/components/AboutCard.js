import React from 'react'

function AboutCard({ header, header2, title, icon }) {
  return (
    <div className="scale-text   h-full     p-4 drop-shadow-2xl hover:drop-shadow-xl  bg-gradient-to-b flex justify-around flex-col items-center gap-6 w-full "> 
    {
      header && (
      <p className='text-[44px] font-[700] tracking-[100%] text-tertiaryText'>{header}</p> 
      )
    }

    {
      header2 && (
        <p className='text-[24px] font-[700] tracking-[100%] text-tertiaryText'>{header2}</p>
      )
    }
    {
      title && (
        <p className='text-[16px] font-[700]  mt-[-4rem] text-tertiaryText'>{title} 
        
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
