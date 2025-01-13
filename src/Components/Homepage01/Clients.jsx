import React, { useState } from 'react'
import client1 from "../../assets/1.svg"
import client2 from "../../assets/2.svg"
import client3 from "../../assets/3.svg"
import client4 from "../../assets/4.svg"
import client5 from "../../assets/5.svg"
import client6 from "../../assets/6.svg"

function Clients() {

    const [clients, setClients] = useState([
        { id: 1, image: client1 },
        { id: 2, image: client2 },
        { id: 3, image: client3 },
        { id: 4, image: client4 },
        { id: 5, image: client5 },
        { id: 6, image: client6 }
    ])

    return (
        <div className='flex justify-around items-center'>
            {
                clients.map((client) => (
                        <img src={client.image} key={client.id} />
                ))
            }
        </div>
    )
}

export default Clients
