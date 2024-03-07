import React from 'react'
import Header from '../components/Header'
import HeaderText from '../components/HeaderText'
import FooterLinks from '../components/FooterLinks'
import { Email, Phone } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { logo } from '../constant/Data'
function Footer() {
  const navigate = useNavigate()
  const links = [
    { title: 'instagram', img: require('../assets/social media/icons8-instagram-50.png'), url: 'https://www.instagram.com/2in1.com.au'},
    { title: 'facebook', img: require('../assets/social media/icons8-facebook-50.png'), url: 'https://www.facebook.com/2in1.com.au' },
    { title: 'linkedin', img: require('../assets/social media/icons8-linkedin-50.png'), url: 'https://www.linkedin.com/in/vic-pangilinan-3abb7615' },
  ]

  const handleNavigate = (link) => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    navigate(link)
  }
  return (
    <div className='flex flex-col w-full lg:w-[60%] py-10 '>
      <div className='w-full p-20 pt-5 h-auto px-5 justify-between lg:flex-row lg:items-start flex flex-col gap-10'>
        <div className='flex gap-2 flex-col lg:w-[30%] '>
          <HeaderText width="100%" font-size="25px" text={`Help us find your "2in1"`} />
          <div className='flex flex-col gap-4 items-center  lg:flex-row'>
            <img onClick={() => window.location= '/'} className='w-[5rem] h-[5rem] cursor-pointer' src={logo} alt='' />
            <a href=' https://tamtechhub.com' target="_blank"  rel="noreferrer"><img className='w-[13rem] h-15 cursor-pointer' src={require('../assets/social media/image_2024_03_07T02_07_43_977Z.png')} alt='' /> </a>
          </div>  
          <p className='text-navText text-[14px]'>An outsourcing company with a passionate team of do-ers and top-notch resources to help your business thrive</p>
        </div>
        <div>
          <HeaderText font-size="25px" text="Sitemap" />
          <div className='lg:flex-row flex-col flex gap-10 lg:gap-20'>
            <div>
              <p className='cursor-pointer hover:text-primaryText underline' onClick={() => handleNavigate('/FAQ')}><FooterLinks text="FAQ's" /></p>
              <p className='cursor-pointer hover:text-primaryText underline' onClick={() => handleNavigate('/blog')}><FooterLinks text="Blog" /></p>
            </div>
            <div>
              <FooterLinks text="About Us" /> 
              <FooterLinks text="Referral Partners" />
            </div>
          </div>
        </div>

        <div className='gap-5 flex flex-col'>
          <div className='flex gap-4 flex-col text-navText'>   
            <a className='hover:text-primaryText text-[16px] font-[600] text-navText' href='mailto:vic@2in1.com.au'><Email sx={{ width: '20px' }}/> vic@2in1.com.au</a>
            <p><Phone sx={{ width: '20px' }}/> <a className='hover:text-primaryText text-[16px] font-[600] text-navText' href='tel:1300 711 000'>1300 711 000</a> | <a className='hover:text-primaryText text-[16px] font-[600] text-navText' href='tel:1300 711 000'>0411 500 700</a></p> 
          </div>
          <div className='w-full flex lg:justify-center lg:items-center gap-5'>
            {links.map((l, index) => (
              <a href={l.url} key={index} target="_blank" className='w-[2em] h-[2em]' rel="noreferrer">
                <img key={index} className='w-full h-full' src={l.img} alt={l.title} />
              </a>
            ))}
          </div>
          <div className='w-full flex-col lg:flex-row flex lg:justify-center lg:items-start gap-5'>
            <div>
              <p className='text-primaryText text-[14px] font-bold'>Australia HQ</p>
              <a href='https://2in1.com.au/' target="_blank"  rel="noreferrer">
                <p className='text-primaryText text-[14px] cursor-pointer hover:underline'>2in1 Promotions 
                  <br></br>
                & VA Solutions </p>
              </a>
              <p className='text-navText text-[14px]'>20 Pienza Road</p>
              <p className='text-navText text-[14px]'>Fraser Rise</p>
              <p className='text-navText text-[14px]'>Victoria 3170</p>
            </div>
            <div> 
              <p className='text-primaryText text-[14px] font-bold'>Philippines HQ</p> 
              <a href=' https://tamtechhub.com' target="_blank"  rel="noreferrer"><p className='text-primaryText text-[14px] cursor-pointer hover:underline'>Tamaraw Technohub</p></a>
              <p className='text-navText text-[14px]'>5th flr Megalife Building,</p>
              <p className='text-navText text-[14px]'>Juan Luna, San Vicente, </p>
              <p className='text-navText text-[14px]'>Calapan, Philippines 5200</p>
            </div> 
          </div>
        </div>
      </div> 
      <div className='px-5 w-full flex justify-between flex-col lg:flex-row'>
        <p className='text-navText text-[12px]'>{`©${new Date(Date.now()).getFullYear()}`} <span className='font-bold text-primaryText'>2in1 Promotions & VA Solutions</span> | All Rights Reserved</p>
          <p onClick={() =>handleNavigate('/terms-of-service')} className='underline-offset-1 underline text-navText text-[12px] cursor-pointer hover:text-primaryText'>Terms of Service | Privacy Policy</p>
          <p className='text-navText text-[12px]'>Designed in-house with love</p>
      </div>
     </div>
  )
}

export default Footer
