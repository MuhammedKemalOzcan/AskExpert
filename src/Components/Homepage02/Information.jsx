import React from 'react'
import education from "../../assets/education.svg"
import yellow from "../../assets/yellowroad.svg"

function Information() {
    return (
        <div className='w-full h-[820px] bg-[#F5F5F5] flex flex-col justify-center items-center'>
            <div className='w-[70%] h-[525px] flex flex-col items-center gap-4'>
                <div className='w-[20%] h-[84px] flex flex-col items-center '>
                    <p className='green-tag w-[130px] px-2'>INFORMATION</p>
                    <h1 className='big-text'>My Resume</h1>
                </div>
                <div className='w-full h-[425px] flex justify-between '>
                    <div className='w-[41.5%] h-full flex flex-col gap-[50px] '>
                        <p className='green-tag w-[130px] px-4'>EDUCATION</p>
                        <div className='w-full h-[150px] flex gap-5 '>
                            <img src={education} />
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#8A8A8A]'>Finance Сourse - New York (2018 - 2019)</p>
                                <h1 className='font-medium text-[25px]'>Financial Projections</h1>
                                <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                            </div>
                        </div>
                        <div className='w-full h-[150px] flex gap-5 '>
                            <img src={education} />
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#8A8A8A]'>Finance Сourse - New York (2018 - 2019)</p>
                                <h1 className='font-medium text-[25px]'>Corporate Finance</h1>
                                <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                            </div>
                        </div>
                    </div>
                    {/* sağ taraf */}
                    <div className='w-[41.5%] h-full flex flex-col gap-[50px] items-end'>
                        <p className='yellow-tag w-[130px] px-4'>EDUCATION</p>
                        <div className='w-full h-[150px] flex gap-5'>
                            <div className='flex flex-col gap-2 text-right'>
                                <p className='text-[#8A8A8A]'>Finance Сourse - New York (2018 - 2019)</p>
                                <h1 className='font-medium text-[25px]'>Finance Consultant</h1>
                                <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                            </div>
                            <img src={yellow} />
                        </div>
                        <div className='w-full h-[150px] flex gap-5 '>
                            <div className='flex flex-col gap-2 text-right'>
                                <p className='text-[#8A8A8A]'>Finance Сourse - New York (2018 - 2019)</p>
                                <h1 className='font-medium text-[25px]'>Financial Projections</h1>
                                <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                            </div>
                            <img src={yellow} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information
