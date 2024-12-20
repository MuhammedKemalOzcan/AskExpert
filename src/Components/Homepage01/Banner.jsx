import React from 'react'
import banner from "../../assets/banner.svg"
import appointment from "../../assets/appointment.svg"


function Banner() {
    return (
        <div>
            <div>
                <img className='w-full relative' src={banner} />
            </div>
            <div className='flex flex-col w-[551px] h-[395px] bg-[#FFFFFFD9] absolute top-[40%] left-52 border rounded-[29px] p-[55px] gap-5'>
                <h1 className='font-bold text-[50px] leading-[58px] ' >Your small business growth advisors</h1>
                <p className='h-[71px]'>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                <div className='flex gap-4'>
                    <button className='dark-button text-white'>
                        Our Services
                    </button>
                    <button
                        className='bg-white text-black px-[10px] py-[10px] border-black rounded-[44px] gap-2 flex items-center w-[200px] h-[60px]  '
                    >
                        <img className="size-[43px] " src={appointment} />
                        <p className=' w-[127px] h-[29px] text-[#353535] mt-2 font-semibold text-[18px] whitespace-nowrap '>Book a Meeting</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner
