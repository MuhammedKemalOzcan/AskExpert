import React, { useEffect, useState } from 'react'
import messagebox from "../../assets/Messagebox.svg"
import phone from "../../assets/phone.svg"
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Header2() {

  const [menuItems, setMenuItems] = useState([]);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get("https://localhost:7287/api/MenuItems");
      setMenuItems(response.data);
    } catch (error) {
      console.error("hata oluştu: ", error);
    }
  }

  useEffect(() => {
    fetchMenuItems();
  }, [])

  return (
    <div>
      <div className='w-full h-36 bg-[#FFFFFFE8] flex items-center justify-center text-[#262626]'>
        <div className='w-[76%] h-14 flex items-center justify-around justify-self-end'>
          <div className='w-[10%] h-8 flex items-center'>
            <img src={messagebox} />
            <h1 className='font-semibold text-[30px] leading-[31.5px]'>AskExperts</h1>
          </div>
          <div className='w-[40%] h-8 ml-56'>
            <ul className="flex justify-center gap-[30px]">
              {menuItems.map((item) => (
                <li key={item.name} className="cursor-pointer relative ">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative ${isActive ? "text-[#5AB612]" : "text-[#262626]"}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className={`mr-2 ${isActive ? "text-green-500" : "text-[#262626]"}`}>
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
            <button className='w-[67%] h-full flex bg-[#F3F3F3] rounded-[42px] justify-center items-center'>
              <img className='size-10' src={phone} />
              <p className='font-semibold text-[18px] py-2 pr-6 pl-2.5 '>
                <a href="tel:+8884521505">
                  + (888) 452 1505
                </a>
              </p>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header2
