import React from 'react'
import user from "../../assets/user.svg"
import arrow from "../../assets/arrow.svg"
import rightArrow from "../../assets/arrow-right.svg"


function Testimonial() {
    return (
        <div className='w-full h-[475px] flex flex-col justify-center items-center mt-40 '>
            <div className='flex flex-col place-items-center w-[40%] relative'>
                <p className='border border-[#4EAF4E] bg-[#4EAF4E] rounded-full text-white px-2 '>CLIENT FEEDBACK</p>
                <h1 className='text-[#CECECE] text-center font-bold text-[40px] leading-[46.4px] '>“Lorem ipsum dolor sit amet, <br /> consectetur <span className='text-[#181818]'>adipiscing elit, sed do <br /> eiusmod</span> tempor incididunt ut <br /> labore et dolore”</h1>
                <div className='flex justify-center items-center '>
                    <button className='flex bg-[#F3F3F3] items-center w-32 border border-[#F3F3F3] rounded-full p-2 gap-4 absolute left-0'>
                        <img src={arrow} />
                        <p>Prev</p>
                    </button>
                    <img src={user} />
                    <button className='flex bg-[#F3F3F3] justify-end items-center p-2 gap-4 w-32 border border-[#F3F3F3] rounded-full absolute right-0'>
                        <p>Next</p>
                        <img src={rightArrow} />
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Testimonial
