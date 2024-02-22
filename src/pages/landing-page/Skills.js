import React, { useEffect } from 'react'
import Header from '../../components/Header'
import ProgressBar from '../../components/ProgressBar'
import PageNumber from '../../components/PageNumber'
import HeaderText from '../../components/HeaderText'

function Skills() {

  const skills = [
    {  title: 'PHOTOSHOP', percentage: '50%' },
    {  title: 'MARKETING', percentage: '80%' },
    {  title: 'AFFINITY', percentage: '20%' },
    {  title: 'CODING', percentage: '50%' },
    {  title: 'DEVELOPING', percentage: '10%' },
    {  title: 'JAVA', percentage: '50%' }
  ]

  useEffect(() => {
   

    skills.forEach(i => {
      const prog = document.getElementById(i.title);
     
      setTimeout(frame, 2000);
      function frame(){ 
          prog.style.width = i.percentage;
          // prog.innerHTML = i.percentage + "%";
     
      }
    })
    
  })

  return (
    <div className='flex flex-col pl-3 pr-3 pb-20 pt-10 bg-[#1b212c] lg:justify-center lg:items-center'>
       <Header text="SKILLS"/>
       <div className='pt-10 pb-10 lg:w-[900px]'>
          <PageNumber page="07" /> 
          <HeaderText text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis"/>
            {
              skills.map(i => (
                <ProgressBar title={i.title}/>
              ))
            }
       </div>
    </div>
  )
}

export default Skills
