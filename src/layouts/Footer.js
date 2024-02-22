import React from 'react'
import Header from '../components/Header'

function Footer() {
  const links = [
    { title: 'facebook', img: 'https://2in1.com.au/wp-content/uploads/2023/07/NEWCIRCLELOGOwithQR-TR.png' },
    { title: 'facebook', img: 'https://2in1.com.au/wp-content/uploads/2023/07/NEWCIRCLELOGOwithQR-TR.png' },
    { title: 'facebook', img: 'https://2in1.com.au/wp-content/uploads/2023/07/NEWCIRCLELOGOwithQR-TR.png' },
    { title: 'facebook', img: 'https://2in1.com.au/wp-content/uploads/2023/07/NEWCIRCLELOGOwithQR-TR.png' }
  ]
  return (
    <div className='w-full pt-5 h-[26vh] justify-center items-center flex flex-col gap-2'>
       <div className='w-full flex justify-center items-center gap-7'>
       {
        links.map((l, index) => (
          <img key={index} className='w-10 h-10' src={l.img} alt=''/>
        ))
       }
      </div>
      <div className='w-full flex  justify-center items-center gap-7'> 
        <Header text={`@${new Date(Date.now()).getFullYear()} software solutions`}/>
      </div>
    </div>
  )
}

export default Footer
