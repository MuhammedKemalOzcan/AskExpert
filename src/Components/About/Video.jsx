import React from 'react'
import video from "../../assets/AboutVideo.mp4"

function Video() {


    return (
        <div className='w-full h-[950px] flex justify-center items-center'>
            <div className='w-[55.5%] h-[68%] flex flex-col items-center gap-[10px]'>
                <div className='w-[69%] h-[26%] text-center flex  flex-col items-center gap-[11px] mb-7'>
                    <p className='px-3 bg-[#4EAF4E] w-[150px%] rounded-[20px] text-white '>OUR HISTORY</p>
                    <h1 className='text-[45px] font-bold leading-[52.2px] '>Better Website Means A User Experience</h1>
                    <p>Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.</p>
                </div>
                <video className='rounded-[30px] h-[57%]' controls width="91%">
                    <source src={video} />
                </video>
            </div>
        </div>
    )
}

export default Video
