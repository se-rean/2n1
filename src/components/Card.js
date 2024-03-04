import React from 'react'

function Card({ header, title, subtitle }) {
  return ( 
    <div  className="box-border drop-shadow-2xl bg-secondary hover:drop-shadow-xl relative justify-end flex-col lg:bg-primary lg:h-[80%] border-yellow-500 border-l-2 border-opacity-40">   
      <div className='bg-card2 w-full h-full flex flex-col justify-center item-center overflow-hidden lg:justify-start lg:flex lg:gap-5 p-5 lg:p-10 hover:bg-card1 lg:h-[100%]'> 
        <p className='animate__animated animate__fadein text-[60px] top-20px animate__animated  animate__fadeInLeft left-20px font-[700] text-secondary lg:left-[-30px] lg:top-[-8rem] lg:text-[140px] lg:ml-[-2vh]  lg:absolute services-num'>{header}</p>
        <p className='text-[20px] font-[800] tracking-[2px]   lg:mt-10 text-tertiaryText'>{title}</p>
        {
          subtitle.map(t => ( 
              <p key={t} className='text-[16px] line-clamp-8 text-tertiaryText text-wrap'>{t}</p>  
          ))
        }
      </div>
    </div>
  )
}

export default Card
