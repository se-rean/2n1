import React from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'
import PageNumber from '../../components/PageNumber'
import HeaderText from '../../components/HeaderText'
import { useNavigate } from 'react-router-dom/dist'
 import { servicesData } from '../../constant/Data'
import AnimateWrapper from '../../routes/AnimateWrapper'
export default function Services() {
  const navigate = useNavigate();

  return (
    <div className='content-container'> 
      <Header text="SERVICES" />
      <div className='flex flex-col relative justify-start items-start lg:w-[900px]'>
        <div className='flex flex-col gap-2 justify-start items-start'>
          <PageNumber page="01" />
          <HeaderText text="Welcome to 2in1 Services! We're here to assist you with Virtual Assistance, Web Development, and Digital Marketing. "/>
        </div>

        <div className='flex flex-col lg:justify-center items-center  gap-10   lg:flex-row lg:gap-[0rem]  mb-5'>
          {
            servicesData.map((item, index) => (
              <AnimateWrapper 
                variant={{
                  hidden: { opacity:0, x:-100 },
                  visible: { opacity:1, x:0 }
                }}
                transition={{ 
                  duration: 0.5,
                  delay: index/2
                 }}
                once={true}
              >
                <div  className='lg:h-[50vh] lg:w-[20rem] w-full lg:flex lg:flex-col lg:justify-end overflow-x-hidden cursor-pointer '>
                  <Card title={item.title} header={item.header} subtitle={item.desc} />
                </div>
              </AnimateWrapper>
            ))
          }
        </div> 
      </div> 
    </div>
  )
}