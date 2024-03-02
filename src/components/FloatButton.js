import React from 'react'
import { ArrowDropUpTwoTone } from '@mui/icons-material'
export default function FloatButton() {
  return (
    <button onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} className='z-50 bottom-2 fixed left-10   text-secondaryText'><ArrowDropUpTwoTone sx={{ width: '7rem', height: '10rem' }} /></button>
  )
}
