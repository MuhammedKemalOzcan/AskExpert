import React, { useEffect } from 'react'
import socialmedia from "../../assets/socialmedia.svg"
import { useData } from '../../Context';
import { Link } from 'react-router-dom';

function Team() {

    const { members, fetchMembers, isLoading, error } = useData();

    useEffect(() => {
        fetchMembers();
    }, []);


    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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
                            member.id <= 3 &&
                            <Link
                                className='tag-wrapper flex flex-col items-center text-center gap-[25px] relative'
                                key={member.id}
                                to={`/team-single/${member.id}`}
                            >
                                <button>
                                    <img src={import.meta.env.BASE_URL + member.memberImage} className='rounded-[20px]' />
                                    <p className='tag absolute bottom-[34%] right-[5%] bg-[#181818] text-white rounded-[20px] py-1 px-5 hover:bg-[#FFCC4A]  '>{member.position}</p>
                                </button>
                                <h1>{member.name}</h1>
                                <p className='w-[82%]'>{member.memberDesc}</p>
                                <div className='flex gap-[29px] justify-center'>
                                    <img src={socialmedia} />
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default Team
