import React from 'react'
import photo from "../../assets/contact-photo.svg"
import phone from "../../assets/dark-phone.svg"
import mail from "../../assets/dark-mail.svg"
import location from "../../assets/dark-location.svg"


function Talk() {
  return (
    <div className='w-full h-[805px] flex justify-center items-center '>
      <div className='w-[64%] h-[63%]  flex gap-20 items-center justify-center'>
        <img src={photo} />
        <div className='w-[43%] h-[72%] flex flex-col gap-6'>
            <p className='green-tag w-[115px] px-3 '>LET'S TALK</p>
            <h1 className='big-text'>Get In Touch With Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <div className='flex'>
                <img src={phone} />
                <div className='flex flex-col ml-6'>
                    <h1>Have Any Question?</h1>
                    <h1>Free +01 238 543 987</h1>
                </div>
            </div>
            <div className='flex'>
                <img src={mail} />
                <div className='flex flex-col ml-6'>
                    <h1>Write Email</h1>
                    <h1>Info@consultalk.com</h1>
                </div>
            </div>
            <div className='flex'>
                <img src={location} />
                <div className='flex flex-col ml-6'>
                    <h1>Visit Anytime</h1>
                    <h1>King Street, Prior Lake, New York.</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Talk
