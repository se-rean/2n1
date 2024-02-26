import React from 'react'
import HoverButton from '../../components/HoverButton'
import Header from '../../components/Header'
import HeaderText from '../../components/HeaderText'
import { BlogData } from '../../constant/Data'

function Blog() {

  return (
    <div className='content-container'>
      <Header text="BLOG"/>
      <div className='pt-10 pb-10 lg:w-[900px] '>
        <p className='text-[16px]'>
          06
        </p>
        <p className='pb-[40px] text-[20px] font-[600] '></p>
        <HeaderText text="Caucibus tortor sed. In tristique ipsum fermentum diam lorem est donec." />
        <div className='lg:flex gap-5 '>
          {
            BlogData.map((c, index) => (
              <div key={index} className='my-10 flex flex-col justify-center h-[650px] overflow-hidden'>
                <p className='text-[18px] text-[#62728f]'>{c.date}</p>
                <p className='pb-[40px] text-[22px] font-[800] cursor-pointer'>{c.title}</p>
                <div className='cursor-pointer overflow-hidden w-full h-[350px]'>
                  <img className='hover-images w-full h-full' src={c.src} alt=''/>
                </div> 
                <p className='mt-10 text-ellipsis'>{c.desc}</p> 
              </div>
            ))
          }
        </div> 
        <HoverButton title="All Story"/>
      </div> 
    </div>
  )
}

export default Blog
