import React, { useState } from 'react'
import client1 from "../../assets/1.svg"
import client2 from "../../assets/2.svg"
import client3 from "../../assets/3.svg"
import client4 from "../../assets/4.svg"
import client5 from "../../assets/5.svg"
import client6 from "../../assets/6.svg"
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
        { id: 1, image: client1 },
        { id: 2, image: client2 },
        { id: 3, image: client3 },
        { id: 4, image: client4 },
        { id: 5, image: client5 },
        { id: 6, image: client6 }
    ])

    return (
        <Slider {...settings} className='flex justify-center w-full h-40 gap-32'>
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
