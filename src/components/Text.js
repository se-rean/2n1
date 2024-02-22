import React from 'react'

export default function Text({text, hoverColor, color, ...rest}) {
  return (
     <p className={`text-gray-950 hover:text-[${hoverColor}]`}>
          {text}
      </p>
  )
}
