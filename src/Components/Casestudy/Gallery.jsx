import React, { useEffect, useState } from 'react'
import plus from "../../assets/plus.svg"
import { Link } from 'react-router-dom'
import { useData } from '../../Context';
import axios from 'axios';

function Gallery() {

    const [selected, setSelected] = useState("All");
    const { gallery, fetchGallery, isLoading, error } = useData();

    useEffect(() => {
        fetchGallery();
    }, []);


    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!gallery) return <div>No data found for this gallery.</div>;

    const categories = [
        "All",
        "Taxes & Efficiency",
        "Investment banking",
        "Financial Plan",
        "Audit & Evaluation",
    ];

    const filteredItems =
        selected === "All"
            ? gallery
            : gallery.filter((item) => item.field === selected);


    return (
        <div className='w-full h-[1210px] flex justify-center items-center'>
            <div className='w-[59%] h-[79%] flex flex-col items-center gap-[10px] '>
                <div className='bg-[#181818] w-[85.5%] h-[10%] py-8 px-12 rounded-[30px] gap-[10px] flex items-center justify-around text-white '>
                    {
                        categories.map((c, index) => (
                            <button
                                key={index}
                                className={`
                                    ${selected === c ?
                                        "text-[#FFCC4A] border-b border-[#FFCC4A]" :
                                        "text-white"
                                    }`}
                                onClick={() => setSelected(c)}
                            >
                                <h1>{c}</h1>
                            </button>
                        ))
                    }
                </div>
                <div className='w-full h-[80%] bg-[#F5F5F5] grid grid-cols-3 mt-[71px] rounded-[30px] gap-[10px] py-6 px-6  '>
                    {
                        gallery.length > 1 ?
                            filteredItems.map((g) => (
                                <Link
                                    className='group relative h-[330px] '
                                    to={`/case-single/${g.id}`}
                                    key={g.id}
                                >
                                    <img src={g.image} className='w-[100%] h-[330px] rounded-[20px] group-hover:brightness-50' />
                                    <button>
                                        <img src={plus} className='absolute top-2 right-8 opacity-0 group-hover:opacity-100 ' />
                                    </button>
                                    <h1 className='text-[#FFFFFF] font-semibold text-[25px] leading-[29px] opacity-0 group-hover:opacity-100 absolute bottom-[10%] left-[5%]'>{g.title}</h1>
                                    <p className='text-[#FFCC4A] opacity-0 group-hover:opacity-100 absolute bottom-[3%] left-[5%]'>{g.field}</p>
                                </Link>

                            ))
                            :
                            <div>

                            </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Gallery
