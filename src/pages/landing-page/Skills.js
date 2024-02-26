import React, { useEffect } from 'react'
import Header from '../../components/Header'
import ProgressBar from '../../components/ProgressBar'
import PageNumber from '../../components/PageNumber'
import HeaderText from '../../components/HeaderText'
import { skillsData } from '../../constant/Data'
function Skills() {

  useEffect(() => {
    skillsData.forEach(i => {
      const prog = document.getElementById(i.title);
    setTimeout(frame, 2000);
    function frame(){ 
        prog.style.width = i.percentage;
        // prog.innerHTML = i.percentage + "%";
      }
    })
  })

  return (
    <div className='content-container'>
       <Header text="SKILLS"/>
       <div className='pt-10 pb-10 lg:w-[900px]'>
          <PageNumber page="07" /> 
          <HeaderText text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis"/>
            {
              skillsData.map(i => (
                <ProgressBar title={i.title}/>
              ))
            }
       </div>
    </div>
  )
}

export default Skills
