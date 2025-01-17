import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns';
import { useData } from '../../Context';


function Blog() {

    const [blog, setBlog] = useState([]);
    const { fetchMembers, members } = useData();
    const navigate = useNavigate();


    const handleClick = () => {
        navigate("/blog")
    }

    const fetchBlogs = async () => {
        const response = await axios.get("https://localhost:7287/api/Blogs");
        setBlog(response.data);
    }

    useEffect(() => {
        fetchBlogs();
        fetchMembers();
    }, []);

    const sliceBlog = blog.slice(0, 2);

    return (
        <div className='flex flex-col bg-[#F5F5F5] w-full h-[1131px] justify-center items-center '>
            <div className='w-[62%]'>
                <p className='self-start bg-[#4EAF4E] w-16 flex justify-center text-white rounded-2xl px-3 py-px '>BLOG</p>
                <div className='flex justify-between'>
                    <h1 className='w-[50%] font-bold text-[45px] leading-[52.2px]'>Take a look at our latest articles & resources</h1>
                    <button
                        className='yellow-button'
                        onClick={handleClick}
                    >
                        <p className='font-semibold text-[18px] whitespace-nowrap leading-[29px] '>More News</p>
                    </button>
                </div>
                <div className='flex justify-between mt-12 gap-9'>
                    {
                        sliceBlog.map((b) => (
                            < div key={b.id} className='w-[50%] h-[50%] gap-9 flex flex-col'>
                                <img src={b.cover} />
                                <h1 className='font-semibold text-[30px] leading-[35px] '>{b.header}</h1>
                                <p>{b.content}</p>
                                <div className='border mb-2'></div>
                                <div className=' flex items-center gap-8 h-6'>
                                    {
                                        members.map((m) => (
                                            m.id === b.memberId &&
                                            <div
                                                className='flex justify-center items-center gap-4'
                                                key={m.id}
                                            >
                                                <img src={m.memberImage} className='size-16 rounded-[50%]' />
                                                <div className='flex gap-8 whitespace-nowrap'>
                                                    <p>{m.name}</p>
                                                    <div className='border'></div>
                                                    <p className='whitespace-nowrap'>{format(new Date(b.publishedDate), 'MMMM d, yyyy')}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <button
                                        className='dark-button'
                                    >
                                        <p>Read More</p>
                                    </button>
                                </div>
                                <div className='border mt-[14px]'></div>
                            </div>

                        ))
                    }
                </div>
            </div>

        </div >
    )
}

export default Blog
