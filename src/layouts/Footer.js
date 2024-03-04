import React from 'react'
import Header from '../components/Header'
import HeaderText from '../components/HeaderText'
import FooterLinks from '../components/FooterLinks'
import { Email, Phone } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()
  const links = [
    { title: 'instagram', img: require('../assets/social media/instagram.png'), url: 'https://www.instagram.com/2in1.com.au'},
    { title: 'facebook', img: require('../assets/social media/facebook.png'), url: 'https://www.facebook.com/2in1.com.au' },
  ]
  return (
    <div className='flex flex-col w-full lg:w-[60%] py-10 z-50 ]'><div className='w-full p-20 pt-5 h-auto px-5 justify-between lg:flex-row lg:items-start flex flex-col gap-10'>
      <div className='flex gap-1 flex-col'>
        <HeaderText width="100%" text="2in1 done beautifully" />
        <img onClick={() => window.location= '/'} className='w-40 h-40 cursor-pointer' src="https://2in1.com.au/wp-content/uploads/2023/07/NEWCIRCLELOGOwithQR-TR.png" alt='' />
      </div>
      <div>
        <HeaderText text="Sitemap" />
        <div className='lg:flex-row flex-col flex gap-10 lg:gap-20'>
          <div>
            <FooterLinks text="FAQ's" />
            <FooterLinks text="Blog" />
          </div>
          <div>
            <FooterLinks text="About Us" /> 
            <FooterLinks text="Referral Partners" />
          </div>
        </div>
      </div>

      <div className='gap-5 flex flex-col'>
        <div className='flex gap-4 flex-col text-navText'>   
          <a className='hover:text-primaryText ' href='mailto:vic@2in1.com.au'><Email sx={{ width: '20px' }}/> vic@2in1.com.au</a>
          <p><Phone sx={{ width: '20px' }}/> <a className='hover:text-primaryText' href='tel:1300 711 000'>1300 711 000</a> | <a className='hover:text-primaryText' href='tel:1300 711 000'>0411 500 700</a></p> 
        </div>
        <div className='w-full flex lg:justify-center lg:items-center gap-5'>
          {links.map((l, index) => (
            <a href={l.url} key={index} target="_blank" className='w-[2em] h-[2em]' rel="noreferrer">
              <img key={index} className='w-full h-full' src={l.img} alt='' />
            </a>
          ))}
        </div>
        <div className='w-full self-center flex  justify-center items-center gap-7  text-secondaryText'>
          {/* <Header text={`@${new Date(Date.now()).getFullYear()} software solutions`}/> */}
        </div>
      </div>
      
    </div> 
    <div className='px-5 w-full flex justify-between flex-col lg:flex-row'>
      <p className='text-navText text-[12px]'>{`©${new Date(Date.now()).getFullYear()} 2in1 Promotions & VA Solutions | All Rights Reserved`}</p>
        <p onClick={() =>window.location= '/terms-of-service'} className='underline-offset-1 underline text-navText text-[12px] cursor-pointer hover:text-primaryText'>Terms of Service | Privacy Policy</p>
        <p className='text-navText text-[12px]'>Designed in-house with love</p>
      </div>
     </div>
  )
}

export default Footer
