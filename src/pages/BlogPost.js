import React, { useState } from 'react' 
import HeaderText from '../components/HeaderText' 
import Post from '../components/BlogPosts/' 
import { Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { BlogData } from '../constant/Data'
export default function BlogPost() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate()
  return (
    <>  
    <div className='content-container flex flex-row justify-center items-start bg-primary pb-10 pt-40'>   
      <div className='xl:flex lg:w-[30%] xl:w-[20%] h-[50vh] flex-col hidden gap-8 '>
      <div className=' bg-secBG rounded-lg w-[350px] p-5 h-[333px] gap-5'> 
            <p className='text-[16px] font-bold text-secondaryText'>In this article</p>
            <Divider  style={{ background: 'whitesmoke' }} /> 
            <ul className='flex flex-col gap-2'>
              {
                BlogData && BlogData.map((b, i) => (
                  <p key={i} onClick={(e) => {  
                    const a = document.getElementById(b.id)  
                    if (a) {
                      a.scrollIntoView({ behavior: 'smooth' })
                    }
                    setActive(b.id)
                  }} className={`${active === b.id ? 'underline text-primaryText' : 'text-secondaryText'}  text-[14px] font-semibold hover:underline hover:text-primaryText hover:cursor-pointer`}>
                    {b.title}
                  </p>
                ))
              }
            </ul>
        </div>
        <div className=' bg-secBG rounded-lg w-[350px] p-5 h-[333px] gap-5'>
          <div className='profile w-full flex gap-5 justify-start items-end'>
            <img className='object-fill w-20 h-20' alt="" src="https://media.licdn.com/dms/image/D5603AQG8RIZfrt_P0A/profile-displayphoto-shrink_800_800/0/1689985276659?e=1715212800&v=beta&t=4OuyaNljzvIjMZ4vjMvGX9T3bxCm-5ax2n0wMWPNdKU"/>
            <a href="https://www.linkedin.com/in/vic-pangilinan-3abb7615" target="_blank" className='w-[2em] h-[2em]' rel="noreferrer"><img className='object-fill w-6 h-6' alt="" src={require('../assets/social media/icons8-linkedin-50.png')}/></a>
          </div>
          <div className='w-[300px]'>
            <p className='text-[18px] font-[700] text-secondaryText'>Vic Pangilinan</p>
            <p className='text-[14px] font-semibold text-secondaryText'>Managing Director @ 2in1 Promotions & VA Solutions</p>
            <Divider  style={{ background: 'whitesmoke' }} /> 
            <p className='text-[12px] font-semibold pt-3 text-secondaryText'>With more than 20 years of experience in the promotional and customer service industry mainly focusing on Virtual Assistance Solutions, I've had the privilege of working with a diverse range of clients, from startups to established brands.</p>
          </div>
        </div>
        
      </div>
      <div className='h-[80vh] overflow-y-scroll p-5 lg:w-[60%] blog-scroll'>
        <div className='snap-start'>
          {Post.Post1} 
        </div>
        <Divider  style={{ background: 'whitesmoke' }} /> 
        <div className='snap-start'>
          {Post.Post2} 
        </div>
        <Divider  style={{ background: 'whitesmoke' }} /> 
        <div className='snap-start'>
          {Post.Post3} 
        </div>
      </div> 
      </div>
    </>
  )
}
