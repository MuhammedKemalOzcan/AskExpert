import React from 'react'
import tik from "../../assets/tik.svg"
import vision from "../../assets/vision.svg"

function Vision() {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[66%] h-[50%] flex gap-[122px] mt-[95px] '>
                <div className='w-[50%] h-full flex flex-col gap-5'>
                    <p className='bg-[#4EAF4E] w-[120px] px-3 rounded-[20px] '>OUR VISION</p>
                    <h1 className='text-[45px] font-bold  leading-[52.2px] '>Turn your ideas into reality.</h1>
                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps.</p>
                    <div className='flex gap-5'>
                        <img src={tik} className='mb-7' />
                        <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day.</p>
                    </div>
                    <div className='flex gap-5'>
                        <img src={tik} className='mb-7' />
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test override the digital.</p>
                    </div>
                </div>
                <img src={vision} />
            </div>
        </div>
    )
}

export default Vision
