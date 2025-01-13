import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import arrowRight from "../../assets/arrow-right.svg"
import arrowLeft from "../../assets/arrow.svg"

function Services({services}) {

  const { id } = useParams();
  const service = services.find((s) => id === s.id);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === service.details.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? service.details.length - 1 : prev - 1))
  }

  return (
    <div className='w-full h-[893px] bg-[#F5F5F5] flex justify-end items-center '>
      <div className='w-[84%] h-[67%] flex flex-col gap-[70px] '>
        <div className='w-[74%] h-[38%] flex justify-between'>
          <div className='w-[54%] h-full flex flex-col gap-4 '>
            {
              services.map((service) => (
                <div>
                  <img src={import.meta.env.BASE_URL + service.image} className='size-24' />
                  <h1 className='big-text'>{service.header}</h1>
                  <p>{service.content}</p>
                </div>
              ))
            }
          </div>
          <div className='flex items-end gap-[26px] '>
            <button
              onClick={handlePrev}
            >
              <img src={arrowLeft} className='size-16' />
            </button>
            <button
              onClick={handleNext}
            >
              <img src={arrowRight} className='size-16' />
            </button>
          </div>
        </div>

        <div className='w-full h-[50%] flex gap-11 '>
          {
            serviceData.map((data, index) => (
              <div
                key={data.id}
                className={`${activeIndex === index ?
                  "bg-[#181818] text-white w-[22%] h-full flex flex-col rounded-[20px] py-11 px-9 gap-[10px] "
                  :
                  "bg-[#EBEBEB] w-[22%] h-[82%] flex flex-col rounded-[20px] py-11 px-9 gap-[10px]"}`}
              >
                <img
                  src={import.meta.env.BASE_URL + data.imagePath}
                  className={`${activeIndex === index ? "bg-[#FFCC4A] size-8 " : "size-8 "}`}
                />
                <h1 className='font-semibold text-[25px] leading-[30px] '>{data.header}</h1>
                <p>{d.detailContent}</p>

              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services
