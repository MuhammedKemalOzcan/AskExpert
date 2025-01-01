import React from 'react'
import { useParams } from 'react-router-dom'

function Overview({ gallery }) {

    const { id } = useParams();
    const gal = gallery.find((g) => g.id === parseInt(id))

    return (
        <div className='w-full h-[980px] flex flex-col justify-center items-center relative'>
            <div className='w-[65%] h-full flex flex-col items-center'>
                <img src={gal.image} className='w-[full] h-[46%] rounded-[20px] relative ' />
                <div className='w-[55.5%] h-[17%] bg-[#181818] rounded-[30px] flex absolute bottom-[40%] text-white items-center justify-around px-16 py-12 gap-3 '>
                    <div>
                        <h1>Case Name</h1>
                        <h1>{gal.title}</h1>
                    </div>
                    <div>
                        <h1>Category</h1>
                        <h1>{gal.field}</h1>
                    </div>
                    <div>
                        <h1>Date</h1>
                        <h1>27th September 2022</h1>
                    </div>
                    <button className='yellow-button'>
                        <p>Live Preview</p>
                    </button>
                </div>
                <div className='mt-52 w-[66%] flex flex-col gap-4'>
                    <h1 className='font-bold text-[40px] leading-[46.4px] '>Project Overview</h1>
                    <p className='text-[#595566]'>{gal.overview}</p>
                    <ul className='flex flex-col gap-4 text-[#595566]'>
                        <li className='flex gap-4'>
                            <span>
                                •
                            </span>
                            {gal.points.point1}
                        </li>
                        <li className='flex gap-4'>
                            <span>
                                •
                            </span>
                            {gal.points.point2}
                        </li>
                        <li className='flex gap-4'>
                            <span>
                                •
                            </span>
                            {gal.points.point3}
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Overview
