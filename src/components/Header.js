import React from 'react'

function Header({text}) {
  return (
    <h1 className="sticky text-[16px] space-[20px] tracking-[5px] font-[600] leading-normal lg:ml-[-130vh]">{text}</h1>
  )
}

export default Header
