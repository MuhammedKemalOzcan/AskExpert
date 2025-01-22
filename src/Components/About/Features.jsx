import React, { useEffect, useState } from 'react'
import arrow from "../../assets/vector-arrow.svg"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Features() {

    const [features, setFeatures] = useState([]);
    const navigate = useNavigate();

    const fetchFeatures = async () => {
        const response = await axios.get("https://localhost:7287/api/Features");
        setFeatures(response.data);
    };

    useEffect(() => {
        fetchFeatures();
    }, []);

    return (
        <div className='w-full bg-[#F5F5F5] h-[704px] flex justify-center items-center '>
            <div className='w-[63%] h-[71%] flex flex-col gap-[34px]'>
                <p className='bg-[#FFCC4A] w-[320px] px-4 rounded-[20px] text-center'>GROWING WITH OUR CLIENTS</p>
                <div className='flex'>
                    <div className='flex flex-col justify-end gap-[34px]'>
                        <h1 className='font-bold  text-[45px] leading-[52.2px] '>Our core values & principles</h1>
                        <p className='w-[55%]'>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps.</p>
                    </div>
                    <button
                        onClick={() => navigate("/contact")}
                        className='dark-button flex place-self-end ml-20 '>
                        <p className='font-semibold text-[18px] whitespace-nowrap leading-[29px] '>Get in touch</p>
                    </button>
                </div>
                <div className='flex gap-[35px] '>
                    {
                        features.map((feature) => (
                            <div key={feature.id} className='w-[25%] h-max bg-[#FFFFFF] text-black flex flex-col gap-[10px] px-9 py-6 border border-[#EAEAEA] rounded-[20px] items-start'>
                                <img src={import.meta.env.BASE_URL + feature.imagePath} className='size-12' />
                                <h1 className='font-semibold text-[20px] leading-[23.2px] '>{feature.header}</h1>
                                <p> {feature.content} </p>
                                <button
                                    onClick={() => navigate("/services")}
                                    className='flex items-center gap-2'>
                                    <p className='font-semibold text-[18px] leading-[28.8px] '>Read More</p>
                                    <img src={arrow} />
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Features
