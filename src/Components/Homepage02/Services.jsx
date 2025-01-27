import axios from 'axios'
import React, { useEffect, useState } from 'react'
import left from "../../assets/leftarrow.svg"
import right from "../../assets/rightarrow.svg"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { propTypesNextArrow } from '@material-tailwind/react/types/components/carousel';

function Services() {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const response = await axios.get("https://localhost:7287/api/Galleries");
            console.log(response.data);
            setServices(response.data);
        }
        fetchServices();
    }, []);

    var settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    };

    return (
        <div className='w-full h-[1182px] bg-[#F5F5F5] flex flex-col justify-center items-center' >
            <div className='flex flex-col items-center w-[62%] gap-16 '>
                <div className='flex flex-col w-[781px] h-[104px] flex items-center'>
                    <p className='bg-[#4EAF4E] text-white rounded-[20px] px-4 w-30 h-6 text-center' >SERVICES</p>
                    <h1 className='font-semibold text-[45px] ' >Get Control Over Your Business I take</h1>
                    <h1 className='font-semibold text-[45px] ' >your finance to next level</h1>
                </div>
            </div>
            <Slider {...settings} className='slick flex'>
                {
                    services.map((service) => (
                        <div className='bg-[#EBEBEB] flex flex-col h-[530px] w-[387px] rounded-[20px] px-6 pb-10 pt-6 ' >
                            <img src={service.image} className='w-[100%] h-[253px] rounded-[30px] ' />
                            <h1 className='font semibold text-[25px] leading-[29px]'>{service.title}</h1>
                            <p className='text-[#595566] mt-2 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci dolores recusandae debitis. Deleniti at doloribus fugiat, explicabo quo optio officia. Est non sequi tempore exercitationem iure sapiente, odio sed suscipit.</p>
                            <button className='w-[165px] bg-white py-3 px-9 rounded-[55px] mt-10 hover:bg-black hover:text-white '>
                                <p>Learn More</p>
                            </button>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Services
