import React, {useEffect, useRef} from 'react';
import Swipper from './Swipper';
 
function SwipeableTextMobileStepper() {
  const topRef = useRef(null);
  const executeScroll = () => {
    console.log(topRef.current)
    topRef.current.scrollIntoView()
  };

  const f = () => {
    console.log(topRef.current)
  }
  
  const handleSelector = () => {
    const wrapper = document.querySelector("#sliders");
    let press = false
    let startX = 0
    wrapper.addEventListener('mousedown', function (e) {
      press = true
      startX = e.clientX 
    })

    wrapper.addEventListener('mouseleave', function (e) {
       press = false 
    })

    wrapper.addEventListener('mouseup', function (e) {
      press = false  
    })

    wrapper.addEventListener('mousemove', function (e) {
      if(!press) return

      this.scrollLeft += startX - e.clientX 
    })
  }

  useEffect(() => {
    handleSelector()
  }, [])

  return (
    <Swipper>
        <div className='flex snap-start justify-center items-center w-full'>
          <div className='w-[370px] h-[25vh] relative overflow-hidden'>  
          <img className="w-full h-[78%]" alt='' src='https://2in1.com.au/wp-content/uploads/2023/05/Collection2-1024x512.jpg'/> 
           <p className='absolute top-[97px] left-[-26px] text-[80px]   font-[700] text-primaryText overflow-hidden'>01</p>
          <p className=' mt-20 ml-5 font-[700] text-primaryText absolute left-16 top-[98px]'>0asdasd1</p>
          </div> 
        </div>
        <div className='flex snap-start justify-center items-center'>
          <div className='w-[370px] h-[25vh] relative overflow-hidden'>  
          <img className="w-full h-[78%]" alt='' src='https://2in1.com.au/wp-content/uploads/2023/05/Collection2-1024x512.jpg'/> 
           <p className='absolute top-[97px] left-[-26px] text-[80px]   font-[700] text-primaryText overflow-hidden'>01</p>
          <p className=' mt-20 ml-5 font-[700] text-primaryText absolute left-16 top-[98px]'>0asdasd1</p>
          </div> 
        </div>
        <div className='flex snap-start justify-center items-center'>
          <div className='w-[370px] h-[25vh] relative overflow-hidden'>  
          <img className="w-full h-[78%]" alt='' src='https://2in1.com.au/wp-content/uploads/2023/05/Collection2-1024x512.jpg'/> 
           <p className='absolute top-[97px] left-[-26px] text-[80px]   font-[700] text-primaryText overflow-hidden'>01</p>
          <p className=' mt-20 ml-5 font-[700] text-primaryText absolute left-16 top-[98px]'>0asdasd1</p>
          </div> 
        </div>
        <div className='flex snap-start justify-center items-center'>
          <div className='w-[370px] h-[25vh] relative overflow-hidden'>  
          <img className="w-full h-[78%]" alt='' src='https://2in1.com.au/wp-content/uploads/2023/05/Collection2-1024x512.jpg'/> 
           <p className='absolute top-[97px] left-[-26px] text-[80px]   font-[700] text-primaryText overflow-hidden'>01</p>
          <p className=' mt-20 ml-5 font-[700] text-primaryText absolute left-16 top-[98px]'>0asdasd1</p>
          </div> 
        </div>
        <div className='flex snap-start justify-center items-center'>
          <div className='w-[370px] h-[25vh] relative overflow-hidden'>  
          <img className="w-full h-[78%]" alt='' src='https://2in1.com.au/wp-content/uploads/2023/05/Collection2-1024x512.jpg'/> 
           <p className='absolute top-[97px] left-[-26px] text-[80px]   font-[700] text-primaryText overflow-hidden'>01</p>
          <p className=' mt-20 ml-5 font-[700] text-primaryText absolute left-16 top-[98px]'>0asdasd1</p>
          </div> 
        </div>
        <div className='flex snap-start justify-center items-center'>
          <div className='w-[370px] h-[25vh] relative overflow-hidden'>  
          <img className="w-full h-[78%]" alt='' src='https://2in1.com.au/wp-content/uploads/2023/05/Collection2-1024x512.jpg'/> 
           <p className='absolute top-[97px] left-[-26px] text-[80px]   font-[700] text-primaryText overflow-hidden'>01</p>
          <p className=' mt-20 ml-5 font-[700] text-primaryText absolute left-16 top-[98px]'>0asdasd1</p>
          </div> 
        </div>
    </Swipper>
  );
}

export default SwipeableTextMobileStepper;
