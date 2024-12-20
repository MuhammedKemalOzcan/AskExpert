import React, { useState } from 'react'
import member1 from "../../assets/member1.svg"
import member2 from "../../assets/member2.svg"
import member3 from "../../assets/member3.svg"
import insta from "../../assets/instagram.svg"
import fb from "../../assets/facebook.svg"
import tw from "../../assets/Twitter.png"

function Team() {

    const [members, setMembers] = useState([
        { id: 1, img: member1, position: "CEO at Company", name: "Sarah Jasmine", info: "Leverage agile frameworks to provide a robust synopsis for high level overviews." },
        { id: 2, img: member2, position: "Manager", name: "John Carter", info: "Leverage agile frameworks to provide a robust synopsis for high level overviews." },
        { id: 3, img: member3, position: "CEO at Company", name: "Daisy Stella", info: "Leverage agile frameworks to provide a robust synopsis for high level overviews." },
    ])

    return (
        <div className='w-full h-[1181px] bg-[#F5F5F5] flex justify-center items-center  '>
            <div className='w-[63%] h-[69%] flex flex-col gap-12'>
                <div className='w-[53%] h-[26%] flex flex-col gap-[22px] '>
                    <p className='bg-[#FFCC4A] rounded-[20px] w-[120px] px-3 whitespace-nowrap '>OUR TEAM</p>
                    <h1 className='font-bold text-[45px] leading-[52.2px] '>We champion the bold to achieve the extraordinary</h1>
                    <p>Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team.</p>
                </div>
                <div className='flex gap-[51px]'>
                    {
                        members.map((member) => (
                            <div className='tag-wrapper flex flex-col items-center text-center gap-[25px] relative '>
                                <button>
                                    <img src={member.img} />
                                    <p className='tag absolute bottom-[34%] right-[5%] bg-[#181818] text-white rounded-[20px] py-1 px-5 hover:bg-[#FFCC4A]  '>{member.position}</p>
                                </button>
                                <h1>{member.name}</h1>
                                <p className='w-[82%]'>{member.info}</p>
                                <div className='flex gap-[29px] justify-center'>
                                    <img src={insta} />
                                    <img src={fb} />
                                    <img src={tw} />
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Team
