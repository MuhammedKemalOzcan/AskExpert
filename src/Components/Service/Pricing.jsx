import React, { useState } from 'react'
import bg from "../../assets/plan-background.svg"
import points from "../../assets/points.svg"
import { useNavigate } from 'react-router-dom'


function Pricing() {

    const navigate = useNavigate();

    const [plans, setPlans] = useState([
        { id: 1, img: bg, plan: "Basic Plan", text: "The argument in favor of using to filler text goes something.", price: "35", points: ["24/7 system monitoring", "Security management", "Secure finance backup", "Remote support"] },
        { id: 2, img: bg, plan: "Standard Plan", text: "The argument in favor of using to filler text goes something.", price: "56", points: ["24/7 system monitoring", "Security management", "Secure finance backup", "Remote support"] },
        { id: 3, img: bg, plan: "Standard Plan", text: "The argument in favor of using to filler text goes something.", price: "75", points: ["24/7 system monitoring", "Security management", "Secure finance backup", "Remote support"] }

    ])

    return (
        <div id='pricing' className='w-full h-[1016px] bg-[#F5F5F5] flex justify-center items-center '>
            <div className='flex flex-col w-[62.5%] h-[71%]flex items-center gap-6 '>
                <p className='green-tag px-3.5 '>PRICING</p>
                <h1 className='mt-4 font-bold text-[45px] leading-[52.2px] '>OUR PRICING PLAN</h1>
                <div className='flex w-full h-[81%] gap-12 justify-center '>
                    {
                        plans.map((plan) => (
                            <div key={plan.id} className='w-[367px] relative flex flex-col pt-5 px-[22px] bg-[#FFFFFF] rounded-[20px] pb-10 gap-[10px]'>
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
                    }
                </div>
            </div>
        </div>
    )
}

export default Pricing
