import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import media from "../../assets/Socialmedia-members.svg"
import { useData } from '../../Context';

function Memberdetails() {

    const { id } = useParams();
    const { members, fetchMembers, isLoading, error } = useData();

    useEffect(()=>{
        fetchMembers();
    },[])

    if (!members || members.length === 0) {
        return <div>Loading...</div>;
    }

    // URL'deki id'yi filtreleme
    const member = members.find((m) => m.id === parseInt(id)); // ID eşleşmesi için parseInt kullanabilirsiniz.
    console.log(member);

    if (!member) {
        return <div>Member not found!</div>;
    }


    return (
        <div className='w-full  h-[750px] flex justify-center items-center'>
            <div className=' w-[56%] h-[62%] flex'>
                <div key={member.id} className='w-[45%]'>
                    <img className='h-full rounded-[20px] ' src={import.meta.env.BASE_URL + member.memberImage} />
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

                    <p>{member.memberDesc}</p>
                    <div className='border'></div>
                    <h1 className='font-bold text-[35px] leading-[40.6px]'>Past Experiences</h1>
                    <p>{member.experience}</p>
                </div>
            </div>
        </div>
    )
}

export default Memberdetails
