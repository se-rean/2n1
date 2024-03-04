import React, { memo } from 'react'
import TitlebarImageList from '../../components/ImageList'
import Header from '../../components/Header'
import AboutCard from '../../components/AboutCard'
import PageNumber from '../../components/PageNumber'
import HeaderText from '../../components/HeaderText'
import { aboutCardData } from '../../constant/Data'
import AnimateWrapper from '../../routes/AnimateWrapper'
function About() {

  return (
    <>
      <div className='content-container'>
        <Header text="Why 2in1?"/>
        <div className='pt-10 pb-10  lg:w-[900px]'>
          <PageNumber page="02" /> 
          <HeaderText width="100%" text="Welcome to 2n1 Promotions & VA Solutions, your go-to destination for comprehensive business support." />
          
           
          <div className='  lg:justify-between lg:gap-10 lg:items-start lg:w-[100%]'>
            <p className='text-[16px] lg:text-left lg:text-[100%] lg:w-[100%] text-secondaryText'>
              We specialize in Virtual Assistance, Web Development, and Digital Marketing Services, offering a 2in1 solutions to elevate your brand's online presence. 
            </p>
            <br></br>
            <p className='text-[16px] text-center lg:text-left lg:text-[100%] lg:w-[100%] text-secondaryText'>
            Hey there! Vic here, and I'm passionate about creating meaningful connections between brands and their target audiences. At 2in1 Promotions & VA Solutions, we put your brand 1st. As the Managing Director at 2in1 Promotions & VA Solutions, I lead a talented team of VA professionals in the Philippines dedicated to crafting innovative and effective marketing solutions that drive engagement and brand awareness.  Our "2in1 approach" means that we put your company ahead of ourselves and promote your business by helping your audience understand what you do while having the opportunity to share and showcase our expertise, that is what "2in1" truly represents. 
            </p> 
          </div> 
        </div>
      </div>
      <AnimateWrapper>
        <div className='bg-primary pb-[60px] lg:flex lg:justify-center lg:items-center'>
          <div className='flex flex-col pl-3 lg:pl-0 pr-3 pt-10   lg:w-[900px]'>
            <p className='pb-[40px] text-[20px] font-[600]  lg:text-[28px] lg:font-[600] lg:leading-[2rem] text-secondaryText'>
                Let 2in1 be your partner in success, providing te support and expertise your business deserveds.</p> 
              <div className='lg:flex lg:overflow-auto  lg:w-[150%] lg:pr-5'>
                {
                  aboutCardData.map(c => (
                    <div className="h-[18vh] w-full lg:w-[300px] bg-card2 hover:bg-card1 hover:cursor-pointer"> 
                      <AboutCard header={c.header} title={c.title}/>
                    </div> 
                  ))
                }
              </div>
          </div>
        </div>
      </AnimateWrapper>
    </>
  )
}

export default  memo(About)