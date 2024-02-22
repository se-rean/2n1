import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import PageNumber from '../../components/PageNumber';
import HeaderText from '../../components/HeaderText';
import Swipper from '../../components/Swipper';

function Portfolio() {

  const filter = [
    { label: 'All', value: 'all' },
    { label: 'Text', value: 'text' },
    { label: 'Video', value: 'video' },
    { label: 'Image', value: 'image' }
  ]

  const content = [
    { type: 'text', src: 'https://2in1.com.au/wp-content/uploads/2023/05/Collection2-1024x512.jpg', title: 'asdasd', subTitle: 'asdasd', row:2},
    { type: 'text', src: 'https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww', title: 'asdasd', subTitle: 'asd', row: 4},
    { type: 'video', src: 'https://images.unsplash.com/photo-1631631480669-535cc43f2327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww', title: 'asdasd', subTitle: 'asdasd', row: 2 },
    { type: 'image', src: 'https://images.unsplash.com/photo-1516617442634-75371039cb3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww', title: 'asdasd', subTitle: 'dsad',row: 2 }, 
  ]

  const [filteredContent, setFilteredContent] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    setFilteredContent(content)
  }, [])

  const handleFilter = (filter) => {
    setFilteredContent(contents => {
      if (filter === 'all') return content
      return content.filter(c => c.type === filter)
    })
    setActiveFilter(filter)
  }

  return (
    <div className='flex flex-col pl-3 pr-3 pb-20 pt-10 bg-[#1b212c] lg:justify-center lg:items-center'>
      <Header text="PORTFOLIO" />
        <div className='pt-10 pb-10 lg:w-[900px]'>
          <PageNumber page="03" /> 
          <HeaderText text="Fringilla sodales dolor de art sagittis ultrices felis, faucibus tortor sed. In tristique ipsum fermentum diam lorem est donec" />
          <div className='flex gap-5 '>
            {
              filter.map((f, index) => (
                <div key={index}>
                <button key={f.value} onClick={() => handleFilter(f.value)} className={`hover:duration-300 hover:bg-card1 px-5 ${activeFilter === f.value ? 'bg-card1 text-primary': ''} py-[7px] hover:text-primary font-[500] text-[14px]`}>
                  {f.label}
                </button>
                </div>
              ))
            }
          </div>

          <div className='flex flex-col w-full gap-5 mt-14 overflow-hidden'>
            <div class=" gap-4 w-full h-[25rem] ">
              <Swipper>
             {
               filteredContent.map((c, index) => ( 
                    <div key={index} className={`relative portfolio-container cursor-pointer overflow-hidden  h-full w-full animate__animated  animate__fadeInLeft `}>
                      <img className='w-full h-[100%]' src={c.src} alt=''  loading="lazy"/>
                      <div
                        className='flex flex-col absolute bg-primary bottom-0 w-[15vh] py-4 justify-start  px-5 text-start portfolio-content'>
                        <p className='text-[22px] font-[700] text-primaryText'>{c.title}</p>
                        <p className='mt-[-10px]'>{c.subTitle}</p>
                      </div>
                    </div> 
               ))
             }
             </Swipper>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Portfolio
