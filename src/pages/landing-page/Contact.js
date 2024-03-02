import React, { useState, useRef } from 'react' 
// import nodemailer from 'nodemailer';
import Header from '../../components/Header'
import Input from '../../components/Input'
import HeaderText from '../../components/HeaderText'
import HoverButton from '../../components/HoverButton'
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)
  const [sendMessage, setSendMessage] = useState(null)

  const form = useRef();
  const sendEmail = async (e) => {
    setSending(true)
    setSendMessage(null)
    emailjs
    .sendForm('service_k0mwlrh', 'template_vsgaldb', form.current, {
      publicKey: 'A393kpI6fAN-9v3kk',
    })
    .then(
      () => { 
        setSending(false) 
        setSendMessage("Message Send!")
      },
      (error) => {
        setSending(false)
        setSendMessage("Please try again.")
      },
    );
  }

  return (
    <div className='content-container'>
       <Header text="CONTACT"/>
        <div className='pt-10 pb-10 lg:w-[900px]'>
          <p className='text-[16px]  text-secondaryText'>
            08
          </p>  
          <HeaderText width="100%" text="Our dedicated team is here to assist you in unlocking the full potential of your business through our innovative promotions and virtual assistant solutions."/>
          <div className='lg:flex lg:justify-between gap-8'>
      
            <p className='text-[16px] text-center lg:text-left lg:text-[100%] lg:w-full text-secondaryText'>
            Feel free to drop us a line, ask questions, or share your thoughts. We value your input and are committed to providing you with the highest level of service.
            </p> 
            <form ref={form} onSubmit={handleSubmit((data) => sendEmail(data))} className='lg:flex lg:justify-center w-full lg:w-[80%]'>
              <div className='pt-10 lg:pt-0 pb-10 w-[100%] lg:w-[30rem] gap-5 self-center flex flex-col '>
                  <Input 
                    {...register('from_name', { required: 'Name field is required.' })}
                    title="Name"  
                    name="from_name" 
                    handleValueChange={(e) => setName(e)} value={email}
                    error={errors.from_name}
                  />

                  <Input 
                    {...register('user_email', { required: 'Email field is required.' })}
                    title="Email" 
                    type="email" 
                    name="user_email" 
                    handleValueChange={(e) => setEmail(e)} value={email}
                    error={errors.user_email}
                  />

                  <Input 
                    {...register('email_subject', { required: 'Subject field is required.' })}
                    title="Subject" 
                    name="email_subject" 
                    handleValueChange={(e) => setSubject(e)} value={subject}
                    error={errors.email_subject}
                  />

                  <label for="Message" class="block mb-2 text-sm font-medium text-secondaryText">Message</label>
                  <textarea cols="40" rows="10" type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} id='message' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                  <span>{sendMessage}</span>
                  <button disabled={sending} type='submit' className=' text-secondaryText border-card2 border-2  hover:bg-card1 hover:text-primary px-10 py-2 rounded-md font-[700]'>
                   {sending ? "Sending..." :  "Send Message" }
                  </button>
                 
              </div>
            </form>
          </div> 
        </div>
    </div>
  )
}

export default Contact
