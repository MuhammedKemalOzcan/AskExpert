import React from 'react'
import team from "../../assets/team.svg"
import { useNavigate } from 'react-router-dom'

function Team() {
  const navigate = useNavigate();
  return (
    <div className='w-full h-[816px] relative flex flex-col justify-center items-center'>
      <img src={team} />
      <div className='w-[32.5%] h-[16%] absolute bottom-[25%] flex flex-col items-center justify-center gap-5 '>
        <p className='green-tag px-3'>OUR TEAM</p>
        <h1 className='text-white big-text '>Trusted by some Biggest Names</h1>
        <button
          onClick={() => navigate("/team")}
          className='bg-[#FFCC4A] px-8 py-4 rounded-[42px] hover:bg-black hover:text-white '>
          <p className='whitespace-nowrap font-semibold'>View Team Detail</p>
        </button>
      </div>
      <div className='border border-[#464646] w-[63%] '></div>
    </div>
  )
}

export default Team
