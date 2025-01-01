import React from 'react'
import bg from "../../assets/teambanner.svg"

function Banner() {
    return (
        <div className='w-full flex items-center'>
            <img src={bg} className='w-full'/>
            <div className='w-[23%] h-[16%] bg-[#FFFFFFD9] rounded-[29px] absolute left-80 px-16 py-12 flex flex-col gap-6'>
                <p className='bg-[#FFCC4A] w-[82PX] px-[16px] rounded-[20px] '>TEAM</p>
                <h1 className='font-bold text-[50px] leading-[58px] whitespace-nowrap '>The Consultors</h1>
            </div>
        </div>
    )
}

export default Banner
