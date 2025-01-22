import React from 'react'
import banner from "../../assets/servicesingle-banner.svg"

function Banner() {
  return (
    <div className='w-full relative'>
      <img src={banner} className='w-full' />
      <div className='w-[25%] h-[47%] bg-[#FFFFFFD9] absolute top-[40%] left-[20%] rounded-[20px] px-16 py-12 flex flex-col gap-[10px] '>
        <p className='yellow-tag w-[170px] px-[15px] '>SERVICE SINGLE</p>
        <h1 className='font-bold text-[50px] leading-[58px] whitespace-nowrap '>Services Details</h1>
      </div>
    </div>
  )
}

export default Banner
