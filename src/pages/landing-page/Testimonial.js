import React, { useEffect } from 'react'
import TestimonialCard from '../../components/TestimonialCard'
import Header from '../../components/Header';
import PageNumber from '../../components/PageNumber';
import HeaderText from '../../components/HeaderText'; 
function Testimonial() {
  const handleSelector = () => {
    const wrapper = document.querySelector("#sliders");
    let press = false
    let startX = 0
    wrapper.addEventListener('mousedown', function (e) {
      press = true
      startX = e.clientX 
      console.log(startX)
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

  const testimonialContent = [
    {
      name: 'Rene',
      message: '“Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus.”',
      position: 'Software developer'
    },
    {
      name: 'Rene',
      message: '“Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus.”',
      position: 'Software developer'
    },
    {
      name: 'Rene',
      message: '“Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus.”',
      position: 'Software developer'
    },
    {
      name: 'Rene',
      message: '“Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus.”',
      position: 'Software developer'
    },
    {
      name: 'Rene',
      message: '“Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus.”',
      position: 'Software deasdfasdfveloper'
    }
  ]

  useEffect(() => {
    handleSelector()
  }, [])

  return (
     <div className='flex flex-col pl-3 pr-3 pb-20 pt-10 bg-[#1b212c] lg:justify-center lg:items-center'>
       <Header text="TESTIMONIAL"/>
        <div className='pt-10 pb-10 lg:w-[900px]'>
          <PageNumber page="05" /> 
          <HeaderText text="Dolor de art sagittis ultrices felis, faucibus tortor sed. In tristique ipsum fermentum diam lorem." />
          <div className='lg:flex lg:gap-5'>
            <p className='text-[16px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla sodales dolor de arcu sagittis ultrices felis, faucibus tortor sed. In tristique ipsum fermentum diam lorem ipsum toleroeise molaris. 
            </p>
            <br></br>
            <p className='text-[14px]'>
            Nisl mi commodo enim nisl curabitur in massa id orci. Ut pellentesque donec aliquet pellentesque duis sollicitudin aliquet eget ridiculus euismod vito mores salominoli etorios babucas ati polimoro.</p> 
          </div>
          <div id="sliders"  className='snap-mandatory py-20 px-5  lg:gap-10 snap-x flex lg:w-[1000px] testimonial'>
            {/* <Swipper items={3} > */}
              {
                testimonialContent.map(t => (
                  <div className='snap-start pr-4 lg:row-span-1'>
                    <TestimonialCard 
                    className="snap-start"
                    name={t.name} 
                    message={t.message} 
                    position={t.position}/>
                  </div> 
                ))
              }
            {/* </Swipper> */}
          </div> 
      </div>
    </div>
  )
}

export default Testimonial
