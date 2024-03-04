import React, { memo } from 'react'
import HoverButton from '../../components/HoverButton'
import Header from '../../components/Header'
import HeaderText from '../../components/HeaderText'
import { BlogData } from '../../constant/Data'
import { useNavigate } from 'react-router-dom'
import AnimateWrapper from '../../routes/AnimateWrapper'
function Blog() {
  const navigate = useNavigate()
  return (
    <div className='content-container'>
      <Header text="BLOG"/>
      <div className='pt-10 pb-10 lg:w-[900px] gap-5 flex flex-col'>
        <p className='text-[16px]  text-secondaryText'>
          06
        </p>
        {/* <p className='pb-[40px] text-[20px] font-[600] '></p> */}
        {/* <HeaderText text="Caucibus tortor sed. In tristique ipsum fermentum diam lorem est donec." /> */}
        <AnimateWrapper 
                variant={{
                  hidden: { opacity:0, x:-100 },
                  visible: { opacity:1, x:0 }
                }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.25
                }}
                once={true}
              > 
        <div className='lg:flex flex-wrap w-full lg:w-[1300px]'>
          {
            BlogData.map((c, index) => (
            
                <div key={index} className='mx-2 flex flex-col justify-center h-[650px] lg:w-[30%] overflow-hidden'>
                  <p className='text-[18px] text-[#62728f]'>{c.date}</p>
                  <p onClick={() => navigate(`/blog#${c.id}`)} className='pb-[40px] text-[22px]  text-secondaryText font-[800] cursor-pointer hover:underline hover:underline-offset-2'>{c.title}</p>
                  <div className='shadow-md shadow-cyan-500/50 rounded-lg cursor-pointer overflow-hidden w-full h-[350px] relative blogpost'>
                    <p className='mt-10 text-ellipsis  text-[14px] text-secondaryText absolute z-10 bottom-0 bg-primary blog-message'>{c.desc}</p> 
                    <img className="" onClick={() => navigate(`/blog#${c.id}`)} className='hover-images w-full h-full' src={c.src} alt=''/>
                    
                  </div> 
                  
                </div> 
         
            ))
          }
        </div>  
        </AnimateWrapper>
        <HoverButton onClick={() => window.location = `/blog`} title="All Story"/>
      </div> 
    </div>
  )
}

export default memo(Blog)
