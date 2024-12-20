import React, { useState } from 'react'
import bg from "../../assets/footerbg.svg"
import messagebox from "../../assets/messagebox.svg"



function Footer() {

    const [product, setProduct] = useState([
        { id: 1, header: "Product", name: "Service" },
        { id: 2, header: "Product", name: "FAQ" },
        { id: 3, header: "Product", name: "Single Service" },
        { id: 4, header: "Product", name: "Get Quote" },
        { id: 5, header: "Product", name: "Prices" },
    ])
    const [company, setCompany] = useState([
        { id: 1, header: "Company", name: "About" },
        { id: 2, header: "Company", name: "News" },
        { id: 5, header: "Company", name: "Contacts" },
        { id: 3, header: "Company", name: "Testimonials" },
        { id: 4, header: "Company", name: "Our Team" },
        { id: 6, header: "Company", name: "Our approach" }
    ])
    return (
        <div className='footer w-full h-[489px] flex justify-center items-center relative'>
            <img className='w-full absolute' src={bg} />
            <div className='w-[65%] h-[236px] relative'>
                <div className='flex flex-col w-[30%] text-white mt-6'>
                    <div className='flex mb-8'>
                        <img src={messagebox} />
                        <h1 className='font-semibold text-[30px]  leading-[31.5px] ml-2 '>AskExperts</h1>
                    </div>
                    <p className='mb-16'>Fb. / Ig. / Tw. / Be.</p>
                </div>
            </div>

            <div className='flex absolute gap-[100px] ml-40'>
                <div className='border-l border-[#707070]'></div>
                <div className='flex flex-col text-white'>
                    <h1 className='text-[20px]'>Product</h1>
                    <div className='border w-[32px] h-[3px] border-[#FFCC4A] bg-[#FFCC4A] mb-4' ></div>
                    {
                        product.map((p) => (
                            <div key={p.id} className='flex items-center gap-2'>
                                <ul>
                                    <li>{p.name}</li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
                <div className='flex flex-col text-white'>
                    <h1 className='text-[20px]'>Company</h1>
                    <div className='border w-[32px] h-[3px] border-[#FFCC4A] bg-[#FFCC4A] mb-4' ></div>
                    {
                        company.map((c) => (
                            <div key={c.id} className='flex items-center gap-2'>
                                <ul className='footer'>
                                    <li>{c.name}</li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
                <div className='flex flex-col text-white w-[232px]'>
                    <h1 className='text-[20px]'>Address</h1>
                    <div className='border w-[32px] h-[3px] border-[#FFCC4A] bg-[#FFCC4A] mb-4' ></div>
                    <p>1700 W Blancke St, kiyev port south USA, America</p>
                    <button
                        className='bg-white text-black py-4 px-6 rounded-full mt-8 '
                    >
                        <p>Book an Appoitment</p>
                    </button>
                </div>

            </div>
        </div>

    )
}

export default Footer
