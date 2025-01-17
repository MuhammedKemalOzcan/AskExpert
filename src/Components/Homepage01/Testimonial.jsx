import React, { useEffect, useState } from 'react'
import arrow from "../../assets/arrow.svg"
import rightArrow from "../../assets/arrow-right.svg"
import axios from 'axios'


function Testimonial() {

    const [clients, setClients] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchClients = async () => {
        const response = await axios.get("https://localhost:7287/api/Clients");
        setClients(response.data);
    }

    useEffect(() => {
        fetchClients();
    }, [])

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? clients.length - 1 : prevIndex - 1
        );
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === clients.length - 1 ? 0 : prevIndex + 1
        );
    }

    const currentClient = clients[currentIndex] || {};

    return (
        <div className='w-full h-[475px] flex flex-col justify-center items-center mt-40 '>
            <div className='flex flex-col place-items-center w-[40%] relative'>
                <p className='border border-[#4EAF4E] bg-[#4EAF4E] rounded-full text-white px-2 '>CLIENT FEEDBACK</p>
                <div key={currentClient.id}>
                    <h1 className='text-[#CECECE] text-center font-bold text-[40px] leading-[46.4px] '>“{currentClient.comment}”</h1>
                    <div className='flex justify-center items-center '>
                        <button
                            className='flex bg-[#F3F3F3] items-center w-32 border border-[#F3F3F3] rounded-full p-2 gap-4 absolute left-0'
                            onClick={handlePrev}

                        >
                            <img src={arrow} />
                            <p>Prev</p>
                        </button>
                        <div className='flex flex-col items-center gap-7'>
                            <img src={import.meta.env.BASE_URL + currentClient.image} className='size-[210px]' />
                            <div className='text-center'>
                                <h1 className='font-semibold text-[20px]'>{currentClient.fullName}</h1>
                                <p className='text-[#4EAF4E]'>{currentClient.job}</p>
                            </div>
                        </div>
                        <button
                            className='flex bg-[#F3F3F3] justify-end items-center p-2 gap-4 w-32 border border-[#F3F3F3] rounded-full absolute right-0'
                            onClick={handleNext}
                        >
                            <p>Next</p>
                            <img src={rightArrow} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
