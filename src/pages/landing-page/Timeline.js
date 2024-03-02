import React from 'react'
import Header from '../../components/Header'
import Timelines from '../../components/Timelines'
import HeaderText from '../../components/HeaderText'
function Timeline() {
  return (
    <div className='content-container'>
       <Header text="TIMELINE"/>
       <div className='pt-10 pb-10 overflow-hidden lg:w-[900px]'>
          <p className='text-[16px] text-secondaryText'>
            08
          </p> 
          <HeaderText width="100%" text="Here's a broad yearly timeline for a 2in1 promotions and virtual solutions startup from 2018 to 2023:" />
          {/* <p className='text-[16px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla sodales dolor de arcu sagittis ultrices felis, faucibus tortor sed. In tristique ipsum fermentum diam lorem ipsum toleroeise molaris. 
          </p>
          <br></br>
          <p className='text-[14px]'>
          Nisl mi commodo enim nisl curabitur in massa id orci. Ut pellentesque donec aliquet pellentesque duis sollicitudin aliquet eget ridiculus euismod vito mores salominoli etorios babucas ati polimoro.</p>  */}
          <div className='flex flex-col gap-5 relative mt-20'> 
            <Timelines /> 
          </div>
        </div>
    </div>
  )
}

export default Timeline
