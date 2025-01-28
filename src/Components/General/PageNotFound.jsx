import React from 'react'
import bg from "../../assets/404bg.svg"
import { useNavigate } from 'react-router-dom'

function PageNotFound() {

    const navigate = useNavigate();
    return (
        <div className='w-full h-[857px] flex justify-center items-center'>
            <img src={bg} alt="" />
            <div className='w-[31%] h-[39%] bg-[#FFFFFFD9] absolute flex flex-col justify-center items-center gap-10 rounded-[30px] '>
                <h1 className='font-bold text-[120px] leading-[140px] '>404</h1>
                <h1 className='font-bold text-[60px] leading-[70px]'>Page Not Found</h1>
                <p>This Page Doesn't or was removed! We suggest you back to home</p>
                <button
                    onClick={() => navigate("/")}
                    className='yellow-button'>
                    <p className='whitespace-nowrap'>Back To Home</p>
                </button>
            </div>
        </div>
    )
}

export default PageNotFound
