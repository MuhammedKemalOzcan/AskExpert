import React from 'react'
import bg from "../../assets/contact-banner.svg"

function Banner() {
    return (
        <div>
            <img src={bg} className='w-full' />
            <div className='w-[41%] h-[21%] bg-[#FFFFFFD9] rounded-[29px] absolute top-[27%] left-[18%] px-16 pt-[48px] pb-[58px] flex flex-col gap-6'>
                <p className='bg-[#FFCC4A] w-[140PX] px-[16px] rounded-[20px] '>CONTACT US</p>
                <h1 className='font-bold text-[50px] leading-[58px] '>Feel Free To Reach Us</h1>
            </div>
        </div>
    )
}

export default Banner
