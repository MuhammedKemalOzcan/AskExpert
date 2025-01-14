import React, { useEffect, useState } from 'react'
import number1 from "../../assets/number1.svg"
import number2 from "../../assets/number2.svg"
import number3 from "../../assets/number3.svg"
import axios from 'axios'

function Process() {

    const [content, setContent] = useState([]);

    const fetchContent = async () => {
        const response = await axios.get("https://localhost:7287/api/Processes");
        setContent(response.data);
    };

    useEffect(() => {
        fetchContent();
    }, []);

    return (
        <div className='w-full h-[1025px] flex justify-center items-center'>
            <div className='w-[68%] h-[723px] flex'>
                <div className='w-[40%] h-[683px] '>
                    <p className='w-[127px] h-6 border border-[#4EAF4E] bg-[#4EAF4E] text-white rounded-[20px] px-6 w-24 h-6' >PROCESS</p>
                    <h1 className='font-semibold text-[45px] leading-[52px] '>There have some easy steps to join with us!</h1>
                    <p className='mb-10 mt-4' >Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className='border'></div>
                    <div className='flex gap-8 mt-7 mb-7'>
                        <img className='size-12' src={number1} />
                        <div className='flex flex-col'>
                            <h2 className='text-[20px] leading-[23.2px] font-semibold'>Setup Account</h2>
                            <p>We understand the importance of approaching each work integrally.</p>
                        </div>
                    </div>
                    <div className='border border-b'></div>
                    <div className='flex gap-8 mt-7 mb-7'>
                        <img className='size-12' src={number2} />
                        <div className='flex flex-col'>
                            <h2 className='text-[20px] leading-[23.2px] font-semibold'>Consult with us</h2>
                            <p>Increase social reach and productivity with our App Directory, a collection.</p>
                        </div>
                    </div>
                    <div className='border border-b'></div>
                    <div className='flex gap-8 mt-7 mb-7'>
                        <img className='size-12' src={number3} />
                        <div className='flex flex-col'>
                            <h2 className='text-[20px] leading-[23.2px] font-semibold'>Payment & Boost</h2>
                            <p>We encourage every team member to be a whole person. We have a flexible.</p>
                        </div>

                    </div>
                </div>
                <div>
                </div>
                <div className='flex flex-col ml-28 w-[55%] gap-2'>
                    <div className='w-[90%]'>
                        <p className='border border-[#FFCC4A] w-[275px] bg-[#FFCC4A] rounded-[20px] px-4 '>GROWING WITH OUR CLIENTS</p>
                        <h1 className='text-[45px]' >30 Years of Experience</h1>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps.</p>
                        <br />
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    </div>
                    <div className='w-[84%] grid grid-cols-2 gap-4'>
                        {
                            content.map((c) => (
                                <div key={c.id} className='flex flex-col border border-[#EAEAEA] bg-[#EAEAEA]  h-[100%] rounded-[20px] px-8 py-6 gap-2 '>
                                    <img className='size-12' src={import.meta.env.BASE_URL + c.imagePath} />
                                    <h2 className='font-semibold text-[20px] leading-[23.2px]'>{c.header}</h2>
                                    <p>{c.content}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process
