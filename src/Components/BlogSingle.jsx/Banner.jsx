import React, { useEffect } from 'react'
import { useData } from '../../Context'
import { useParams } from 'react-router-dom';
import banner from "../../assets/BlogBanner.jpg"
import { format } from 'date-fns';


function Banner() {
  const { fetchBlog, blog } = useData();
  const { id } = useParams();

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (!blog || blog.length === 0) {
    return <div>Loading...</div>;
  }

  const currentBlog = blog.find((b) => b.id === parseInt(id));

  return (
    <div className='w-full h-[745px] relative'>
      <img src={banner} className='w-full' />
      <div className='bg-[#FFFFFFD9] w-[44%] h-[35%] absolute bottom-[50%] left-[20%] rounded-[30px] px-16 py-12 gap-3'>
        <p className='yellow-tag px-4 w-[160px] '>{format(new Date(currentBlog.publishedDate), 'MMMM d, yyyy')}</p>
        <h1 className='big-text'>{currentBlog.header}</h1>
      </div>
    </div>
  )
}

export default Banner
