import React from 'react'
import bg from "../../assets/contact-bg.svg"

function Newsletter() {
    return (
        <div className='w-full h-[552px] bg-red-300 flex justify-center items-center  '>
            <div className='w-[62%] h-[55%] bg-black rounded-[20px] flex text-white justify-center items-center  flex gap-[100px]'>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-[35px] leading-[40.6px] '>Subscribe Our Newsletter</h1>
                    <p>Build stronger Customer Relationships with Consultalk</p>
                </div>
                <form>
                    <input
                        type="text"
                        className='py-5 px-8 rounded-[54px] w-[311px] text-gray-500 '
                        placeholder='your mail address'
                    />
                </form>
                <button className='yellow-button '>
                    <p className='text-[18px] font-semibold leading-[28.8px] '>Subscribe</p>
                </button>
            </div>
        </div>
    )
}

export default Newsletter
