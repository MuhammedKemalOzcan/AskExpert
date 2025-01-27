import React, { useState } from 'react'
import box from "../../assets/messagebox.svg"
import pattern from "../../assets/pattern.svg"
import { Link } from 'react-router-dom'

function Footer2() {

    const helpLinks = ([
        { id: 1, title: "Customer Services", path: "/services" },
        { id: 2, title: "IT Department", path: "/team" },
        { id: 3, title: "About Our Company", path: "/about" },
        { id: 4, title: "Business Growth", path: "/work" },
        { id: 5, title: "Make An Appointment", path: "/contact" },
    ])
    const UtilityPages = ([
        { id: 1, title: "Start Here", path: "/" },
        { id: 2, title: "404 Not Found", path: "/404" },
        { id: 3, title: "Password Protected", path: "/admin" },
        { id: 5, title: "Changelog", path: "/changelog" },
    ])

    return (
        <div className='w-full h-[340px] flex justify-center items-center'>
            <div className='w-[63%] h-[340px] flex gap-12 '>
                <div>
                    <div className='flex gap-3 items-center'>
                        <img src={box} />
                        <h1 className='font-semibold text-[30px] leading-[31.5px] '>Consultalk</h1>
                    </div>
                    <img src={pattern} className='size-44 mt-10' />
                </div>
                <div className='flex flex-col text-black gap-2'>
                    <h1 className='text-[20px] font-bold'>Help Link</h1>
                    {
                        helpLinks.map((help) => (
                            <Link
                                key={help.id}
                                className='flex items-center gap-2'
                                to={help.path.startsWith("/") ? help.path : `/${product.url}`}
                            >
                                <ul className='flex gap-2 text-[#595566]'>
                                    <span>
                                        •
                                    </span>
                                    <li>{help.title}</li>
                                </ul>
                            </Link>
                        ))
                    }
                </div>
                <div className='flex flex-col text-black gap-2'>
                    <h1 className='text-[20px] font-bold'>Utility Pages</h1>
                    {
                        UtilityPages.map((utility) => (
                            <Link
                                key={utility.id}
                                className='flex items-center gap-2'
                                to={utility.path.startsWith("/") ? utility.path : `/${product.url}`}
                            >
                                <ul className='flex gap-2 text-[#595566]'>
                                    <span>
                                        •
                                    </span>
                                    <li>{utility.title}</li>
                                </ul>
                            </Link>
                        ))
                    }
                </div>
                <div className='w-[20%] flex flex-col gap-5'>
                    <h1 className='font-bold'>Address</h1>
                    <h1 className='font-bold'>Business Consulting</h1>
                    <p>Graaf Florisstraat 22A,3021 CH RotterdamNetherlands</p>
                    <div className='border'></div>
                    <h1 className='font-bold'>Financial Consulting.</h1>
                    <p>365 Gran Via de CortsCatalanes, BA 08015</p>
                </div>
                <div className='w-[20%] flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold'>Work Inquiries</h1>
                        <p>Interested in working with us?</p>
                        <p className='font-bold'>info@consulting.com</p>
                    </div>
                    <p>Any question call</p>
                    <p className='font-bold'>(01) 25444 32001</p>
                    <p className='font-semibold'>Fb. / Ig. / Tw. / Be.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer2
