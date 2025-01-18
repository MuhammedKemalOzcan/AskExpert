import React, { useEffect, useState } from 'react'
import { useData } from '../../Context'
import { useParams } from 'react-router-dom';
import bg from "../../assets/blog-bg.png"
import quote from "../../assets/quote.svg"
import memberbg from "../../assets/member-bg.svg"
import memberpattern from "../../assets/member-pattern.svg"
import socialMedia from "../../assets/socialmedia.svg"
import axios from 'axios';


function Content() {

    const { fetchBlogDetails, blogDetails, fetchMembers, members } = useData();
    const [blogSingle, setBlogSingle] = useState(null);
    const { id } = useParams();

    const fetchBlogById = async (id) => {
        try {
            const response = await axios.get(`https://localhost:7287/api/Blogs/${id}`);
            console.log(response.data);
            setBlogSingle(response.data);
        } catch (error) {
            console.error("blog verileri çekilirken hata oluştu: ", error);
        };
    }

    useEffect(() => {
        fetchBlogDetails(id);
        fetchMembers();
        fetchBlogById(id);
    }, []);

    if (!blogSingle || blogSingle.length === 0) {
        return <div>Loading...</div>
    }

    const currentMember = members.find((member => member.id === blogSingle.memberId));
    console.log(currentMember);

    const renderBlogContent = (blogDetails) => {
        switch (blogDetails.type) {
            case "h1text":
                return <h1 className='big-text'>{blogDetails.content}</h1>;
            case "h2text":
                return (
                    <div className='blog-bg relative'>
                        <img src={bg} className='absolute' />
                        <img src={quote} className='absolute top-[10%]' />
                        <h2 className='text-white text-[32px] leading-[45px] w-[900px] h-[180px] '>{blogDetails.content}</h2>
                    </div>

                );
            case "ptext":
                return <p className='text-[#595566]'>{blogDetails.content}</p>;
            case "listtext":
                return <li className='text-[#595566]'>{blogDetails.content}</li>;
            case "image":
                return <img className='w-full h-[545px] rounded-[20px] ' src={import.meta.env.BASE_URL + blogDetails.content} />;
            case "br":
                return <br />
            case "bannertext":
        }
    }
    return (
        <div className='w-full h-auto justify-center flex flex-col items-center'>
            <div className='w-[62.5%] h-auto flex flex-col gap-9'>
                {
                    blogDetails.map((data) => (
                        <div key={data.id}>
                            {renderBlogContent(data)}
                        </div>
                    ))
                }
                <div className='w-[67%] h-[325px] rounded-[20px] flex relative'>
                    <img src={memberbg} />
                    <img src={memberpattern} className='size-56 absolute top-10' />
                    <img src={import.meta.env.BASE_URL + currentMember.memberImage} className=' absolute top-16 left-16 size-48 rounded-[50%]' />
                    <div className='absolute text-white flex flex-col left-80 top-20 gap-4 w-[56%] '>
                        <h1>{currentMember.name}</h1>
                        <p>{currentMember.position}</p>
                        <p>{currentMember.memberDesc}</p>
                        <img src={socialMedia} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
