import React from 'react'
import Swipper from '../../components/Swipper'
import useResponsive from '../../hooks/use-responsive';
import { partnersData } from '../../constant/Data';
function Partners() {
 
  const isDesktop = useResponsive('up', 'sm'); 

  return (
    <div className='snap-mandatory h-[20vh] snap-x flex justify-center items-center flex-row  w-full pl-3 pr-3 pb-14 bg-[#1b212c]'>
      <Swipper items={isDesktop ? 5:1}>
       {
        partnersData.map((l, i) => (
          <img key={i} className='self-center h-auto  snap-center cursor-pointer' src={l.src} alt='' />
        ))
       }
      </Swipper>
    </div>
  )
}

export default Partners
