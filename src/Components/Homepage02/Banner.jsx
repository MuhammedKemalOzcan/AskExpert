import React from 'react'
import pattern from "../../assets/homepage2pattern.svg"
import banner from "../../assets/home2banner.png"
import appointment from "../../assets/appointment.svg"
import { useNavigate } from 'react-router-dom';

function Banner() {

    const navigate = useNavigate();

    return (
        <div className='w-full h-[841px] bg-[#262626] relative '>
            <div className='w-[50%] h-[841px] flex justify-center items-center '>
                <img src={pattern} className='absolute bottom-0 left-0 ' />
                <div className='flex flex-col gap-7 w-[53%] h-[37%]'>
                    <p className='yellow-tag px-4 w-[139px]'>HELLO I'AM</p>
                    <h1 className='text-white font-bold text-[50px] leading-[58px] '>Adam Buschemia Business Consultant</h1>
                    <p className='text-white'>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                    <button
                        className='bg-white text-black px-[8px] py-[10px] border-black rounded-[44px] gap-2 flex items-center w-[210px] h-[60px]'
                        onClick={() => navigate("/contact")}
                    >
                        <img className="size-[43px] " src={appointment} />
                        <p className=' w-[127px] h-[29px] text-[#353535] mt-2 font-semibold text-[18px] whitespace-nowrap '>Book a Meeting</p>
                    </button>
                </div>
                <img src={pattern} className='absolute top-[10%] left-[45%] ' />
                <img src={banner} className='absolute left-[50%] ' />
            </div>
        </div>
    )
}

export default Banner
