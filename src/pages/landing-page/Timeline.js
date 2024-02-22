import React from 'react'
import Header from '../../components/Header'
import Timelines from '../../components/Timelines'
import HeaderText from '../../components/HeaderText'
function Timeline() {
  return (
    <div className='flex flex-col pl-3 pr-3 pb-20 pt-10 overflow-hidden lg:justify-center lg:items-center'>
       <Header text="TIMELINE"/>
       <div className='pt-10 pb-10 overflow-hidden lg:w-[900px]'>
          <p className='text-[16px]'>
            08
          </p> 
          <HeaderText text="Donec dipiscing elit ultrices nec id sed cursus tempor lipsum arcu lorem amet est per sei." />
          <p className='text-[16px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla sodales dolor de arcu sagittis ultrices felis, faucibus tortor sed. In tristique ipsum fermentum diam lorem ipsum toleroeise molaris. 
          </p>
          <br></br>
          <p className='text-[14px]'>
          Nisl mi commodo enim nisl curabitur in massa id orci. Ut pellentesque donec aliquet pellentesque duis sollicitudin aliquet eget ridiculus euismod vito mores salominoli etorios babucas ati polimoro.</p> 
          <div className='flex flex-col gap-5 relative mt-20'> 
            <Timelines /> 
          </div>
        </div>
    </div>
  )
}

export default Timeline
