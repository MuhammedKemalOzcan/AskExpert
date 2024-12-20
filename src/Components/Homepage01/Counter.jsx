import React from 'react'

function Counter() {
  return (
    <div className='flex w-full justify-center h-24 mt-16'>
      <div className='flex w-[45%] justify-between'>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-[50px] leading-[59px] '>1128+</h1>
          <h1 className='font-medium text-[18px]'>Succesful Work</h1>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-[50px] leading-[59px] '>908+</h1>
          <h1 className='font-medium text-[18px]'>Team Member</h1>

        </div>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-[50px] leading-[59px] '>258+</h1>
          <h1 className='font-medium text-[18px]'>Happy Customer</h1>

        </div>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-[50px] leading-[59px] '>564+</h1>
          <h1 className='font-medium text-[18px]'>Creative Ideas</h1>

        </div>
      </div>
    </div>
  )
}

export default Counter

