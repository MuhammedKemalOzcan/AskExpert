import React from 'react'
import banner from "../../assets/case-banner.svg"

function Banner() {
    return (
        <div className='w-full h-487px flex items-center'>
            <img src={banner} className='w-full' />
            <div className='w-[19%] h-[15%] rounded-[30px] bg-[#FFFFFFD9] absolute left-[20%] flex flex-col py-12 px-10 gap-[10px]  '>
                <p className='yellow-tag w-[160px] px-4 '>CASE STUDIES</p>
                <h1 className='font-bold text-[50px] whitespace-nowrap leading-[58px] '>Case Studies</h1>
            </div>
        </div>
    )
}

export default Banner
