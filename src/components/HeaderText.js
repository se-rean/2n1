import React from 'react'

function HeaderText({text, ...rest}) {
  return (
    <p style={{...rest}} className='pb-[40px] text-[20px] lg:w-[85%] lg:tracking-wide font-[600] lg:text-[28px] lg:font-[700] lg:leading-[2rem] text-primaryText'>{text}</p>
  )
}

export default HeaderText
