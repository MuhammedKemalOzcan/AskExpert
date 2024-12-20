import React from 'react'
import phone from "../../assets/contact.svg"
import shift from "../../assets/shift.svg"
import location from "../../assets/location.svg"

function Contact() {
    return (
        <div className='w-full h-[783px] flex justify-center items-center'>
            <div className=' w-[60%] h-[534px] flex'>
                <div className=' w-[40%] h-full flex flex-col gap-4'>
                    <p className='bg-[#FFCC4A] w-28 pt-1 px-4 rounded-full'>PROCESS</p>
                    <h1>Contact Us. it's Easy.</h1>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.</p>
                    <div className='flex flex-col gap-16 mt-12'>
                        <div className='flex gap-4'>
                            <img src={phone} className='size-12' />
                            <div className='flex flex-col'>
                                <p>Call Today</p>
                                <h1 className='text-[20px] leading-[23px]'>+1 800 100 900</h1>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <img src={shift} className='size-12' />
                            <div className='flex flex-col'>
                                <p>Monday To Friday</p>
                                <h1 className='text-[20px] leading-[23px]'>9AM-5PM</h1>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <img src={location} className='size-12' />
                            <div className='flex flex-col'>
                                <p>USA Office</p>
                                <h1 className='text-[20px] leading-[23px]'>195 Devonshire St Boston, MA 02110</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[55%] ml-20 h-full flex flex-col'>
                    <form>
                        <div className='flex gap-8'>
                            <div className='flex flex-col'>
                                <label>Full Name</label>
                                <input
                                    className='w-80 h-16 border border-[#C1C1C1] rounded-full py-5 px-8 '
                                    placeholder='john david'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label>Email</label>
                                <input
                                    className='w-80 h-16 border border-[#C1C1C1] rounded-full py-5 px-8 '
                                    placeholder='consult@mail.com'
                                />
                            </div>
                        </div>
                        <div className='flex gap-8 mt-8'>
                            <div className='flex flex-col '>
                                <label>Phone</label>
                                <input
                                    className='w-80 h-16 border border-[#C1C1C1] rounded-full py-5 px-8 '
                                    placeholder='+008 654 231'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label>Company(optional)</label>
                                <input
                                    className='w-80 h-16 border border-[#C1C1C1] rounded-full py-5 px-8 '
                                    placeholder='yourcompany@mail.com'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col mt-8 gap-8px' >
                            <label>Message</label>
                            <input
                                placeholder='Briefly tell us about your project and your current goals.How can we help'
                                className='w-[666px] h-[190px] border border-[#C1C1C1] rounded-[22px] pt-5 pb-32 px-8 '
                            />
                            <button
                                className='dark-button mt-7'
                            >
                                <p className='font-semibold text-[18px] whitespace-nowrap flex justify-center '>Send Message</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
