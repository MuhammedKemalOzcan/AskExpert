import React, { useState } from 'react'
import star from "../../assets/star.svg"
import face from "../../assets/face.svg"
import pattern from "../../assets/pattern.svg"
import ellipse from "../../assets/ellipse.svg"
import ellipse2 from "../../assets/ellipse2.svg"
import image from "../../assets/image.svg"

function About() {

    return (
        <div className='w-full h-[800px]  flex justify-center items-center'>
            <div className='flex flex w-[65%] h-[470px] bg-white'>
                <div className='flex flex-col gap-2 w-[30%] mr-32'>
                    <p className='border border-[#FFCC4A] bg-[#FFCC4A] rounded-2xl px-3 w-[120px] h-6 flex justify-center'>ABOUT US</p>
                    <h1 className='font-semibold text-[45px] leading-[52px] '>About our Consuting Agency Team</h1>
                    <p className='font-semibold text-[18px] leading-[26.55px] '>We create experiences and build products that make business grow</p>
                    <p className=' ' >Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                    <div className='w-[380px] h-[130px] flex-col'>
                        <hr className='border' />
                        <div className='flex gap-10 mt-4'>
                            <div className="bg-[#F6F6F6] w-[170px] h-[95px] flex flex-col items-center rounded-[15px]" >
                                <div className='flex justify-center mt-4'>
                                    <img src={star} />
                                    <h1 className='font-semibold text-[30px]'>400+</h1>
                                </div>
                                <p className='font-semibold'>Business Services</p>
                            </div>
                            <div className='border'></div>
                            <div className="bg-[#F6F6F6] w-[170px] h-[95px] flex flex-col items-center rounded-[15px]" >
                                <div className='flex justify-center mt-4'>
                                    <img src={face} />
                                    <h1 className='font-semibold text-[30px] ml-1'>100+</h1>
                                </div>
                                <p className='font-semibold'>Happy Customer</p>
                            </div>
                        </div>
                        <div className='border mt-4'></div>
                    </div>
                </div>
                <div className=' w-[40%] relative ml-20'>
                    <img className='relative mt-[136px] right-[70px]' src={pattern} />
                    <img className='absolute top-0 right-0 w-[634px] h-[396px] ' src={image} />
                    <div className='flex rounded-5 bg-[#FFFFFF] w-60 h-32 rounded-[20px] absolute top-72 p-4 items-center'>
                        <img src={ellipse} className='relative' />
                        <img src={ellipse2} className='absolute top-8' />
                        <h1 className=' absolute top-10 left-10 font-semibold text-[26px] '>50+</h1>
                        <p className='ml-2 font-semibold' >Market Experiences</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
