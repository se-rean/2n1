import React, { useState } from 'react'
import HeaderText from '../components/HeaderText'

export default function PortfolioPage() {

  const [filter, setFilter] = useState(null)

  const renderVirtualAssistance = () => {
    return <>
      <div id="1" className='mt-10 lg:w-[900px] flex flex-col blogpost gap-10 py-10'>
        <HeaderText font-size="50px" text="VIRTUAL ASSISTANCE"/>
        <p>
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
        <HeaderText text="Our Virtual Assistance Services Include:" />
        <p>
          Administrative Support: From managing
          emails and scheduling appointments to
          handling routine administrative tasks, our
          virtual assistants ensure smooth day-to-
          day operations.
        </p>
        <p>
          Customer Support: Deliver exceptional
          customer service with our dedicated
          virtual support team, available to assist
          your customers via various
          communication channels.
        </p>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        <p>
          Data Entry and Organization: Keep your
          data accurate and organized with our
          meticulous data entry services, enabling you
          to make informed business decisions.
        </p>
        <p>
          Travel Planning: Let us handle the logistics
          of your business travel, from booking flights
          and accommodations to creating detailed
          itineraries.
        </p>
        <p>
          Research Assistance: Gain valuable
          insights and stay ahead of the competition
          with our comprehensive research support,
          covering market trends, competitors, and
          more.
        </p>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        <p>
          Social Media Management: Enhance
          your online presence by entrusting our virtual
          assistants to curate and schedule engaging
          content across your social media platforms.
        </p>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        <HeaderText text="Why Choose 2in1 for Virtual Assistance:" />
        <p>
          Dedicated Professionals: Our
          virtual assistants are skilled
          professionals dedicated to
          providing reliable and efficient
          support.
        </p>
        <p>
          Customized Solutions: Tailored
          virtual
          assistance services to meet
          the unique needs of your
          business, ensuring a
          personalized approach.
        </p>
        <p>
          Cost-
          Efficiency: Save time and
          resources by outsourcing
          tasks, allowing you to focus
          on core business activities.
        </p>
        <p>
          Experience the ease and
          convenience of having a virtual
          assistant from 2in1 Promotions &amp; VA
          Solutions by your side. 
          Contact us today, and let&#39;s elevate your
          business together.
        </p>
      </div>
    </>
  }

  const renderWebDesign = () => {
    return <>
      <div id="1" className='mt-10 lg:w-[900px] flex flex-col blogpost gap-10 py-10'>
        <HeaderText font-size="50px" text="WEB DEVELOPMENT"/>
        <p>
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
        <p>
        Custom Website Development: Tailored
solutions to meet your unique business
requirements, ensuring a personalized
online presence.
        </p>
        <p>
        Responsive Design: Websites
optimized for a flawless experience
across various devices, providing
accessibility to a wider audience.
        </p>
        <p>
        E-commerce Development: Robust
and user-friendly e-commerce
platforms to help you establish and
grow your online store.
        </p>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        
        <p>
        Tailored strategies for a personalized touch in the
digital world. Your business, your way, with our
expertise.
        </p>
        <p>
        Content Management Systems
(CMS): Integration of user-friendly CMS
platforms, empowering you to manage
and update your website effortlessly.
        </p>
        <p>
        Web Maintenance: Ongoing support and
maintenance services to keep your
website running smoothly, ensuring it
stays up-to-date and secure.
        </p>
        <p>
        SEO Optimization: Implementation of
SEO best practices to enhance your
website&#39;s visibility and drive organic
traffic.
        </p>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/>
        <img className='w-[100%]' src={require('../assets/BLOG Banner- Essential Digital Tools.png')} alt=''/> 
        <HeaderText text="Why Choose 2in1 for Web Development:" />
        <p>
        Expertise: Our team of skilled
developers is well-versed in the
latest technologies and industry
trends.
        </p>
        <p>
        Collaborative Approach: We work
closely with you to understand
your goals, ensuring the end
result aligns with your vision.
        </p>
        <p>
        Quality Assurance: Rigorous testing
processes to guarantee a bug-
free and high-performance
website.
        </p>
        <p>
        Elevate your online presence
with our Web Development
services.
        </p>
        <p>
        Contact 2in1 Promotions &amp; VA
Solutions today to embark on a
journey of digital excellence.
        </p>
      </div>
    </>
  }

  return (
    <div className='content-container flex justify-center items-center h-[100%] bg-secBG'>
      {renderVirtualAssistance()}
      {renderWebDesign()}
    </div>
  )
}
