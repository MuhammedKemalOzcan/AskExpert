import axios from 'axios';
import React, { useEffect, useState } from 'react'
import quote from "../../assets/quote.png"
import arrow from "../../assets/arrow.svg"
import rightArrow from "../../assets/arrow-right.svg"

function Testimonials() {

    const [clients, setClients] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchClients = async () => {
        const response = await axios.get("https://localhost:7287/api/Clients");
        setClients(response.data);
    }
    console.log(clients);

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

    return (
        <div className='w-full h-[693px] flex justify-center items-center'>
            <div className='w-[64%] h-[66%] flex gap-12 relative '>
                {
                    clients.map((client, index) => (
                        <div className={`bg-[#F2F2F2] w-[31%] h-[341px] rounded-[20px] gap-6 px-7 py-10 flex flex-col relative ${index === currentIndex ? "h-[389px]" : ""} `}>
                            <div className='flex gap-2'>
                                <img src={client.image} className={`size-20`} />
                                <div className='flex flex-col items-center justify-center'>
                                    <h1>{client.fullName}</h1>
                                    <p className='green-tag px-4'>{client.job}</p>
                                </div>
                            </div>
                            <div className={`w-[98%] h-[152px] bg-white rounded-[20px] px-8 py-7 ${index === currentIndex ? "h-[313px]" : ""}`}>
                                <p>{client.comment}</p>
                            </div>
                            <img src={quote} className='w-[46px] h-[102px] absolute top-20 right-16 ' />
                        </div>

                    ))
                }
                <div>
                    <button
                        className='flex bg-[#F3F3F3] items-center w-32 border border-[#F3F3F3] rounded-full p-2 gap-4 absolute bottom-0 left-0'
                        onClick={handleNext}

                    >
                        <img src={arrow} />
                        <p>Prev</p>
                    </button>
                    <button
                        className='flex bg-[#F3F3F3] justify-end items-center p-2 gap-4 w-32 border border-[#F3F3F3] rounded-full absolute bottom-0 right-8'
                        onClick={handlePrev}
                    >
                        <p>Next</p>
                        <img src={rightArrow} />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Testimonials
