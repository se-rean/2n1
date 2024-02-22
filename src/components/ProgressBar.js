import React from 'react'

function ProgressBar({title}) {
  return ( 
    <div className='w-full justify-between items-end flex flex-row gap-2'>
    <p className='mb-[-10px] w-[45%]'>{title}</p>
    <div className="mt-10 h-3 relative w-[55%] rounded-full overflow-hidden">
      <div className="progress w-full h-full bg-gray-200 absolute"></div>

      <div id={title} className="h-full bg-green-500 absolute duration-300" style={{ width: '0%' }}></div>

    </div>
  </div>
  )
}

export default ProgressBar
