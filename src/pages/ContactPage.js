import React from 'react'
import { useState, useEffect } from 'react'
import { send } from 'emailjs-com'

const ContactPage = () => {
    const [toSend, setToSend] = useState({
        first_name: '',
        last_name: '',
        message: '',
        reply_to: '',
    })
    console.log(toSend)
    const onSubmit = (e) => {
        e.preventDefault()
        send(
            'service_h4cdygq',
            'template_7whz21d',
            toSend,
            'qHB2hsyi_6MRZFy76'
        )
        setToSend({
            first_name: '',
            last_name: '',
            message: '',
            reply_to: '',
        })
    }

    const handleChange = (e) => {
        const userInput = { ...toSend }
        userInput[e.target.name] = e.target.value
        setToSend(userInput)
    }

    useEffect(() => {
        setToSend({
            first_name: '',
            last_name: '',
            message: '',
            reply_to: '',
        })
    },[])

  return (
    <>
        
        <form className='form' onSubmit={onSubmit}>
        <label className='label' htmlFor="first_name" style={{color: "white"}}>Contact Form</label>
        <br/>
        <input 
         type='text'
         id='first_name'
         name='first_name'
         placeholder='First Name'
         value={toSend.first_name}
         onChange={handleChange}
         />
        <input 
        type='text'
        name='last_name'
        placeholder='Last Name'
        value={toSend.last_name}
        onChange={handleChange}
        />
        <input 
        type='text'
        name='message'
        placeholder='Message'
        value={toSend.message}
        onChange={handleChange}
        />
        <input 
        type='text'
        name='reply_to'
        placeholder='Your Email'
        value={toSend.reply_to}
        onChange={handleChange}
        />
        <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default ContactPage