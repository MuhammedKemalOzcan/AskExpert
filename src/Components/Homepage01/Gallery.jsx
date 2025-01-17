import React, { useEffect } from 'react'
import bg from "../../assets/background.svg"
import plus from "../../assets/plus.svg"
import { Link, useNavigate } from 'react-router-dom'
import { useData } from '../../Context';
function Gallery() {

    const { gallery, fetchGallery, isLoading, error } = useData();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/work");
    }

    useEffect(() => {
        fetchGallery();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!gallery) return <div>No data found for this gallery.</div>;

    return (
        <div className='w-full h-[1146px] flex justify-center'>
            <img className='bg-black absolute w-full ' src={bg} />
            <div className='flex flex-col relative text-white  top-[200px] '>
                <p className='border border-[#4EAF4E] bg-[#4EAF4E] text-white rounded-[20px] px-4 w-28 h-6' >PROCESS</p>
                <div className='w-[730px] flex items-end '>
                    <h1 className='font-bold text-[45px] leading-[52.2px] '>Our client, global analytical techno company, wanted to build market.</h1>
                    <button
                        className='yellow-button relative left-80 flex justify-center items-center'
                        onClick={handleNavigate}
                    >
                        <p className='font-semibold whitespace-nowrap text-[18px]'>More Gallery</p>
                    </button>
                </div>
                <div className='w-[1050px] gap-4 relative grid grid-cols-3 border border-[#FAFAFA] bg-[#FAFAFA] rounded-[30px] p-4 top-16' >
                    {
                        gallery.length > 1 ?
                            gallery.map((g) => (
                                <Link
                                    className='relative group'
                                    key={g.id}
                                    to={`case-single/${g.id}`}
                                >
                                    <img src={import.meta.env.BASE_URL + g.image} className='h-[308px] rounded-[20px] group-hover:brightness-50 ' />
                                    <button>
                                        <img src={plus} className='absolute top-2 right-4 opacity-0 group-hover:opacity-100 ' />
                                    </button>
                                    <h1 className='text-[#FFFFFF] font-semibold text-[25px] leading-[29px] opacity-0 group-hover:opacity-100 absolute bottom-20 left-4 '>{g.title}</h1>
                                    <p className='text-[#FFCC4A] opacity-0 group-hover:opacity-100 absolute bottom-12 left-4 '>{g.field}</p>
                                </Link>

                            )) :
                            <div></div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Gallery
