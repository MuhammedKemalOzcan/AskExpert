import React from 'react'
import { Link } from 'react-router-dom'

function Services({ services }) {

    return (
        <div className='w-full h-[1182px] bg-[#F5F5F5] flex justify-center items-center' >
            <div className='flex flex-col items-center w-[62%] gap-16 '>
                <div className='flex flex-col w-[781px] h-[104px] flex items-center'>
                    <p className='bg-[#4EAF4E] text-white rounded-[20px] px-4 w-30 h-6 text-center' >SERVICES</p>
                    <h1 className='font-semibold text-[45px] ' >Get Control Over Your Business I take</h1>
                    <h1 className='font-semibold text-[45px] ' >your finance to next level</h1>
                </div>
                <div className='grid grid-cols-3 gap-5 w-full'>
                    {
                        services.map((service) => (
                            <Link
                                key={service.id}
                                className='bg-[#EBEBEB] border border-[#EBEBEB] rounded-[20px] flex flex-col gap-2.5 px-12 py-12 text-start hover:bg-[#181818] hover:text-white'
                                to={`/service-single/${service.id}`}
                            >
                                <img className='size-20' src={service.image} />
                                <h1 className='font-semibold text-[25px]' >{service.header}</h1>
                                <p className='text-[#595566]' >{service.content}</p>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services
