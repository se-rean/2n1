import React from 'react'
import HoverButton from '../../components/HoverButton'
import Header from '../../components/Header'
import PageNumber from '../../components/PageNumber'
import HeaderText from '../../components/HeaderText'
import { pricingData } from '../../constant/Data'
function Pricing() {


  return (
    <div className='content-container bg-primary'>
      <Header text="PRICING"/>
      <div className='pt-10 pb-10  lg:w-[900px]'>
          <PageNumber page="04" /> 
          <HeaderText text="Dolor de art sagittis ultrices felis, faucibus tortor sed. In tristique ipsum fermentum diam lorem." />
          <div className='lg:flex lg:justify-center lg:items-start lg:gap-5'>
            <p className='text-[16px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla sodales dolor de arcu sagittis ultrices felis, faucibus tortor sed. In tristique ipsum fermentum diam lorem ipsum toleroeise molaris.

            </p>
            <br></br>
            <p className='text-[14px]'>
            Nisl mi commodo enim nisl curabitur in massa id orci. Ut pellentesque donec aliquet pellentesque duis sollicitudin aliquet eget ridiculus euismod vito mores salominoli etorios babucas ati polimoro.</p> 
          </div>
          {/* price 1 */}
          
        </div>
        <div className='lg:flex lg:self-center'>
          {
            pricingData.map( p => (
                <div key={p.title} className='flex flex-col items-center justify-center gap-5 mt-[3rem]'> 
                  <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-[24px] font-[800] tracking-[5px] uppercase'>{p.title}</h1>
                    <p className='text-[16px]'>
                      {p.subTitle}
                    </p>
                  </div>
                  <div className="box-border  p-4 drop-shadow-2xl hover:drop-shadow-xl  bg-gradient-to-b  from-amber-300 to-yellow-400 flex justify-around flex-col items-center lg:w-[35vh] w-[55vh]"> 
                  <div className='flex flex-row justify-center items-center gap-2 pt-7'>
                    <p className='text-[16px] font-[700]  text-primary mt-[-20px]'>$</p> 
                    <p className='text-[60px] font-[700] tracking-[100%] text-tertiary'>{p.price}</p>
                      <p className='text-[16px] font-[700]  text-primary mt-[20px]'> /mo</p> 
                  </div>
                  <div className='flex flex-col gap-2 justify-start items-start pb-10 pt-7'>
                  {
                    p.offer.map((o, index) => ( 
                      <div key={index} className='flex flex-row justify-end items-center gap-3'>
                        <span className={`fa fa-check ${ !o.active && 'text-primaryText ' } text-primary font-bold`}></span>
                        <p className={`text-[16px] ${ !o.active && 'line-through' } font-[700]  text-primary`}>{o.desc}</p>
                      </div> 
                    ))
                  }
                   </div>
                  </div>
                  <HoverButton title="Choose Now"/>
                </div>
              )
            )
          }
          </div>
    </div>
  )
}

export default Pricing
