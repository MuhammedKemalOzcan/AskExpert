import React, { useState } from 'react'
import messagebox from "../../assets/Messagebox.svg"
import phone from "../../assets/phone.svg"
import { NavLink } from 'react-router-dom';

function Header() {

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Work", path: "/work" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <div className='w-full h-36 bg-[#1B1B1BE8] flex items-center justify-center'>
            <div className='w-[76%] h-14 flex items-center justify-around justify-self-end'>
                <div className='w-[10%] h-8 flex items-center'>
                    <img src={messagebox} />
                    <h1 className='font-semibold text-[30px] leading-[31.5px] text-white'>AskExperts</h1>
                </div>
                <div className='w-[40%] h-8 ml-56'>
                    <ul className="flex justify-center gap-[30px]">
                        {menuItems.map((item) => (
                            <li key={item.name} className="cursor-pointer relative">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `relative ${isActive ? "text-[#5AB612]" : "text-white"}`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span className={`mr-2 ${isActive ? "text-green-500" : "text-gray-400"}`}>
                                                •
                                            </span>
                                            {item.name}
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='w-[25%] h-full flex justify-end'>
                    <button className='w-[67%] h-full flex bg-[#FFFFFF] rounded-[42px] justify-center items-center'>
                        <img className='size-10' src={phone} />
                        <p className='font-semibold text-[18px] py-2 pr-6 pl-2.5 '>+ (888) 452 1505</p>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Header
