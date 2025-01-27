import React, { useState } from 'react'
import finance from "../../assets/finance.png"
import approach from "../../assets/approach.png"
import result from "../../assets/result.png"
import { useNavigate } from 'react-router-dom'

function UnderBanner() {

    const navigate = useNavigate();

    const [data, setData] = useState([
        {
            id: 1, title: "Finance & restructing", details: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.", image: finance, button: "Our Services", route: "/services"
        },
        {
            id: 2, title: "Our Approach", details: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.", image: approach, button: "More About", route: "/about"
        },
    ]);

    return (
        <div className='flex w-full h-[470px] justify-center'>
            <div className='flex w-[70%] h-[470px] absolute top-[60%] '>
                {
                    data.map((d) => (
                        <div key={d.id} className='relative' >
                            <img src={d.image} />
                            <div className='absolute top-[45%] left-[20%] w-[60%] flex flex-col gap-2 '>
                                <h1 className='font-semibold text-[25px] leading-[29px] '>{d.title}</h1>
                                <p className='text-[#595566]'>{d.details}</p>
                                <button
                                    onClick={() => navigate(d.route)}
                                    className='px-4 py-4 border border-[#F3F3F3] bg-[#F3F3F3] rounded-[55px] w-auto hover:bg-black hover:text-white hover:border-black  '>
                                    <p>{d.button}</p>
                                </button>
                            </div>
                        </div>
                    ))
                }
                <div className='relative' >
                    <img src={result} />
                    <div className='absolute top-[45%] left-[20%] w-[60%] flex flex-col gap-2 text-white '>
                        <h1 className='font-semibold text-[25px] leading-[29px] '>Consultak Result</h1>
                        <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                        <button
                            onClick={() => navigate("/work")}
                            className='px-4 py-4 border border-[#151515] bg-[#151515] rounded-[55px] text-white w-auto hover:bg-white hover:text-black hover:border-white  '>
                            <p>Explore Our Solutions</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnderBanner
