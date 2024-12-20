import React from 'react'
import process from "../../assets/process.svg"
import wallet from "../../assets/wallet.svg"
import settings from "../../assets/settings-vector.svg"
import trading from "../../assets/trading.svg"
function Process() {
    return (
        <div className='w-full h-[885px] flex justify-center items-center'>
            <div className='w-[67%] h-[67%] flex items-center gap-20 '>
                <img src={process} className='w-[57%] h-[81%] ' />
                <div className='flex flex-col gap-[39px] w-[35%] '>
                    <div>
                        <p className='yellow-tag w-[120px] px-4  '>PROCESS</p>
                        <h1 className='text-[45px] font-bold  leading-[52.2px]'>Our Consuting Service Development</h1>
                    </div>
                    <div>
                        <div className='flex items-center gap-6'>
                            <img src={wallet} className='size-7 ' />
                            <h1 className='text-[20px] font-semibold  leading-[23.2px]' >Banking and Finance</h1>
                        </div>
                        <p className='ml-[52px]' >Professionally fashion wireless leadership rather than prospective experiences my cardinate clicks-and-mortar testing whereas.</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-6'>
                            <img src={settings} className='size-7 ' />
                            <h1 className='text-[20px] font-semibold  leading-[23.2px]'>Logistic and Transportation</h1>
                        </div>
                        <p className='ml-[52px]'>Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes.</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-6'>
                            <img src={trading} className='size-7 ' />
                            <h1 className='text-[20px] font-semibold  leading-[23.2px]'>Trading</h1>
                        </div>
                        <p className='ml-[52px]'>Uniquely matrix economically sound value through cooperative technology parallel task fully researched data and enterprise.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process
