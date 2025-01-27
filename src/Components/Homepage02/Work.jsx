import React, { useEffect, useState } from 'react'
import bg from '../../assets/workbg.svg'
import axios from 'axios'
import plus from "../../assets/plus.svg"
import { Link, useNavigate } from 'react-router-dom';

function Work() {

    const [galleries, setGalleries] = useState([]);
    const navigate = useNavigate();

    const fetchGalleries = async () => {
        const response = await axios.get("https://localhost:7287/api/Galleries");
        setGalleries(response.data);
    }

    useEffect(() => {
        fetchGalleries();
    }, [])

    return (
        <div className='w-full h-[1300px] relative flex justify-center items-center '>
            <img src={bg} className='brightness-[0.11] relative' />
            <div className="container mx-auto px-4 absolute">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <p className="bg-green-500 text-white rounded-full px-4 py-1 inline-block text-sm">WORK</p>
                        <h1 className="big-text text-white">My latest project</h1>
                    </div>
                    <button
                        onClick={() => navigate("/work")}
                        className="yellow-button">
                        More Work
                    </button>
                </div>
                {/* Grid Yapısı */}
                <div className="grid grid-cols-3 gap-4">
                    {
                        galleries.map((item) => (
                            <Link
                                className='relative group'
                                key={item.id}
                                to={`/case-single/${item.id}`}
                            >
                                <img src={import.meta.env.BASE_URL + item.image} className='h-[308px] w-[360px] rounded-[20px] group-hover:brightness-50 ' />
                                <button>
                                    <img src={plus} className='absolute top-2 right-24 opacity-0 group-hover:opacity-100 ' />
                                </button>
                                <h1 className='text-[#FFFFFF] font-semibold text-[25px] leading-[29px] opacity-0 group-hover:opacity-100 absolute bottom-20 left-4 '>{item.title}</h1>
                                <p className='text-[#FFCC4A] opacity-0 group-hover:opacity-100 absolute bottom-12 left-4 '>{item.field}</p>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Work
