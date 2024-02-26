import React, { useState } from 'react' 
// import nodemailer from 'nodemailer';
import Header from '../../components/Header'
import Input from '../../components/Input'
import HeaderText from '../../components/HeaderText'
import HoverButton from '../../components/HoverButton'

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    // const options = {
    //   from: 'you@example.com',
    //   to: 'user@gmail.com',
    //   subject: 'hello world',
    //   html: <h1>Hello</h1>,
    // };

    // await transporter.sendMail(options);
  }

  return (
    <div className='content-container'>
       <Header text="CONTACT"/>
        <div className='pt-10 pb-10 lg:w-[900px]'>
          <p className='text-[16px]'>
            08
          </p> 
          <HeaderText text="Dolor de art sagittis ultrices felis, faucibus tortor sed. In tristique ipsum fermentum diam lorem."/>
          <form onSubmit={(e) => handleSubmit(e)} className='lg:flex lg:justify-center'>
            <div className='pt-10 pb-10 w-[28rem] lg:w-[40rem] gap-5 self-center flex flex-col'>
                <Input title="Name" handleValueChange={(e) => setName(e)} value={name}/>
                <Input title="Email" handleValueChange={(e) => setEmail(e)} value={email}/>
                <Input title="Subject" handleValueChange={(e) => setSubject(e)} value={subject}/>
                <label for="Message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                <textarea cols="40" rows="10" type="text" value={message} onChange={(e) => setMessage(e.target.value)} id='message' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                {/* <button type='submit' className='border-card2 border-2  hover:bg-card1 hover:text-primary px-10 py-2 rounded-md '>Submit</button> */}
                <HoverButton title="Send Message" />
            </div>
          </form>
        </div>
    </div>
  )
}

export default Contact
