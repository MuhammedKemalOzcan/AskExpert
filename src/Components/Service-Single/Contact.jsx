import React from 'react'
import phone from "../../assets/contact.svg"
import shift from "../../assets/shift.svg"
import location from "../../assets/location.svg"
import photo from "../../assets/servicesingle-photo.svg"
function Contact() {
  return (
    <div className='w-full h-[783px] flex justify-center items-center'>
                <div className=' w-[67%] h-[574px] flex gap-[70px] '>
                    <div className=' w-[50%] h-full flex flex-col gap-2'>
                        <p className='bg-[#FFCC4A] w-28 pt-1 px-4 rounded-full'>PROCESS</p>
                        <h1 className='font-bold text-[45px] ' >Contact Us. it's Easy.</h1>
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
                    <div className='w-[90%] ml-20 h-full flex flex-col'>
                       <img src={photo} />
                    </div>
                </div>
            </div>
  )
}

export default Contact
