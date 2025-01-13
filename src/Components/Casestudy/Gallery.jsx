import React, { useState } from 'react'
import gallery1 from "../../assets/gallery1.jpg"
import gallery2 from "../../assets/gallery2.svg"
import gallery3 from "../../assets/gallery3.svg"
import gallery4 from "../../assets/gallery4.svg"
import gallery5 from "../../assets/gallery5.svg"
import gallery6 from "../../assets/gallery6.svg"
import plus from "../../assets/plus.svg"
import { Link } from 'react-router-dom'

function Gallery({ gallery }) {

    const [selected, setSelected] = useState("All");

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
                        categories.map((c,index) => (
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
                        filteredItems.map((g) => (
                            <Link
                                className='relative group'
                                to={`/case-single/${g.id}`}
                            >
                                <img key={g.id} src={g.image} className='w-[100%] h-[90%] rounded-[20px] group-hover:brightness-50' />
                                <button>
                                    <img src={plus} className='absolute top-2 right-8 opacity-0 group-hover:opacity-100 ' />
                                </button>
                                <h1 className='text-[#FFFFFF] font-semibold text-[25px] leading-[29px] opacity-0 group-hover:opacity-100 absolute bottom-[20%] left-4 '>{g.title}</h1>
                                <p className='text-[#FFCC4A] opacity-0 group-hover:opacity-100 absolute bottom-12 left-4 '>{g.field}</p>
                            </Link>

                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Gallery
