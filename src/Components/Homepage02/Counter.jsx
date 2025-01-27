import React from 'react'
import clients from "../../assets/clients.png"
import experts from "../../assets/export.png"
import products from "../../assets/products.png"
import awards from "../../assets/awards.png"

function Counter() {
    return (
        <div className='w-full h-[284px] flex justify-center items-center '>
            <div className=' w-[64%] h-[79px] flex gap-[80px] '>
                <div className='flex justify-center items-center gap-3'>
                    <img src={clients} />
                    <div className='flex flex-col'>
                        <h1 className='big-text'>1542+</h1>
                        <p>Satisfied Clients</p>
                    </div>
                </div>
                <div className='border'></div>
                <div className='flex justify-center items-center gap-3'>
                    <img src={experts} />
                    <div className='flex flex-col'>
                        <h1 className='big-text'>182</h1>
                        <p>Expert Team</p>
                    </div>
                </div>
                <div className='border'></div>
                <div className='flex justify-center items-center gap-3'>
                    <img src={products} />
                    <div className='flex flex-col'>
                        <h1 className='big-text'>285</h1>
                        <p>Active Products</p>
                    </div>
                </div>
                <div className='border'></div>
                <div className='flex justify-center items-center gap-3'>
                    <img src={awards} />
                    <div className='flex flex-col'>
                        <h1 className='big-text'>28+</h1>
                        <p>Awards Winning</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter
