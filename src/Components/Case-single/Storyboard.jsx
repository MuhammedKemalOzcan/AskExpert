import React from 'react'
import { useParams } from 'react-router-dom'
import image from "../../assets/image.svg"

function Storyboard({ gallery }) {

    const { id } = useParams();
    const g = gallery.find((g) => g.id === parseInt(id));
    const middleIndex = Math.floor(g.storyboard.length / 2);
    const firstHalf = g.storyboard.slice(0, middleIndex);
    const secondHalf = g.storyboard.slice(middleIndex);


    return (
        <div className='w-[full] h-[1147px] flex items-center justify-center '>
            <div className='w-[41.5%] h-[81%] flex flex-col gap-7 '>
                <div className='h-[28%]  flex flex-col gap-6 text-[#595566] '>
                    <h1 className='font-bold text-[30px] leading-[35px] text-black ' >Storyboard</h1>
                    <p>{firstHalf}</p>
                    <p>{secondHalf}</p>
                </div>
                <img src={image} className='w-[89%] h-[39%]  ' />
                <div className='gap-10 flex flex-col text-[#595566]'>
                    <h1 className='font-bold text-[30px] leading-[35px] text-black '>Project Result</h1>
                    <p>{g.result}</p>
                </div>
            </div>
        </div>
    )
}

export default Storyboard
