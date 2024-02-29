import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import PageNumber from '../../components/PageNumber';
import HeaderText from '../../components/HeaderText';
import Swipper from '../../components/Swipper';
import Modal from '../../components/Dialog';
import { PortfolioData, portfolioFilter } from '../../constant/Data';
import HoverButton from '../../components/HoverButton';
import { useNavigate } from 'react-router-dom';
function Portfolio() {
  const navigate = useNavigate()
  const [filteredContent, setFilteredContent] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all')
  
  useEffect(() => {
    setFilteredContent(PortfolioData.slice(0,4))
  }, [])

  const handleFilter = (filter) => {
    setFilteredContent(contents => {
      if (filter === 'all') return PortfolioData.slice(0,4)
      return PortfolioData.slice(0,4).filter(c => c.type === filter)
    })
    setActiveFilter(filter)
  }

  return (
    <div className='content-container'>
      <Header text="PORTFOLIO" />
        <div className='pt-10 pb-10 lg:w-[900px]'>
          <PageNumber page="03" /> 
          <HeaderText text="Showcasing Success: A Portfolio of Achievements and Expertise. Explore our journey, discover our impact, and witness the excellence that defines us. Your vision, our commitment – a portfolio that speaks volumes." />
          <div className='flex gap-5 '>
            {
              portfolioFilter.map((f, index) => (
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
             <HoverButton onClick={() => navigate('/portfolio')} title="View All" />
             {/* </Swipper>  */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Portfolio
