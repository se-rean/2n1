import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box, 
  Toolbar,
} from '@mui/material';
import useResponsive from '../../hooks/use-responsive';
import { motion } from "framer-motion"
import Typography from '@mui/material/Typography'; 
import IconButton from '@mui/material/IconButton';
import { Menu as MenuIcon, Close, Phone, Email} from '@mui/icons-material/';
import nav from '../nav-items';
import ThemeControll from '../../components/ThemeControll';
import FloatButton from '../../components/FloatButton';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}



const customStyle = {
  fontSize: '15px',
  fontWeight: '500', 
  // padding: '15px',
  letterSpacing:'1px',
  lineHeight: '17px',
  padding:'5px 5px 5px 18px',
  paddingLeft: '10px !important',
  marginBottom: '5px', 
}

function RenderContent({type, handleToggleDrawer, handleNavLinkClick}) {
  const navigate = useNavigate()

  const [focus, setFocus] = useState()
  function handleFocus(key, id) {
    setFocus(key)
    handleToggleDrawer()
    handleNavLinkClick(id) 
  }

  const handleRedirect = (id, link) => { 
    // console.log(window.location)
    if(window.location.pathname === `/`) {
      window.location.hash = ""
      handleFocus(id, link)
    } else {
      // console.log(link)
      // window.location.hash = `${link}` 
      navigate(`/${link}`)
    }
  }

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        handleFocus(0, window.location.hash)
        window.history.replaceState("", document.title, window.location.pathname);
      }, 1000)
    }
  }, [window.location.hash])

  return (
    <ul className={`${ type === 'desktop' && 'flex' } lg:p-10`}>
      {
        nav && nav.map((i, index) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a key={index}>
              <li style={customStyle} className={`list-none hover:cursor-pointer ${ focus === index ? 'text-primaryText ' : 'text-navText'} hover:text-primaryText`} onClick={() => handleRedirect(index, i.link)} key={index}>
                  <p style={customStyle}>{i.label}</p>
              </li>
            </a> 
          ))
      }  
    </ul>
  )
}

 
export default function NavBar({
  handleToggleDrawer,
  drawerOpen = false,
  NAV_WIDTH,
  handleNavLinkClick
}) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate()

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

const isDesktop = useResponsive('up', 'xl'); 
  console.log(window.location)
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [isDesktop]);

  return (
   
    <Box className="z-20" sx={{
      flexShrink: { sm: 0 },
      position: 'fixed',
      width: '100%',
   
      elevation: 0
    }}>
        {
            isDesktop && (
              <div className='w-[100%] h-[30px]  absolute left-0 z-30 flex justify-around items-center text-sm  text-navText'>
                <p className=''>Need help or need a hand? We got a VA for that!</p>
                <div className='flex gap-4 '>  
                  <a className='hover:text-primaryText ' href='mailto:vic@2in1.com.au'><Email sx={{ width: '20px' }}/> vic@2in1.com.au</a>
                  <p><Phone sx={{ width: '20px' }}/> <a className='hover:text-primaryText' href='tel:1300 711 000'>1300 711 000</a> | <a className='hover:text-primaryText' href='tel:1300 711 000'>0411 500 700</a></p>
                  { <ThemeControll /> }
                </div>
            </div>
            ) 
        }
      { scrollPosition > 0 && isDesktop && <FloatButton /> }
     
      <AppBar sx={{ boxShadow: 0, background: `${(scrollPosition > 0 || window.location.pathname !== '/') ? "#1b212c" : "rgba(0, 0, 0, 0.01)"}`, opacity: 1, height: '100px', justifyContent: 'space-between',
      padding: '0px 10px', }} position="static">
        <Toolbar >
              <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>   
                <img onClick={() => window.location = '/'} hidden={!isDesktop && drawerOpen } className="w-[100px] fixed top-5 xl:top-10 lg:left-[12rem] cursor-pointer" alt='' src='https://2in1.com.au/wp-content/uploads/2023/07/NEWCIRCLELOGOwithQR-TR.png'/> 
              </Typography> 
                { !isDesktop && <IconButton
                  onClick={() => handleToggleDrawer()}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 1, mt: 3 ,width: '40px', height: '40px' }}
                >
                  { !drawerOpen ? <MenuIcon sx={{ width: '100px', height: '40px' }} className='h-full w-full' /> : <Close sx={{ width: '100px', height: '40px' }}/>} 
                </IconButton> }
                {
                  isDesktop ? (
              
                  <div className='flex flex-row lg:pr-[10rem] xl:mt-6'> 
                    <RenderContent handleToggleDrawer={handleToggleDrawer} handleNavLinkClick={handleNavLinkClick} type="desktop" />
                  </div> 
                  ) : 
                  <>
                  
                  {
                    drawerOpen && (
                      <motion.nav
                        animate={drawerOpen ? "open" : "closed"}
                        variants={variants}
                      >
                      <div className='animate__slideInRight'
                      style={{ 
                        position: 'fixed',
                        /* text-align: left; */
                        background: '#151c28', 
                        top: '76px',
                        left: 0,
                        width: '100%', 
                        height: '100%', 
                        'animation-duration': '0.3s',
                        overflow: 'auto',
                        'max-width': '100%',
                        display: 'flex',
                        'justify-content': 'center'
                  }}>
                        <RenderContent handleNavLinkClick={handleNavLinkClick} handleToggleDrawer={handleToggleDrawer} />
                  
                    </div>
                    </motion.nav>
                    )
                  }
                  </>  
            } 
        </Toolbar> 
      </AppBar>
    </Box>
  );
}