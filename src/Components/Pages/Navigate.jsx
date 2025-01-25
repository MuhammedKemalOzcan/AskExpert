import React from 'react'
import { Link } from 'react-router-dom'

function Navigate() {
  return (
    <div className='w-full bg-[#F5F5F5] h-[900px] flex justify-center items-center'>
      <div className='w-[60%] h-[70%] bg-[#EBEBEB] rounded-[30px] p-10'>
        <h1 className='big-text'>Pages</h1>
        <div className='w-full h-[70%] grid grid-cols-3 items-center ml-4 '>
          <Link to={"/blog"}>
            <h1 className='font-bold text-[32px] hover:underline'>Blog</h1>
          </Link>
          <Link to={"/team"}>
            <h1 className='font-bold text-[32px] hover:underline'>Team</h1>
          </Link>
          <Link to={"/admin"}>
            <h1 className='font-bold text-[32px] hover:underline'>Admin</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigate
