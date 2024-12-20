import React from 'react'
import video from "../../assets/video2.svg"

function Video() {
  return (
    <div className='bg-black w-full h-[842px] flex flex-col justify-center items-center '>
      <div className='h-[64%] flex flex-col items-center '>
        <p className='green-tag w-[140px] px-[11px] '>OUR HISTORY</p>
        <h1 className='big-text text-white w-[55%] text-center '>Strategy for Every Stage in the Client's Journey</h1>
        <img src={video} />
      </div>
    </div>
  )
}

export default Video
