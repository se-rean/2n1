import React, { memo, useEffect, useState } from 'react'
import Header from '../../components/Header';
import PageNumber from '../../components/PageNumber';
import HeaderText from '../../components/HeaderText';
import Swipper from '../../components/Swipper';
import Modal from '../../components/Dialog';
import { PortfolioData, portfolioFilter } from '../../constant/Data';
import HoverButton from '../../components/HoverButton';
import { useNavigate } from 'react-router-dom';
import AnimateWrapper from '../../routes/AnimateWrapper';
function Portfolio() {
  const navigate = useNavigate()
  const [filteredContent, setFilteredContent] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all')
  
  useEffect(() => {
    setFilteredContent(PortfolioData.slice(0,6))
  }, [])

  const handleFilter = (filter) => {
    setFilteredContent(contents => {
      if (filter === 'all') return PortfolioData.slice(0,6)
      return PortfolioData.filter(c => c.type === filter).slice(0, 4)
    })
    setActiveFilter(filter) 
  }

  return (
    <div className='content-container'>
      <Header text="PORTFOLIO" />
        <div className='pt-10 pb-10 lg:w-[900px]'>
          <PageNumber page="03" /> 
          <HeaderText width="100%" text="Showcasing Success: A Portfolio of Achievements and Expertise. Explore our journey, discover our impact, and witness the excellence that defines us. Your vision, our commitment – a portfolio that speaks volumes." />
          <div className='flex gap-5 flex-wrap'>
            {
              portfolioFilter.map((f, index) => (
                <AnimateWrapper
                variant={{
                  hidden: { opacity:0, x:-100 },
                  visible: { opacity:1, x:0 }
                }}
                transition={{ 
                  duration: 0.5,
                  delay: index/2
                }}
                once={true}
              >
                <div key={index}>
                <button key={f.value} onClick={() => handleFilter(f.value)} className={`hover:duration-300 hover:bg-card1 px-4 ${activeFilter === f.value ? 'bg-card1 text-tertiaryText ': ' text-secondaryText'} py-[7px] hover:text-primary font-[500] text-[14px]`}>
                  {f.label}
                </button>
                </div>
                </AnimateWrapper>
              ))
            }
          </div>
          <AnimateWrapper>
          <div className='flex lg:w-[900px] flex-col w-full gap-5 mt-14 '>
            <div class=" gap-4   h-[70%] portfolio">
              {/* <Swipper> */}
             {
               filteredContent.map((c, index) => (
                      <div className={`relative portfolio-container mt-2 cursor-pointer overflow-hidden  h-full w-full animate__animated  animate__fadeInLeft  shadow-cyan-500/50 rounded-lg`}> 
                        <img className='shadow-md  w-full h-[100%] object-fill opacity-[70%]  hover-images' src={c.src} alt='' /> 
                        {/* <div
                          className='flex flex-col absolute h-[7rem] bg-primary bottom-0 w-[30vh] py-4 justify-start lg:justify-center px-5 text-start portfolio-content'>
                          <p className='text-[22px] w-full font-[700] text-primaryText'>{c.title}</p>
                          <p className='mt-[-10px]'>{c.subTitle}</p>
                        </div> */}
                      </div>  
               ))
             } 
             {/* </Swipper>  */}
            </div>
            { activeFilter && activeFilter !== "all" && <HoverButton onClick={() => navigate(`/portfolio?${activeFilter}`)} title="View All" /> }
          </div>
          </AnimateWrapper> 
        </div> 
    </div>
  )
}

export default memo(Portfolio)
