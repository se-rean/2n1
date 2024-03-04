import React from 'react'
import HeaderText from '../components/HeaderText'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function FAQ() {

  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

  return (
    <div className='content-container flex justify-center items-center bg-secBG pb-10'>
      <div id="1" className='mt-10 lg:w-[900px] flex flex-col blogpost gap-10 py-10'>
        <HeaderText line-height="3rem" font-size="50px" text="FAQ’s"/>
        <Accordion icon={<Icon id={1} open={open} />} open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}> 
            <span className='text-primaryText'>What is a promotion, and how does it work in the context of Virtual Solutions?</span>
          </AccordionHeader>
          <AccordionBody>
            <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>Promotion in Virtual Solutions refers to the process of raising awareness or enhancing the visibility of a product, service, or brand using online platforms. It involves various digital marketing techniques to attract and engage the target audience.
            </p> 
          </AccordionBody>
        </Accordion>
        <Accordion icon={<Icon id={2} open={open} />} open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}> 
            <span className='text-primaryText'>How can virtual promotions benefit my business?</span>
          </AccordionHeader>
          <AccordionBody>
            <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>Virtual promotions can significantly boost your business by reaching a wider audience online. They help increase brand recognition, drive website traffic, and generate potential leads or sales. Utilizing digital channels allows for cost-effective and targeted marketing strategies.
            </p> 
          </AccordionBody>
        </Accordion>
        <Accordion icon={<Icon id={3} open={open} />} open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}> 
            <span className='text-primaryText'>What are some common virtual promotion methods?</span>
          </AccordionHeader>
          <AccordionBody>
            <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>Common virtual promotion methods include social media marketing, email campaigns, search engine optimization (SEO), online advertising, and content marketing. These methods leverage the power of the internet to connect with your audience and drive desired actions.

            </p> 
          </AccordionBody>
        </Accordion>
        <Accordion icon={<Icon id={4} open={open} />} open={open === 4}>
          <AccordionHeader onClick={() => handleOpen(4)}> 
            <span className='text-primaryText'>How do I measure the success of virtual promotions?</span>
          </AccordionHeader>
          <AccordionBody>
            <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>Success in virtual promotions can be measured through key performance indicators (KPIs) such as website traffic, conversion rates, engagement metrics, and return on investment (ROI). Analyzing these metrics helps evaluate the effectiveness of your promotional efforts.
            </p> 
          </AccordionBody>
        </Accordion>
        <Accordion icon={<Icon id={5} open={open} />} open={open === 5}>
          <AccordionHeader onClick={() => handleOpen(5)}> 
            <span className='text-primaryText'>Are virtual promotions suitable for small businesses?</span>
          </AccordionHeader>
          <AccordionBody>
            <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>Absolutely! Virtual promotions offer a cost-effective way for small businesses to compete in the digital marketplace. With targeted strategies, even businesses with limited resources can reach their target audience and achieve meaningful results.
            </p> 
          </AccordionBody>
        </Accordion>
        <Accordion icon={<Icon id={6} open={open} />} open={open === 6}>
          <AccordionHeader onClick={() => handleOpen(6)}> 
            <span className='text-primaryText'>What role does creativity play in virtual promotions?</span>
          </AccordionHeader>
          <AccordionBody>
            <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>Creativity is crucial in virtual promotions as it helps capture the audience's attention in the crowded online space. Unique and engaging content, visually appealing designs, and innovative marketing ideas contribute to the success of virtual promotions by making your brand memorable and shareable.

            </p> 
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  )
}
