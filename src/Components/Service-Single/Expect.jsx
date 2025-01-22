import React from 'react'
import photo from "../../assets/expect.svg"
import tik from "../../assets/tik.svg"

function Expect() {
  return (
    <div className='w-full h-[560px] flex justify-center items-center '>
      <div className='w-[68%] h-[463px] flex gap-20 '>
        <img src={photo} />
        <div className='flex flex-col w-[40%] h-[68%] gap-4 '>
          <p className='yellow-tag w-[220px] px-3 '>WE'LL WORK WITH YOU</p>
          <h1 className='big-text'>What To Expect</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className='flex gap-4'>
          <img src={tik} />
          <h1>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day.</h1>
          </div>
          <div className='flex gap-4 '>
          <img src={tik} />
          <h1>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test override the digital.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expect

