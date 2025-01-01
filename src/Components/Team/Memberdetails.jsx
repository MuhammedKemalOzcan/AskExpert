import React from 'react'
import { useParams } from 'react-router-dom'
import media from "../../assets/Socialmedia-members.svg"

function Memberdetails({ members }) {

    const { id } = useParams();
    const member = members.find((m) => m.id === parseInt(id));

    return (
        <div className='w-full  h-[750px] flex justify-center items-center'>
            <div className=' w-[56%] h-[62%] flex'>
                <div key={member.id} className='w-[45%]'>
                    <img className='h-full rounded-[20px] ' src={member.img} />
                </div>
                <div className='flex flex-col w-[53%] gap-10 '>
                    <div className='flex gap-16 '>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-[35px] leading-[40.6px]'>{member.name}</h1>
                            <p>{member.position}</p>
                        </div>
                        <div className='border h-10 '></div>
                        <img src={media} className='mb-6' />
                    </div>

                    <p>{member.content}</p>
                    <div className='border'></div>
                    <h1 className='font-bold text-[35px] leading-[40.6px]'>Past Experiences</h1>
                    <p>{member.experiences}</p>
                </div>
            </div>
        </div>
    )
}

export default Memberdetails
