import React from 'react'
import socialmedia from "../../assets/socialmedia.svg"
import { Link } from 'react-router-dom'

function Members({ members }) {

    return (
        <div className='w-full h-[1662px] flex justify-center items-center '>
            <div className='w-[60%] h-[1332px] flex flex-col gap-[43px] '>
                <div className='w-full h-[9%] flex justify-between'>
                    <div className='w-[50%] flex flex-col gap-3 '>
                        <h1 className='big-text'>Meet Our Great Team</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                    <div className='flex items-end '>
                        <button className='dark-button' >
                            <p className='whitespace-nowrap'>Join Our Team</p>
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-[50px]'>
                    {
                        members.map((member) => (
                            <Link
                                key={member.id}
                                className='tag-wrapper items-center text-center flex flex-col gap-[25px] relative '
                                to={`/team-single/${member.id}`}
                            >
                                <button>
                                    <img src={member.img} className='rounded-[20px]' />
                                    <p className='tag absolute bottom-[34%] right-[5%] bg-[#181818] text-white rounded-[20px] py-1 px-5 hover:bg-[#FFCC4A]'>{member.position}</p>
                                </button>
                                <h1 className='font-bold text-[30px] leading-[35px] '>{member.name}</h1>
                                <p className='w-[90%]'>{member.info}</p>
                                <div className='flex justify-center'>
                                    <img src={socialmedia} />
                                </div>
                            </Link>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Members
