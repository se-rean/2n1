import React from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'
import PageNumber from '../../components/PageNumber'
import HeaderText from '../../components/HeaderText'
 
export default function Services() {
 
  const services = [
    { header: '01', title: 'VIRTUAL ASSISTANCE', desc:[
      `Welcome to 2in1 Promotions & VA
      Solutions, where we redefine
      productivity and efficiency through
      our top-notch Virtual Assistance
      services. `
    ] },
    { header: '02', title: 'WEB DEVELOPMENT', desc:[
      `At 2in1, we are committed to
      bringing your digital vision to life
      through our comprehensive Web
      Development services. `,
    ] },
    { header: '03', title: 'DIGITAL MARKETING', desc:[
      `Unlock the full potential of your
      online presence with our
      comprehensive Digital Marketing
      services.`,
    ] },
     
  ]
  return (
    <div className='flex flex-col pl-3 pr-3 pt-10 gap-14 lg:justify-center lg:items-center z-10'> 
      <Header text="SERVICES" />
      <div className='flex flex-col justify-start items-start lg:w-[900px]'>
        <div className='flex flex-col gap-2 justify-start items-start'>
          <PageNumber page="01" />
          <HeaderText text="Welcome to 2in1 Services! We're here to assist you with Virtual Assistance, Web Development, and Digital Marketing. "/>
        </div>

        <div className='flex flex-col lg:justify-center items-center  gap-10   lg:flex-row lg:gap-[0rem]  mb-5'>
          {
            services.map((item, index) => (
              <div className='lg:h-[50vh] lg:w-[20rem] w-full lg:flex lg:flex-col lg:justify-end overflow-x-hidden cursor-pointer '>
                <Card title={item.title} header={item.header} subtitle={item.desc} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}