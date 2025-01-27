import React from 'react'
import image from "../../assets/cta-image.svg"

function Cta() {
    return (
        <div className='w-full h-[415px] flex justify-center items-center relative '>
            <div className='w-[56%] h-[100%] bg-black flex justify-center items-center rounded-[30px] absolute -top-44 '>
                <div className=' text-white w-[42%] h-[62%] ml-12 flex flex-col gap-3 '>
                    <p className='bg-[#323232] w-[119px] h-6 px-4 rounded-[20px]'>CONTACT</p>
                    <h1 className='big-text'>Ready To Talk?</h1>
                    <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.Massa placerat duis ultricies lacus sed turpis. Pellentesque  pellentesque habitant morbi tristique.</p>
                        <form className='whitespace-nowrap'>
                            <input
                                type="text"
                                className='p-5 border border-[#C1C1C1] rounded-[54px] w-[61%] '
                                placeholder='your mail address'
                            />
                            <button className='bg-[#4EAF4E] rounded-[42px] py-4 px-7 ml-12 '>
                                <p>Send Message</p>
                            </button>
                        </form>
                </div>
                <img src={image} />
            </div>
        </div>
    )
}

export default Cta
