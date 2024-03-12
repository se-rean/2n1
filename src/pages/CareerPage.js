import React, { useEffect, useState } from 'react'
import HeaderText from '../components/HeaderText'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import HoverButton from '../components/HoverButton'

function CareerPage() {
 
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => { 
    setOpen(open === value ? 0 : value);
  }

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [])
  return (
    <div className='content-container flex justify-center items-center bg-secBG pb-10'>
      <div className='w-[100%] flex justify-center items-center flex-col gap-5 pt-[10rem]'>
        <h1 className='text-[20px]  lg:tracking-wide font-[600] lg:text-[35px] lg:font-[700] lg:leading-[2rem] text-primaryText'>Join Our Team</h1>
        <p className='md:w-[40%] tracking-tighter text-center text-pretty text-secondaryText'>Become a part of our team and begin your journey to success now! We aim to build a culture that encourages innovation and teamwork. We're searching for    enthusiastic individuals who align with our values.
        </p>
        <p className='text-center text-pretty md:w-[40%] text-secondaryText  tracking-tighter'>
        We offer our team members the assistance and tools necessary for their growth and prosperity.
        </p>
        <p className='text-center text-pretty md:w-[40%] text-secondaryText  tracking-tighter'>Don't hesitate – be a part of our successful team and embark on a rewarding career in virtual assistant services. Explore our job openings to discover the perfect match for your skills.
        </p>
      </div>
      <div id='why-work-with-us' className='flex flex-col gap-10 pt-20 justify-center items-center'>
        <h1 className='text-[20px]  lg:tracking-wide font-[600] lg:text-[35px] lg:font-[700] lg:leading-[2rem] text-primaryText'>Why Work with Us</h1>
        <div className='flex flex-wrap justify-center gap-10 w-[70%]'>
          <div className='w-[20rem] h-[20rem]  flex justify-start items-center flex-col gap-2'>
            <img className='w-[5rem] h-[5rem]' src={require('../assets/career/icons8-growth-64.png')} alt=''/>
            <p className='text-[18px] text-primaryText font-bold tracking-wide'>Exciting Opportunities</p>
            <p className='text-center text-pretty text-secondaryText  tracking-tighter'>At our company, you'll find exciting opportunities to learn and grow. We believe in providing a dynamic environment where every team member can thrive and reach their full potential</p>
          </div>

          <div className='w-[20rem] h-[20rem]  flex justify-start items-center flex-col gap-2'>
            <img className='w-[5rem] h-[5rem]' src={require('../assets/career/icons8-collaboration-80.png')} alt=''/>
            <p className='text-[18px] text-primaryText font-bold tracking-wide'>Supportive Team Culture</p>
            <p className='text-center text-pretty text-secondaryText  tracking-tighter'>
            We value teamwork and collaboration. Working with us means being part of a supportive culture where your ideas are heard, and you have the resources to succeed.
</p>
          </div>

          <div className='w-[20rem] h-[20rem]  flex justify-start items-center flex-col gap-2'>
            <img className='w-[5rem] h-[5rem]' src={require('../assets/career/icons8-star-50.png')} alt=''/>
            <p className='text-[18px] text-primaryText font-bold tracking-wide'>Employee Development</p>
            <p className='text-center text-pretty text-secondaryText  tracking-tighter'>We are committed to the growth of our employees. You'll have access to ongoing training and development opportunities, ensuring that you stay ahead in your career.
</p>
          </div>

          <div className='w-[20rem] h-[20rem]  flex justify-start items-center flex-col gap-2'>
            <img className='w-[5rem] h-[5rem]' src={require('../assets/career/icons8-people-50.png')} alt=''/>
            <p className='text-[18px] text-primaryText font-bold tracking-wide'>Innovative Environment</p>
            <p className='text-center text-pretty text-secondaryText  tracking-tighter'>Joining our team means stepping into an innovative environment. We encourage creative thinking and provide the tools and freedom to explore new ideas and solutions.</p>
          </div>

          <div className='w-[20rem] h-[20rem]  flex justify-start items-center flex-col gap-2'>
            <img className='w-[5rem] h-[5rem]' src={require('../assets/career/icons8-ribbon-64 (1).png')} alt=''/>
            <p className='text-[18px] text-primaryText font-bold tracking-wide'>Positive Impact</p>
            <p className='text-center text-pretty text-secondaryText  tracking-tighter'>Work with us to make a positive impact. We are dedicated to making a difference, not only in the success of our company but also in the lives of our employees and the communities we serve.</p>
          </div>
           
        </div>
      </div>
      <div  id='openings' className='flex flex-col gap-10 pt-20 md:justify-center md:items-center'>
        <h1 className='text-[20px]  lg:tracking-wide font-[600] lg:text-[35px] lg:font-[700] lg:leading-[2rem] text-primaryText underline underline-offset-8 '>JOB VACANCIES</h1>
        <div className='flex md:w-[50%] flex-row flex-wrap'>
          <div className='w-full'>
            <Accordion icon={<Icon id={1} open={open} />} open={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)}> 
                <span  className={` ${open === 1 ? 'text-primaryText' : 'text-secondaryText'} hover:text-primaryText`}>VIRTUAL ASSISTANTS</span>
              </AccordionHeader>
              <AccordionBody>
                <div  id='1'  className='w-full flex flex-col p-5'>
                <div className='flex flex-col md:flex-row gap-5'>
                  <img className='w-full md:w-[50%] h-[20rem] object-fit' src={require('../assets/career/Career page- Virtual Assistant.png')} alt=''/>
                  <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText md:w-[40%] h-full'>Unlock your potential as a Virtual Assistant with us! Are you ready to thrive in a dynamic work environment, managing tasks with efficiency and precision? Join our team and embark on a journey where your skills meet exciting opportunities. Ready to take the first step?
                  </p> 
                </div>
                 
                <p className='pt-5 text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>Qualifications for Virtual Assistant Position:</p>
                <ul className='px-10 flex flex-col gap-5 list-disc'>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600] '>
                  <span className='text-primaryText'>Strong organizational skills: </span> 
                     Proven ability to manage tasks efficiently, prioritize assignments, and meet deadlines in a fast-paced virtual environment. 
                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                   <span className='text-primaryText'>Excellent communication: </span> 
                     Clear and concise communication skills, both written and verbal, to effectively interact with clients and team members. 
                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                   <span className='text-primaryText'>Tech-savvy: </span> 
                    Proficiency in various virtual collaboration tools, and communication platforms, and a good understanding of office software to streamline tasks.

                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                   <span className='text-primaryText'>Time management: </span> 
                    Demonstrated ability to multitask and handle diverse responsibilities while maintaining attention to detail and accuracy.

                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                   <span className='text-primaryText'> Problem-solving: </span> 
                   Problem-solving: Resourceful mindset with the capability to identify and resolve challenges independently, ensuring smooth workflow and client satisfaction.

                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                  <span className='text-primaryText'>Confidentiality: </span> 
                  Upholding a high level of confidentiality and discretion when handling sensitive information or client data.
                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                  <span className='text-primaryText'>Adaptability: </span> 
                  Ability to quickly adapt to new tools, processes, and changing priorities in a remote work setting. 
                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                  <span className='text-primaryText'>Proactive mindset:</span> Taking initiative in anticipating needs, suggesting improvements, and contributing positively to the overall efficiency of the virtual assistant role.
                  </li>
                </ul>
                <p className='pt-5 text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>If you meet these qualifications, we invite you to apply and be a valuable part of our virtual assistant team!</p>
                </div> 
                <div className='flex items-center justify-end'>
                  <a href='https://forms.gle/oRGuFhWUuHdc9jEy9' target='_blank' rel='noreferrer'><HoverButton title="Apply Now"/></a>
                </div> 
              </AccordionBody>
            </Accordion>
          </div>
          <div className='w-full'>
            <Accordion icon={<Icon id={2} open={open} />} open={open === 2}>
              <AccordionHeader onClick={() => handleOpen(2)}> 
                <span  className={` ${open === 2 ? 'text-primaryText' : 'text-secondaryText'} hover:text-primaryText`}>WEB DEVELOPER</span>
              </AccordionHeader>
              <AccordionBody>
              <div  id='2' className='w-full flex flex-col p-5'>
                <div className='flex flex-col md:flex-row gap-5'>
                  <img className='w-full md:w-[50%] h-[20rem] object-fit' src={require('../assets/career/Career page- Web Developer.png')} alt=''/>
                  <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText md:w-[30%]'>Are you a skilled Web Developer ready to make a big impact? Join our team and bring your creative expertise to life! We're on the lookout for passionate individuals like you to contribute to innovative web solutions. Ready to take your coding talents to the next level? 
                  </p> 
                </div>
                  
                <p className='pt-5 text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>Qualifications for Web Developer Position:</p>
                <ul className='px-10 flex flex-col gap-5 list-disc'>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600] '>
                  <span className='text-primaryText'>Proficient in HTML, CSS, and JavaScript: </span> 
                  Solid foundation in front-end development languages for creating visually appealing and responsive web interfaces.

                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                   <span className='text-primaryText'>Experience with backend technologies: </span> 
                   Familiarity with server-side scripting languages (e.g., Node.js, Python, Ruby) and database management systems for seamless functionality.
                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                   <span className='text-primaryText'>Responsive design skills: </span> 
                   Ability to create websites that adapt to various devices and screen sizes, ensuring an optimal user experience.
                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                   <span className='text-primaryText'>Problem-solving abilities: </span> 
                   Strong troubleshooting skills to identify and resolve issues, coupled with a proactive approach to optimizing website performance.
                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                   <span className='text-primaryText'>Familiarity with version control systems: </span> 
                   Experience using Git or other version control tools to manage code changes and collaborate effectively with a development team.

                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                  <span className='text-primaryText'>Knowledge of web development frameworks: </span> 
                  Understanding and proficiency in utilizing frameworks such as React, Angular, or Vue.js to streamline development processes.

                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                  <span className='text-primaryText'>Attention to detail: </span> 
                  Commitment to writing clean, well-documented code and conducting thorough testing to deliver high-quality web applications.

                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                  <span className='text-primaryText'>Continuous learning mindset:</span> Keeping up-to-date with industry trends, emerging technologies, and best practices to enhance and expand technical skills.
                  </li>
                </ul>
                <p className='pt-5 text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>If you meet these qualifications, we welcome you to apply and be a key player in our dynamic web development team!</p>
                </div> 
                <div className='flex items-center justify-end'>
                  <a href='https://forms.gle/oRGuFhWUuHdc9jEy9' target='_blank' rel='noreferrer'><HoverButton title="Apply Now"/></a>
                </div> 
              </AccordionBody>
            </Accordion>
          </div>
          <div className='w-full'>
            <Accordion icon={<Icon id={3} open={open} />} open={open === 3}>
              <AccordionHeader onClick={() => handleOpen(3)}> 
                <span className={` ${open === 3 ? 'text-primaryText' : 'text-secondaryText'} hover:text-primaryText`}>DIGITAL MARKETING SPECIALIST</span>
              </AccordionHeader>
              <AccordionBody>
              <div  id='3' className='w-full flex flex-col p-5'>
                  
                  <div className='flex flex-col md:flex-row gap-5'>
                    <img className='w-full md:w-[50%] h-[20rem] object-fit' src={require('../assets/career/Career page- Digital Marketing Specialist.png')} alt=''/>
                    <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText md:w-[30%]'>Ready to make waves in the digital world? Join us as a Digital Marketing Specialist and take the lead in creating impactful online campaigns! Do you have the skills to elevate our brand presence and drive results in the ever-evolving digital landscape?
                    </p> 
                  </div>
                <p className='pt-5 text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>Qualifications for Digital Marketing Specialist Position:</p>
                <ul className='px-10 flex flex-col gap-5 list-disc'>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600] '>
                  <span className='text-primaryText'>Strategic Marketing Skills: </span> 
                  Proven experience in developing and implementing digital marketing strategies that align with business objectives and drive engagement.

                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                   <span className='text-primaryText'>Proficiency in SEO and SEM: </span> 
                   In-depth knowledge of search engine optimization (SEO) and search engine marketing (SEM) techniques to enhance online visibility and attract target audiences.
                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                   <span className='text-primaryText'>Social Media Management: </span> 
                   Expertise in managing and optimizing social media platforms for brand awareness, audience engagement, and lead generation.
                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                   <span className='text-primaryText'>Email Marketing Mastery: </span> 
                   Strong understanding of email marketing best practices, including segmentation, automation, and effective content creation to nurture leads and foster customer loyalty.
                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                   <span className='text-primaryText'>Analytics and Data Interpretation: </span> 
                   Ability to analyze digital marketing data, extract meaningful insights, and adjust strategies accordingly to maximize campaign performance.

                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                  <span className='text-primaryText'>Content Creation and Copywriting: </span> 
                  Exceptional writing skills for creating compelling and effective content across various digital channels, ensuring brand consistency and resonance with the target audience.

                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                  <span className='text-primaryText'>Experience in SMS Marketing:  </span> 
                  Proficiency in designing and executing SMS marketing campaigns, utilizing best practices for customer engagement and conversion.
                  </li>
                  <li className='tracking-wide text-[14px] text-start text-pretty text-secondaryText font-[600]'>
                  <span className='text-primaryText'>Adaptability and Innovation:</span>  Willingness to stay updated on industry trends, explore new digital marketing tools, and adapt strategies to meet evolving market demands.
                  </li>
                </ul>
                <p className='pt-5 text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>If you possess these qualifications, we invite you to apply and be a driving force in our dynamic digital marketing team!</p>
                </div> 
                <div className='flex items-center justify-end'>
                  <a href='https://forms.gle/oRGuFhWUuHdc9jEy9' target='_blank' rel='noreferrer'><HoverButton title="Apply Now"/></a>
                </div> 
              </AccordionBody>
            </Accordion>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default CareerPage
