import React from 'react'
import TitlebarImageList from '../../components/ImageList'
import Header from '../../components/Header'
import AboutCard from '../../components/AboutCard'
import PageNumber from '../../components/PageNumber'
import HeaderText from '../../components/HeaderText'

export default function About() {

  const cardContent = [
    { header: '5', title: 'Digital Marketing Client' },
    { header: '2', title: 'Web development Client' },
    { header: '3', title: 'Virtual Assistance Client' }, 
  ]

  return (
    <>
      <div className='flex flex-col pl-3 pr-3 pt-10 bg-[#1b212c] lg:justify-center lg:items-center'>
        <Header text="ABOUT"/>
        <div className='pt-10 pb-10  lg:w-[900px]'>
          <PageNumber page="02" /> 
          <HeaderText text="Welcome to 2n1 Promotions & VA Solutions, your go-to destination for comprehensive business support." />
          
           
          <div className='lg:flex  lg:justify-between lg:gap-10 lg:items-start lg:w-[100%]'>
            <p className='text-[16px] lg:text-left lg:text-[100%] lg:w-[50%]'>
              We specialize in Virtual Assistance, Web Development, and Digital Marketing services, offering a 2in1 solutions to elevate your brand's online presence. 
            </p>
            <br></br>
            <p className='text-[16px] text-center lg:text-left lg:text-[100%] lg:w-[50%]'>
            Whether you need dedicated virtual Assistance, a dynamic website, or strategic digital Marketing, We are here to seamlessly integrate these services to meet your business needs.
            </p> 
          </div>
          
          {/* <TitlebarImageList />  */}
          {/* <div className="cacobasic-carousel-image-slider">
                                <div id="about-slider" className="carousel-slider-wrapper relative swiper-container swiper-initialized swiper-horizontal swiper-backface-hidden">
                                    <div className="swiper-wrapper slider" id="swiper-wrapper-b2fda0105cc22a4510" aria-live="polite">
                                        <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 3" style={{marginRight: '30px'}}>
                                            <div className="swiper-slide-img-holder">
                                                <img src="images/about_03.jpg" alt="About 3"/>
                                                <p className="swiper-slide-number">01</p>
                                                <p className="swiper-slide-caption-text">Home Office</p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 3" style={{marginRight: '30px'}}>
                                            <div className="swiper-slide-img-holder">
                                                <img src="images/about_02.jpg" alt="About 2"/>
                                                <p className="swiper-slide-number">02</p>
                                                <p className="swiper-slide-caption-text">Sarah Stone</p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" role="group" aria-label="3 / 3" style={{marginRight: '30px'}}>
                                            <div className="swiper-slide-img-holder">
                                                <img src="images/about_01.jpg" alt="About 1"/>
                                                <p className="swiper-slide-number">03</p>
                                                <p className="swiper-slide-caption-text">Designer Team</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear"></div>    
                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div> 
                                <div className="swiper-scrollbar swiper-scrollbar-about-slider swiper-scrollbar-horizontal"><div className="swiper-scrollbar-drag" style={{transform: `translate3d('0px', '0px', '0px')`,  width: '120px'}}></div></div>
                            </div> */}
        </div>
      </div>
      <div className='bg-primary pb-[60px] lg:flex lg:justify-center lg:items-center'>
        <div className='flex flex-col pl-3 lg:pl-0 pr-3 pt-10   lg:w-[900px]'>
          <p className='pb-[40px] text-[20px] font-[600]  lg:text-[28px] lg:font-[600] lg:leading-[2rem]'>
              Let 2in1 be your partner in success, providing te support and expertise your business deserveds.</p> 
            <div className='lg:flex lg:overflow-auto  lg:w-[150%] lg:pr-5'>
              {
                cardContent.map(c => (
                  <div className="h-[18vh]  w-full lg:w-[300px] bg-card2 hover:bg-card1 hover:cursor-pointer"> 
                    <AboutCard header={c.header} title={c.title}/>
                  </div> 
                ))
              }
            </div>
        </div>
      </div>
    </>
  )
}
