import React, { useEffect, useState } from 'react'
import HeaderText from '../components/HeaderText'
import { useNavigate } from 'react-router-dom'
import AnimateWrapper from '../routes/AnimateWrapper'

export default function PortfolioPage() {
  const filterData = {
    "virtual assistance": true, 
    "web development": true, 
    "digital marketing": true
  }
  const [filter, setFilter] = useState(null) 

  const renderVirtualAssistance = () => {
    return <>
      <div id="1" className='mt-10 lg:w-[900px] flex flex-col blogpost gap-10 py-10'>
        <AnimateWrapper>
        <HeaderText font-size="50px" text="VIRTUAL ASSISTANCE"/>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
          Welcome to 2in1 Promotions &amp; VA
          Solutions, where we redefine
          productivity and efficiency
          through our top-notch Virtual
          Assistance services. As your
          trusted virtual partner, we offer
          a range of solutions to
          streamline your business
          operations and allow you to focus
          on what matters most – growing
          your business.
        </p>
        </AnimateWrapper>
        <AnimateWrapper>
        <HeaderText text="Our Virtual Assistance Services Include:" />
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Administrative Support:  </span>
           From managing
          emails and scheduling appointments to
          handling routine administrative tasks, our
          virtual assistants ensure smooth day-to-
          day operations.
        </p>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Customer Support:  </span>
          Customer Support: Deliver exceptional
          customer service with our dedicated
          virtual support team, available to assist
          your customers via various
          communication channels.
        </p>
        </AnimateWrapper>
        <AnimateWrapper>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        </AnimateWrapper>
        <AnimateWrapper>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        </AnimateWrapper>
        <AnimateWrapper>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        </AnimateWrapper>
        <AnimateWrapper>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Data Entry and Organization:  </span>
           Keep your
          data accurate and organized with our
          meticulous data entry services, enabling you
          to make informed business decisions.
        </p>
        </AnimateWrapper>
        <AnimateWrapper>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Travel Planning:  </span>
           Let us handle the logistics
          of your business travel, from booking flights
          and accommodations to creating detailed
          itineraries.
        </p>
        </AnimateWrapper>
        <AnimateWrapper>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Research Assistance:  </span>
           Gain valuable
          insights and stay ahead of the competition
          with our comprehensive research support,
          covering market trends, competitors, and
          more.
        </p>
        </AnimateWrapper>
        <AnimateWrapper>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        </AnimateWrapper>
        <AnimateWrapper>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Social Media Management:  </span>
           Enhance
          your online presence by entrusting our virtual
          assistants to curate and schedule engaging
          content across your social media platforms.
        </p>
        </AnimateWrapper>
        <AnimateWrapper>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        </AnimateWrapper>
        <AnimateWrapper>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        </AnimateWrapper>
        <AnimateWrapper>
        <HeaderText text="Why Choose 2in1 for Virtual Assistance:" />
        </AnimateWrapper>
        <AnimateWrapper>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Dedicated Professionals:  </span>
           Our
          virtual assistants are skilled
          professionals dedicated to
          providing reliable and efficient
          support.
        </p>
        </AnimateWrapper>
        <AnimateWrapper>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Customized Solutions: </span>
           Tailored
          virtual
          assistance services to meet
          the unique needs of your
          business, ensuring a
          personalized approach.
        </p>
        </AnimateWrapper>
        <AnimateWrapper>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Cost-
          Efficiency:  </span>
          Save time and
          resources by outsourcing
          tasks, allowing you to focus
          on core business activities.
        </p>
        </AnimateWrapper>
        <AnimateWrapper>
        <p className='font-[500] tracking-wide leading-7 text-secondaryText'>
          Experience the ease and
          convenience of having a virtual
          assistant from 2in1 Promotions &amp; VA
          Solutions by your side. 
          Contact us today, and let&#39;s elevate your
          business together.
        </p>
        </AnimateWrapper>
      </div>
    </>
  }

  const renderWebDesign = () => {
    return <>
      <div id="1" className='mt-10 lg:w-[900px] flex flex-col blogpost gap-10 py-10'>
        <HeaderText font-size="50px" text="WEB DEVELOPMENT"/>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        At 2in1, we are committed to
bringing your digital vision to life
through our comprehensive Web
Development services. Our team
of skilled and experienced
developers combines creativity
with technical expertise to
deliver websites that not only
look stunning but also function
seamlessly.
        </p>
        <HeaderText text="Our Web Development Services

Include:" />
       <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
       <span className='text-primaryText'>Custom Website Development: </span>
         Tailored
solutions to meet your unique business
requirements, ensuring a personalized
online presence.
        </p>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Responsive Design: </span>
         Websites
optimized for a flawless experience
across various devices, providing
accessibility to a wider audience.
        </p>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>E-commerce Development: </span>
         Robust
and user-friendly e-commerce
platforms to help you establish and
grow your online store.
        </p>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        Tailored strategies for a personalized touch in the
digital world. Your business, your way, with our
expertise.
        </p>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Content Management Systems
(CMS): </span>
         Integration of user-friendly CMS
platforms, empowering you to manage
and update your website effortlessly.
        </p>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Web Maintenance: </span>
         Ongoing support and
maintenance services to keep your
website running smoothly, ensuring it
stays up-to-date and secure.
        </p>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>SEO Optimization: </span>
         Implementation of
SEO best practices to enhance your
website&#39;s visibility and drive organic
traffic.
        </p>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/> 
        <HeaderText text="Why Choose 2in1 for Web Development:" />
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Expertise: </span>
         Our team of skilled
developers is well-versed in the
latest technologies and industry
trends.
        </p>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Collaborative Approach: </span>
         We work
closely with you to understand
your goals, ensuring the end
result aligns with your vision.
        </p>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Quality Assurance: </span>
         Rigorous testing
processes to guarantee a bug-
free and high-performance
website.
        </p>
        <p className='font-[500] tracking-wide leading-7 text-secondaryText'>
        Elevate your online presence
with our Web Development
services.
        </p>
        <p className='font-[500] tracking-wide leading-7 text-secondaryText'>
        Contact 2in1 Promotions &amp; VA
Solutions today to embark on a
journey of digital excellence.
        </p>
      </div>
    </>
  }

  const renderDigitalMarketing = () => {
    return <>
      <div id="3" className='mt-10 lg:w-[900px] flex flex-col blogpost gap-10 py-10'>
        <HeaderText font-size="50px" text="DIGITAL

MARKETING"/>
       <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        Unlock the full potential of your
online presence with our
comprehensive Digital Marketing
services. At 2in1, we are
dedicated to creating strategic
and result- driven campaigns to
enhance your brand visibility,
engage your audience, and drive
measurable growth.
        </p>
        <HeaderText text="Our Digital Marketing

Services Include:" />
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Search Engine Optimization (SEO): </span>
        
Boost your website&#39;s visibility on search
engines, increase organic traffic, and
improve your online rankings.
        </p>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Social Media Management: </span>
         Engage
and connect with your audience on
popular social media platforms through
targeted and compelling content.
        </p>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Content Marketing: </span>
         Develop and
distribute valuable content that
resonates with your audience,
establishing your brand as an authority in
your industry.
        </p>
      
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Email Marketing: </span>
         Craft personalized
and effective email campaigns to
nurture leads, retain customers, and
drive conversions.
        </p>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Pay-Per-Click (PPC) Advertising: </span>
        
Launch targeted and cost-effective
advertising campaigns to drive
immediate traffic and achieve specific
business objectives.
        </p>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Online Reputation Management
(ORM): </span>
         Monitor and manage your brand&#39;s
online reputation, ensuring a positive image
across digital platforms.
        </p>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Analytics and Reporting: </span>
         Regularly analyze
campaign performance, providing detailed
insights and recommendations for continuous
improvement.
        </p>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
         
        <HeaderText text="Why Choose 2in1 for

Digital Marketing:" />
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Strategic Approach: </span>
         We tailor
our digital marketing
strategies to align with your
business goals and target
audience.
        </p>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Collaborative Approach: </span> 
         We work
closely with you to understand
your goals, ensuring the end
result aligns with your vision.
        </p>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Data-Driven Decision Making: </span> 
         Utilize
analytics to make informed
decisions, optimizing campaigns
for maximum effectiveness.
        </p>
        <p className='lg:ml-10 font-[500] tracking-wide leading-7 text-secondaryText'>
        <span className='text-primaryText'>Creative Content: </span> 
         Our team creates
engaging and relevant content
to captivate your audience and
foster brand loyalty.
        </p>
        <p className='font-[500] tracking-wide leading-7 text-secondaryText'>
        Elevate your digital presence and
achieve your business objectives
with 2in1 Promotions &amp; VA
Solutions.
        </p>
        <p className='font-[500] tracking-wide leading-7 text-secondaryText'>
        Contact us today to embark on a
journey of digital success.
        </p>
      </div>
    </>
  }
  const navigate =  useNavigate()
  useEffect(() => { 
    const search = window.location.search.replace('?', '').replace('%20', ' ').toLowerCase();
    if (filterData[search]) {
      setFilter(search) 
    } else if (window.location.search.replace('?', '').replace('%20', ' ').toLowerCase() === "") {

    } else if (window.location.search.replace('?', '').replace('%20', ' ').toLowerCase() === "virtual assistance") {

    } else {
      navigate('/')
    }
  }, [])

  return (
    <div className='content-container flex justify-center items-center h-[100%] bg-secBG'>
      {filter==="virtual assistance" && renderVirtualAssistance()}
      {filter==="web development" && renderWebDesign()}
      {filter==="digital marketing" && renderDigitalMarketing()}
    </div>
  )
}
