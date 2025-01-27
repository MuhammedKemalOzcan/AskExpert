import React from 'react'
import phone from "../../assets/phone.svg"
import mail from "../../assets/mail.png"
import photo from "../../assets/aboutphoto.png"
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate();
    return (
        <div className='flex w-full h-[877px] justify-center items-center'>
            <div className='w-[63%] h-[660px] flex '>
                <div className='w-[36%] h-[585px] flex flex-col gap-5'>
                    <p className='yellow-tag w-[120px] px-4 '>ABOUT ME</p>
                    <h1 className='big-text'>About Our Consulting Agency Team</h1>
                    <p className='text-[#4EAF4E] font-bold'>We create experiences and build products that make business grow</p>
                    <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                    <div className='border w-[50%] mt-6'></div>
                    <div className='w-[67%] h-[64px] flex items-center gap-2'>
                        <img src={mail} className='size-12' />
                        <h1 className='text-center'>Buschemia@gmailcom</h1>
                    </div>
                    <div className='border w-[50%]'></div>
                    <div className='w-[67%] h-[64px] flex items-center gap-2'>
                        <img src={phone} className='size-12' />
                        <h1 className='text-center'>(001) 5648 6584</h1>
                    </div>
                    <button
                        onClick={() => navigate("/contact")}
                        className='bg-black border border-white w-[234px] h-[60px] rounded-[55px] px-4 py-7 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-black '>
                        <p>Make An Appointment</p>
                    </button>
                </div>
                <img src={photo} className='ml-20' />
            </div>
        </div>
    )
}

export default About
