import React from 'react'
import HoverButton from '../../components/HoverButton'
import Header from '../../components/Header'
import HeaderText from '../../components/HeaderText'

function Blog() {

  const content = [
    { title: 'Hundreds of thousands a still more glorious nights around art table', date: 'ovember 28, 2019', src: 'https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80', desc: 'Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global ...' },
    { title: 'Preserve and cherish that pale blue dot are creatures of the cosmos light years', date: 'November 28, 2019', src: 'https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80', desc: 'Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global ...' },  
    { title: 'Preserve and cherish that pale blue dot are creatures of the cosmos light years', date: 'November 28, 2019', src: 'https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80', desc: 'Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global ...' }, 
  ]
  return (
    <div className='flex flex-col pl-3 pr-3 pb-20 pt-10 lg:justify-center lg:items-center'>
      <Header text="BLOG"/>
      <div className='pt-10 pb-10 lg:w-[900px] '>
        <p className='text-[16px]'>
          06
        </p>
        <p className='pb-[40px] text-[20px] font-[600] '></p>
        <HeaderText text="Caucibus tortor sed. In tristique ipsum fermentum diam lorem est donec." />
        <div className='lg:flex gap-5 '>
          {
            content.map((c, index) => (
              <div className='my-10 flex flex-col justify-center h-[650px] overflow-hidden'>
                <p className='text-[18px] text-[#62728f]'>{c.date}</p>
                <p className='pb-[40px] text-[22px] font-[800] cursor-pointer'>{c.title}</p>
                <div className='cursor-pointer overflow-hidden w-full h-[350px]'>
                  <img className='hover-images w-[20rem] h-[20rem]' src={c.src} alt=''/>
                </div> 
                <p className='mt-10 text-ellipsis '>{c.desc}</p> 
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
