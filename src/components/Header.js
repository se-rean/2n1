import React from 'react'

function Header({text, ...rest}) {
  return (
    <h1 style={{...rest}} className="sticky text-[16px] space-[20px] tracking-[5px] font-[600] leading-normal lg:ml-[-130vh]  text-secondaryText">{text}</h1>
  )
}

export default Header
