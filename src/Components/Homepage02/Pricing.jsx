import React, { useState } from 'react'
import bg from "../../assets/plan-background.svg"
import points from "../../assets/points.svg"
import { useNavigate } from 'react-router-dom';


function Pricing() {

    const [plans, setPlans] = useState([
        { id: 1, img: bg, plan: "Basic Plan", time: "monthly", text: "The argument in favor of using to filler text goes something.", price: "35", points: ["24/7 system monitoring", "Security management", "Secure finance backup", "Remote support"] },
        { id: 2, img: bg, plan: "Standard Plan", time: "monthly", text: "The argument in favor of using to filler text goes something.", price: "56", points: ["24/7 system monitoring", "Security management", "Secure finance backup", "Remote support"] },
        { id: 3, img: bg, plan: "Standard Plan", time: "yearly", text: "The argument in favor of using to filler text goes something.", price: "75", points: ["24/7 system monitoring", "Security management", "Secure finance backup", "Remote support"] }

    ])
    const [current, setCurrent] = useState("monthly");
    const navigate = useNavigate();

    return (
        <div className="bg-gray-50 h-[1053px] flex items-center justify-center p-6">
            <div className="max-w-5xl w-full flex gap-10">
                <div className="flex flex-col gap-4 items-start w-[41%]">
                    <h2 className="green-tag px-3">CHOOSE YOUR PLAN</h2>
                    <h1 className="big-text">
                        Save With Our Pricing Packages
                    </h1>
                    <p className="text-[#595566]">
                        Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.
                    </p>
                    <div className="flex justify-center items-center gap-4 mb-10">
                        <button
                            onClick={() => setCurrent("monthly")}
                            className={`px-6 py-2 text-sm text-black bg-white rounded-full transition focus:bg-[#4EAF4E] `}>
                            Monthly
                        </button>
                        <button
                            onClick={() => setCurrent("yearly")}
                            className="px-6 py-2 text-sm text-black bg-white rounded-full transition focus:bg-[#4EAF4E]">
                            Yearly
                        </button>
                    </div>
                </div>

                {/* Kartlar */}
                <div className="grid md:grid-cols-2 gap-28">
                    {
                        current === "monthly" ?
                            plans.map((plan) => (
                                plan.time === "monthly" &&
                                <div key={plan.id} className='w-[367px] relative flex flex-col pt-5 px-[22px] bg-[#FFFFFF] rounded-[20px] pb-10 gap-[20px]'>
                                    <div className='gap-8 flex flex-col text-start' >
                                        <img src={plan.img} className='w-[97%]' />
                                        <div className='absolute text-white left-12 top-16 w-[70%] '>
                                            <h1 className=' font-semibold text-[25px] leading-[29px]' >{plan.plan}</h1>
                                            <p>{plan.text}</p>
                                        </div>
                                        <div className='absolute text-white top-40 left-12 flex items-center gap-2 w-[60%]'>
                                            <h1 className='font-bold text-[50px] leading-[58px] '>${plan.price}</h1>
                                            <p className='bg-[#3E3E3E] rounded-[20px] px-[15px] w-[55%] text-center ' >MONTHLY</p>
                                        </div>
                                        <div className='flex flex-col w-[64%] h-[30%]  gap-4 '>
                                            {
                                                plan.points.map((p) => (
                                                    <p className='flex justify-start items-center'>
                                                        <img src={points} />
                                                        {p}
                                                    </p>
                                                ))
                                            }
                                        </div>
                                        <button
                                            onClick={() => navigate("/contact")}
                                            className=' bg-white border border-[#D6D6D6] py-4 px-[109px] rounded-[42px] hover:bg-[#FFCC4A] hover:border-[#FFCC4A] '>
                                            <p className='font-semibold text-[18px] leading-[29px] whitespace-nowrap '>Get This Plan</p>
                                        </button>
                                    </div>
                                </div>
                            ))
                            :
                            plans.map((plan) => (
                                plan.time === "yearly" &&
                                <div key={plan.id} className='w-[367px] relative flex flex-col pt-5 px-[22px] bg-[#FFFFFF] rounded-[20px] pb-10 gap-[10px]'>
                                    <div className='gap-8 flex flex-col text-start' >
                                        <img src={plan.img} className='w-[97%]' />
                                        <div className='absolute text-white left-12 top-16 w-[70%] '>
                                            <h1 className=' font-semibold text-[25px] leading-[29px]' >{plan.plan}</h1>
                                            <p>{plan.text}</p>
                                        </div>
                                        <div className='absolute text-white top-40 left-12 flex items-center gap-2 w-[60%]'>
                                            <h1 className='font-bold text-[50px] leading-[58px] '>${plan.price}</h1>
                                            <p className='bg-[#3E3E3E] rounded-[20px] px-[15px] w-[55%] text-center ' >YEARLY</p>
                                        </div>
                                        <div className='flex flex-col w-[64%] h-[30%]  gap-4 '>
                                            {
                                                plan.points.map((p) => (
                                                    <p className='flex justify-start items-center'>
                                                        <img src={points} />
                                                        {p}
                                                    </p>
                                                ))
                                            }
                                        </div>
                                        <button
                                            onClick={() => navigate("/contact")}
                                            className=' bg-white border border-[#D6D6D6] py-4 px-[109px] rounded-[42px] hover:bg-[#FFCC4A] hover:border-[#FFCC4A] '>
                                            <p className='font-semibold text-[18px] leading-[29px] whitespace-nowrap '>Get This Plan</p>
                                        </button>
                                    </div>
                                </div>
                            ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Pricing
