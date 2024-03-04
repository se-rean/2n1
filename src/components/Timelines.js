import React from 'react'
import { timelineData } from '../constant/Data'
import AnimateWrapper from '../routes/AnimateWrapper'
function Timelines() {
 
  return (

    <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-800 before:to-transparent">
      {
        timelineData.map((t, index) => ( 
            <div class="timeline  relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"> 
            
              <div class="flex items-center justify-center  rounded-full border border-white  bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <div className='bg-primary rounded-full w-10 h-10 flex justify-center items-center right-[-20px] '>
                <div className='border-2 circle w-8 h-8 border-gray-500 rounded-full flex justify-center items-center animate-pulse duration-300'> 
                </div>
                </div> 
              </div> 
              
              <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-1 rounded  ">
              <AnimateWrapper
            variant={{
              hidden: { opacity:0, x:-100 },
              visible: { opacity:1, x:0 }
            }}
            transition={{ 
              duration: 0.5,
              delay: index/5
            }}
            once={true}
          >
                <div className="shadow-md shadow-cyan-500/50 rounded-lg box-border   p-4 drop-shadow-2xl hover:drop-shadow-xl  bg-gradient-to-b  bg-card2 flex justify-center  flex-col items-left"> 
                  <p className='text-[15px] space-x-2 font-[500] tracking-[4px]  text-timelineText'>{t.date}</p>
                
                  <p className='text-[16px] font-[700]   text-timelineText '>{t.title}</p> 
                  <ul>
                    {
                      t.desc.map((d, i) => (
                        <li className=' text-timelineText bullet mx-2' key={d}>{d}</li>
                      ))
                    }
                  </ul>
                </div>
                </AnimateWrapper>
              </div>
             
            </div> 
        ))
      } 
    </div>


    // <div className="w-full relative timeline"> 
     
  
    // </div> 
  )
}

export default Timelines
