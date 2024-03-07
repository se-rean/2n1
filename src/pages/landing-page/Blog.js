import React, { memo } from 'react'
import HoverButton from '../../components/HoverButton'
import Header from '../../components/Header'
import HeaderText from '../../components/HeaderText'
import { BlogData } from '../../constant/Data'
import { useNavigate } from 'react-router-dom'
import AnimateWrapper from '../../routes/AnimateWrapper'
function Blog() {
  const navigate = useNavigate()

  const handleNavigate = (link) => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    navigate(link)
  }

  return (
    <div className='content-container'>
      <Header text="BLOG"/>
      <div className='pt-10 pb-10 lg:w-[1000px] gap-5 flex flex-col'>
        <p className='text-[16px]  text-secondaryText'>
          06
        </p>
        {/* <p className='pb-[40px] text-[20px] font-[600] '></p> */}
        {/* <HeaderText text="Caucibus tortor sed. In tristique ipsum fermentum diam lorem est donec." /> */}
        
        <div className='flex flex-col w-full  gap-10'>
          {
            BlogData.map((c, index) => ( 
                <div key={index} className='flex flex-col justify-center md:h-[480px] h-full lg:w-[100%] overflow-hidden'>
                  <p className='text-[18px] text-[#62728f]'>{c.date}</p> 
                  <div className='flex gap-7 flex-col  md:flex-row'>
                    <div className='flex flex-col gap-5  md:w-[50%]'>
                      <p onClick={() => navigate(`/blog#${c.id}`)} className=' text-[22px]  text-secondaryText font-[800] cursor-pointer hover:underline hover:underline-offset-2'>{c.title}</p>
                      <p className='text-[16px] text-center lg:text-left lg:text-[100%] lg:w-full text-secondaryText'>{c.desc}</p> 
                    </div>
                    <div className='shadow-md shadow-cyan-500/50 rounded-lg cursor-pointer overflow-hidden w-full h-full relative '> 
                      <img onClick={() => navigate(`/blog#${c.id}`)} className='hover-images w-full h-full object-fit' src={c.src} alt=''/> 
                    </div>  
                  </div>
                </div>  
            ))
          }
        </div>
        <HoverButton onClick={() => handleNavigate(`/blog`)} title="All Story"/>
      </div> 
    </div>
  )
}

export default memo(Blog)
