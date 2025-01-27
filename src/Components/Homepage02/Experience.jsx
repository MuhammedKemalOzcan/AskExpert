import React from 'react'
import bg from '../../assets/expbg.svg'
import consistency from '../../assets/Consistency.svg'
import improvement from '../../assets/Improvement.png'
import branching from '../../assets/branching.png'

function Experience() {
    return (
        <div className='w-full h-[528px] relative flex justify-center items-center'>
            <img src={bg} className='w-full h-[528px] ' />
            <div className='w-[63%] h-[263px] absolute '>
                <div className='w-[33%] flex flex-col gap-5'>
                    <p className='bg-white w-[145px] px-4 rounded-[20px] ' >EXPERIENCE</p>
                    <h1 className='big-text'>More than 25 years of experience</h1>
                    <p>3000+ our clients are insured around the World</p>
                </div>
                <div className='absolute flex bottom-10 left-[50%]'>
                    <img src={consistency} />
                    <img src={improvement} />
                    <img src={branching} />
                </div>
            </div>
        </div>
    )
}

export default Experience
