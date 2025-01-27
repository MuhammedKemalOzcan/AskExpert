import React, { useState } from 'react'
import clients1 from "../../assets/clients1.svg"
import clients2 from "../../assets/clients2.svg"
import clients3 from "../../assets/clients3.svg"
import clients4 from "../../assets/clients4.svg"
import clients5 from "../../assets/clients5.svg"
import clients6 from "../../assets/clients6.svg"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Clients() {

    var settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
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

    const [clients, setClients] = useState([
        { id: 1, image: clients1 },
        { id: 2, image: clients2 },
        { id: 3, image: clients3 },
        { id: 4, image: clients4 },
        { id: 5, image: clients5 },
        { id: 6, image: clients6 }
    ])

    return (
        <Slider {...settings} className='flex justify-center items-center w-full h-[237px] bg-[#181818] gap-32'>
            {
                clients.map((client) => (
                    <img
                        className='size-40'
                        key={client.id}
                        src={client.image}
                        alt={`Client ${client.id}`}
                    />
                ))
            }
        </Slider>

    )
}

export default Clients
