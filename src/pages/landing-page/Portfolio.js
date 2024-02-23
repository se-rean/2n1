import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import PageNumber from '../../components/PageNumber';
import HeaderText from '../../components/HeaderText';
import Swipper from '../../components/Swipper';
import Modal from '../../components/Dialog';

function Portfolio() {

  const filter = [
    { label: 'All', value: 'all' },
    { label: 'Virtual Assistance', value: 'Virtual Assistance' },
    { label: 'Web Development', value: 'Web Development' },
    { label: 'Digital Marketing', value: 'Digital Marketing' }, 
  ]

  const content = [
    { type: 'Virtual Assistance', src: require('../../assets/BLOG POST-1.png'), title: 'BLOG POST', subTitle: 'asdasd', row:2},
    { type: 'Virtual Assistance', src: require('../../assets/BLOG POST-2.png'), title: 'LOGO CREATION', subTitle: 'asdasd', row: 2 },
    { type: 'Virtual Assistance', src: require('../../assets/LOGO CREATION.png'), title: 'LOGO CREATION', subTitle: 'asdasd', row: 2 },
    { type: 'Virtual Assistance', src: require('../../assets/PORTFOLIO-1.png'), title: 'Content Creation', subTitle: 'asdasd', row: 2 },
    { type: 'Web Development', src: require('../../assets/_2in1- WEB DEVELOPMENT.png'), title: 'asdasd', subTitle: 'dsad',row: 2 }, 
    { type: 'Web Development', src: require('../../assets/_2in1- WEB DEVELOPMENT (1).png'), title: 'asdasd', subTitle: 'dsad',row: 2 },  
    { type: 'Digital Marketing', src: 'https://images.unsplash.com/photo-1516617442634-75371039cb3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww', title: 'asdasd', subTitle: 'dsad',row: 2 }, 
    { type: 'Digital Marketing', src: 'https://images.unsplash.com/photo-1516617442634-75371039cb3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww', title: 'asdasd', subTitle: 'dsad',row: 2 }, 
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
          <HeaderText text="Showcasing Success: A Portfolio of Achievements and Expertise. Explore our journey, discover our impact, and witness the excellence that defines us. Your vision, our commitment – a portfolio that speaks volumes." />
          <div className='flex gap-5 '>
            {
              filter.map((f, index) => (
                <div key={index}>
                <button key={f.value} onClick={() => handleFilter(f.value)} className={`hover:duration-300 hover:bg-card1 px-4 ${activeFilter === f.value ? 'bg-card1 text-primary': ''} py-[7px] hover:text-primary font-[500] text-[14px]`}>
                  {f.label}
                </button>
                </div>
              ))
            }
          </div>

          <div className='flex lg:w-[900px] flex-col w-full gap-5 mt-14 '>
            <div class=" gap-4   h-[70%] portfolio">
              {/* <Swipper> */}
             {
               filteredContent.map((c, index) => ( 
                    <div key={index} className={`relative portfolio-container mt-2 cursor-pointer overflow-hidden  h-full w-full animate__animated  animate__fadeInLeft `}>
                      <img className='w-full h-[100%] object-fill' src={c.src} alt=''  loading="lazy"/>
                      <div
                        className='flex flex-col absolute h-[7rem] bg-primary bottom-0 w-[30vh] py-4 justify-start lg:justify-center px-5 text-start portfolio-content'>
                        <p className='text-[22px] w-full font-[700] text-primaryText'>{c.title}</p>
                        <p className='mt-[-10px]'>{c.subTitle}</p>
                      </div>
                    </div> 
               ))
             }
             {/* </Swipper>  */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Portfolio
