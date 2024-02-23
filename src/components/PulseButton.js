import React, { useState } from 'react'
import { PlayArrow } from '@mui/icons-material'

function PulseButton() {

  return (
    <div className='flex relative justify-center items-center'>
       
        <div  className='absolute pulse opacity-25 w-[100px] bg-gray-400  h-[100px]  rounded-full lg:w-[140px] lg:h-[140px]'>
        
        </div>
        <div className='item-center justify-center pulse  opacity-75 border-4 w-[60px] h-[60px] shadow-lg rounded-full  lg:h-[90px] lg:w-[90px]'>
         
          </div>
        <div className='pulse absolute ml-[-15px] w-5  lg:w-6 '>
          <PlayArrow sx={{ fontSize: '40px' }} />
        </div>
      </div>
  )
}

export default PulseButton
