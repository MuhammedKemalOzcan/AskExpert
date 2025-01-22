import React from 'react'
import bg from "../../assets/background.svg"
import bg2 from "../../assets/background2.svg"
import phone from "../../assets/phoneIcon.svg"
import photo from "../../assets/photo.svg"
import photo3 from "../../assets/photo3.svg"


function Cta() {
    return (
        <div  className='w-full h-[525px] flex mt-40 justify-center items-center'>
            <div className='w-[65%] h-full flex bg-[#181818] border border-black rounded-[30px] justify-center mb-[10%] relative'>
                <div className='w-[90%] h-full flex items-center'>
                    <div className=' w-[40%] h-[300px] flex flex-col text-white gap-4'>
                        <p className='border-[#4EAF4E] border bg-[#4EAF4E] w-28 px-2 rounded-full ' >BOOK NOW</p>
                        <h1 className='font-bold text-[45px] leading-[52.2px] '>Better Consult, <span className='text-[#727272]'>Better</span> Results</h1>
                        <p>Our software development agency has a growth up to 30% per each year. If you are result-oriented, not afraid to take initiative – drop us a note and join our team!</p>
                        <button className='border border-[#FFCC4A] bg-[#FFCC4A] w-48 rounded-full px-5 py-4 text-black items-center flex'>
                            <img src={phone} />
                            <p className='font-semibold text-[18px] whitespace-nowrap '>
                            <a href="tel:+8001234654">
                                + 800 1234 654
                            </a>
                                </p>
                        </button>
                    </div>
                    <div className='w-[50%] ml-28 h-full flex flex-col justify-center items-center relative'>
                    <img className='h-50 bg-[#FFCC4A] border border-[#FFCC4A] rounded-2xl absolute top-0 left-[45%]' src={photo3} />
                    <img src={bg} className='bg absolute left-0 top-[15%] '/>
                        <div className='flex flex-col h-full justify-end absolute left-[10%]'>
                            <img className='h-50' src={photo} />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cta
