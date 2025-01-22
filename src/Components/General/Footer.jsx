import React, { useEffect } from 'react'
import bg from "../../assets/footerbg.svg"
import messagebox from "../../assets/messagebox.svg"
import { Link, useNavigate } from 'react-router-dom'
import { useData } from '../../Context';



function Footer() {

    const navigate = useNavigate();
    const { fetchCompanyFooter, companyFooter, fetchProductFooter, productFooter, isLoading } = useData();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
        fetchCompanyFooter();
        fetchProductFooter();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>; // Yükleme tamamlanmadan veri gösterme
    }

    if (companyFooter.length === 0) {
        return <p>No services found.</p>; // Boş veri durumu
    }

    return (
        <div className='footer w-full h-[489px] flex justify-center items-center relative'>
            <img className='blur w-full absolute' src={bg} />
            <div className='w-[65%] h-[236px] relative'>
                <div className='flex flex-col w-[30%] text-white mt-6'>
                    <div className='flex mb-8'>
                        <img src={messagebox} />
                        <h1 className='font-semibold text-[30px]  leading-[31.5px] ml-2 '>AskExperts</h1>
                    </div>
                    <p className='mb-16'>Fb. / Ig. / Tw. / Be.</p>
                </div>
            </div>

            <div className='flex absolute gap-[100px] ml-40'>
                <div className='border-l border-[#707070]'></div>
                <div className='flex flex-col text-white'>
                    <h1 className='text-[20px]'>Product</h1>
                    <div className='border w-[32px] h-[3px] border-[#FFCC4A] bg-[#FFCC4A] mb-4' ></div>
                    {
                        productFooter.map((product) => (
                            <Link
                                key={product.id}
                                className='flex items-center gap-2'
                                to={product.url.startsWith("/") ? product.url : `/${product.url}`}
                            >
                                <ul>
                                    <li>{product.name}</li>
                                </ul>
                            </Link>
                        ))
                    }
                </div>
                <div className='flex flex-col text-white'>
                    <h1 className='text-[20px]'>Company</h1>
                    <div className='border w-[32px] h-[3px] border-[#FFCC4A] bg-[#FFCC4A] mb-4' ></div>
                    {
                        companyFooter.map((company) => (
                            <Link
                                key={company.id}
                                className='flex items-center gap-2'
                                to={company.url.startsWith("/") ? company.url : `/${company.url}`}
                            >
                                <ul className='footer'>
                                    <li>{company.name}</li>
                                </ul>
                            </Link>
                        ))
                    }
                </div>
                <div className='flex flex-col text-white w-[232px]'>
                    <h1 className='text-[20px]'>Address</h1>
                    <div className='border w-[32px] h-[3px] border-[#FFCC4A] bg-[#FFCC4A] mb-4' ></div>
                    <p>1700 W Blancke St, kiyev port south USA, America</p>
                    <button
                        className='bg-white text-black py-4 px-6 rounded-full mt-8 '
                        onClick={() => navigate("/contact")}
                    >
                        <p>Book an Appoitment</p>
                    </button>
                </div>

            </div>
        </div>

    )
}

export default Footer
