import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../../Context';
import gallery1 from "../../assets/gallery1.jpg"

function Overview() {

    const { id } = useParams();
    const { gallery, fetchGallerySingle, isLoading, error } = useData();

    useEffect(() => {
        fetchGallerySingle(id);
    }, [])
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!gallery) return <div>No data found for this gallery.</div>;


    return (
        <div className='w-full h-[980px] flex flex-col justify-center items-center relative'>
            <div className='w-[65%] h-full flex flex-col items-center'>
                <img src={import.meta.env.BASE_URL + gallery.cover} className='w-[1100px] h-[46%] rounded-[20px] relative ' />
                <div className='w-[55.5%] h-[17%] bg-[#181818] rounded-[30px] flex absolute bottom-[40%] text-white items-center justify-around px-16 py-12 gap-3 '>
                    <div>
                        <h1>Case Name</h1>
                        <h1>{gallery.title}</h1>
                    </div>
                    <div>
                        <h1>Category</h1>
                        <h1>{gallery.field}</h1>
                    </div>
                    <div>
                        <h1>Date</h1>
                        <h1>27th September 2022</h1>
                    </div>
                    <button className='yellow-button'>
                        <p>Live Preview</p>
                    </button>
                </div>
                <div className='mt-52 w-[66%] flex flex-col gap-4'>
                    <h1 className='font-bold text-[40px] leading-[46.4px] '>Project Overview</h1>
                    <p className='text-[#595566]'>{gallery.overview}</p>
                    <ul className='flex flex-col gap-4 text-[#595566]'>
                        {gallery?.points && gallery.points.length > 0 ? (
                            gallery.points.map((point, index) => (
                                <li key={index} className='flex gap-4'>
                                    <span>•</span>
                                    {point}
                                </li>
                            ))
                        ) : (
                            <p>No data</p>
                        )}
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Overview
