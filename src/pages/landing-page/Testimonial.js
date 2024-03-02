import React, { useEffect } from 'react'
import TestimonialCard from '../../components/TestimonialCard'
import Header from '../../components/Header';
import PageNumber from '../../components/PageNumber';
import HeaderText from '../../components/HeaderText'; 
import { testimonialData } from '../../constant/Data';
function Testimonial() {
 
  return (
     <div className='content-container'>
       <Header text="TESTIMONIAL"/>
        <div className='pt-10 pb-10 lg:w-[900px]'>
          <PageNumber page="05" /> 
          <HeaderText width="100%" text="Voices of Satisfaction: Elevating 2in1 Promotions & VA Solutions Through Client Testimonials" />
          {/* <div className='lg:flex lg:gap-5'>
            <p className='text-[16px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla sodales dolor de arcu sagittis ultrices felis, faucibus tortor sed. In tristique ipsum fermentum diam lorem ipsum toleroeise molaris. 
            </p>
            <br></br>
            <p className='text-[14px]'>
            Nisl mi commodo enim nisl curabitur in massa id orci. Ut pellentesque donec aliquet pellentesque duis sollicitudin aliquet eget ridiculus euismod vito mores salominoli etorios babucas ati polimoro.</p> 
          </div> */}
          <div className='snap-mandatory py-20 px-5  lg:gap-10 snap-x flex  gap-5 lg:w-[1300px] flex-wrap lg:flex'>
            {/* <Swipper items={3} > */}
              {
                testimonialData.map(t => (
                  <div className='snap-start pr-4 lg:row-span-1 lg:w-[40%]'>
                    {/* <TestimonialCard 
                    className="snap-start"
                    name={t.name} 
                    message={t.message} 
                    position={t.position}
                    img={t.src}
                    /> */}
                    <img alt='' className='object-fill top-0 h-full w-full opacity-[70%]' src={t.src}/>
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
