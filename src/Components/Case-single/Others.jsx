import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function Others() {

    const [gallery, setGallery] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchGallery = async () => {
        const response = await axios.get("https://localhost:7287/api/Galleries");
        setGallery(response.data);
    };

    useEffect(() => {

        fetchGallery();
    }, []);

    const otherGalleries = gallery.filter((others) => others.id !== parseInt(id));


    return (
        <div className='w-full h-[933px] flex flex-col justify-center items-center gap-8 '>
            <h1 className='text-bold text-[40px] leading-[46px]'>More Case Studies</h1>
            <div className='w-[64%] bg-[#D9D9D9] h-[426px] px-6 py-10 flex justify-center items-center gap-6 '>
                {
                    otherGalleries.slice(0, 3).map((other) => (
                        <Link className='w-[100%] h-[360px] rounded-[20px] flex justify-center items-center' to={`/case-single/${other.id}`}>
                            <img
                                key={other.id}
                                className='w-[80%] h-[80%] rounded-[20px]'
                                src={import.meta.env.BASE_URL + other.image}
                            />
                        </Link>

                    ))
                }
            </div>
            <button
                onClick={() => navigate("/work")}
                className=' flex gap-3 px-9 py-4 w-[255px] bg-black rounded-[42px] border border-black text-white hover:bg-white hover:text-black '>
                <p>Browse All Case Studies</p>
            </button>
        </div>
    )
}

export default Others
