import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../../Context';

function Storyboard() {

    const { id } = useParams();
    const { gallery, fetchGallerySingle } = useData();

    useEffect(()=>{
        fetchGallerySingle(id);
    },[])


    return (
        <div className='w-[full] h-[1150px] flex items-center justify-center '>
            <div className='w-[41.5%] h-[81%] flex flex-col gap-7 '>
                <div className='h-[28%]  flex flex-col gap-6 text-[#595566] '>
                    <h1 className='font-bold text-[30px] leading-[35px] text-black ' >Storyboard</h1>
                    <p>{gallery.storyboard}</p>
                </div>
                <img src={import.meta.env.BASE_URL + gallery.image} />
                <div className='gap-10 flex flex-col text-[#595566]'>
                    <h1 className='font-bold text-[30px] leading-[35px] text-black '>Project Result</h1>
                    <p>{gallery.result}</p>
                </div>
            </div>
        </div>
    )
}

export default Storyboard
