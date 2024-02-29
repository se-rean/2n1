import React from 'react'

function HoverButton({title, ...rest}) {
  return (
    <div {...rest} className='w-[15vh] choose-now overflow-hidden'>
      <h1 className='font-[700] text-[18px] hover:cursor-pointer hover:text-primaryText hover:duration-300'>{title}</h1>
      <div className='w-full h-[2px] bg-secondary'></div>
    </div>
  )
}

export default HoverButton
