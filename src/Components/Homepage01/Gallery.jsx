import React, { useState } from 'react'
import bg from "../../assets/background.svg"
import plus from "../../assets/plus.svg"
import gallery1 from "../../assets/gallery1.svg"
import gallery2 from "../../assets/gallery2.svg"
import gallery3 from "../../assets/gallery3.svg"
import gallery4 from "../../assets/gallery4.svg"
import gallery5 from "../../assets/gallery5.svg"
import gallery6 from "../../assets/gallery6.svg"

function Gallery() {

    const [gallery, setGallery] = useState([
        { id: 1, title: "Taxes & Efficiency", image: gallery1 },
        { id: 2, title: "Audit & Evaluation", image: gallery2 },
        { id: 3, title: "Funds & Investment", image: gallery3 },
        { id: 4, title: "Finance & Restructring", image: gallery4 },
        { id: 5, title: "Investment Banking", image: gallery5 },
        { id: 6, title: "Financial & Projections", image: gallery6 }
    ]);
    return (
        <div className='w-full h-[1146px] flex justify-center'>
            <img className='bg-black absolute w-full ' src={bg} />
            <div className='flex flex-col relative text-white  top-[200px] '>
                <p className='border border-[#4EAF4E] bg-[#4EAF4E] text-white rounded-[20px] px-4 w-28 h-6' >PROCESS</p>
                <div className='w-[730px] flex items-end '>
                    <h1 className='font-bold text-[45px] leading-[52.2px] '>Our client, global analytical techno company, wanted to build market.</h1>
                    <button className='yellow-button relative left-80 flex justify-center items-center' >
                        <p className='font-semibold whitespace-nowrap text-[18px]'>More Gallery</p>
                    </button>
                </div>
                <div className='w-[1050px] gap-4 relative grid grid-cols-3 border border-[#FAFAFA] bg-[#FAFAFA] rounded-[30px] p-4 top-16' >
                    {
                        gallery.map((g) => (
                            <img key={g.id} src={g.image} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Gallery
