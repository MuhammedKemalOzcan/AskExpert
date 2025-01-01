import React from 'react'
import banner from "../../assets/casesingle-banner.svg"
import { useParams } from 'react-router-dom'

function Banner({ gallery }) {

    const { id } = useParams();
    const gal = gallery.find((s) => s.id === parseInt(id));

    return (
        <div className='relative'>
            <img src={banner} className='w-full' />
            <div className='bg-[#FFFFFFD9] w-[27.5%] h-[42%] absolute top-[30%] left-[18%] rounded-[30px] flex flex-col gap-4 py-12 px-16 '>
                <p className='yellow-tag w-[220px] px-4 ' >CASE STUDIES SINGLE</p>
                <h1 className='font-bold text-[50px] leading-[58px] whitespace-nowrap '>{gal.title}</h1>
            </div>
        </div>
    )
}

export default Banner
