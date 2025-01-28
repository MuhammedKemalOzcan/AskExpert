import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useData } from '../../Context';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

function Articles() {

    const { members, blog, fetchBlog, fetchMembers } = useData();
    const navigate = useNavigate();

    useEffect(() => {
        fetchBlog();
        fetchMembers();
    }, []);

    return (
        <div>
            <div className='flex flex-col bg-[#F5F5F5] w-full h-auto justify-center items-center '>
                <div className='w-[62%] my-44'>
                    <p className='self-start bg-[#4EAF4E] w-16 flex justify-center text-white rounded-2xl px-3 py-px '>BLOG</p>
                    <div className='flex justify-between'>
                        <h1 className='w-[50%] font-bold text-[45px] leading-[52.2px]'>Take a look at our latest articles & resources</h1>
                        <button
                            className='yellow-button'
                        >
                            <p className='font-semibold text-[18px] whitespace-nowrap leading-[29px] '>More News</p>
                        </button>
                    </div>
                    <div className='flex grid grid-cols-2 justify-between mt-12 gap-9'>
                        {
                            blog.map((b) => (
                                < div key={b.id} className=' gap-9 flex flex-col ' >
                                    <img src={b.cover} className='rounded-[20px]' />
                                    <h1 className='font-semibold text-[30px] leading-[35px] '>{b.header}</h1>
                                    <p>{b.content}</p>
                                    <div className='border mb-2'></div>
                                    {
                                        members.map((member) => (
                                            member.id === b.memberId &&
                                            <div key={member.id} className=' flex items-center gap-8 h-6'>
                                                <img src={member.memberImage} className='size-16 rounded-[50%]' />
                                                <div className='flex gap-8'>
                                                    <p className='whitespace-nowrap'>{member.name}</p>
                                                    <div className='border'></div>
                                                    <p className='whitespace-nowrap'>{format(new Date(b.publishedDate), 'MMMM d, yyyy')}</p>
                                                </div>
                                                <button
                                                    className='dark-button'
                                                    onClick={() => navigate(`/blog-single/${b.id}`)}
                                                >
                                                    <p>Read More</p>
                                                </button>
                                            </div>
                                        ))
                                    }

                                    <div className='border mt-[14px]'></div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div >
        </div>
    )
}

export default Articles
