import React from 'react'
import video from "../../assets/ServiceVideo.mp4"

function Video() {
  return (
    <div className='bg-black w-full h-[842px] flex flex-col justify-center items-center '>
      <div className='h-[64%] flex flex-col items-center gap-[20px] '>
        <p className='green-tag w-[140px] px-[11px] '>OUR HISTORY</p>
        <h1 className='big-text text-white w-[55%] text-center '>Strategy for Every Stage in the Client's Journey</h1>
        <video className='rounded-[30px] h-[57%]' controls width="91%">
          <source src={video} />
        </video>
      </div>
    </div>
  )
}

export default Video
