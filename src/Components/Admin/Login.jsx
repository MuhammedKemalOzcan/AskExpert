import React, { useEffect, useState } from 'react'
import login from '../../assets/login.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {

    const [members, setMembers] = useState([]);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loggedInUser, setLoggedInUser] = useState(null);
    const navigate = useNavigate();

    const fetchMembers = async () => {
        const response = await axios.get("https://localhost:7287/api/Members");
        setMembers(response.data);
    }
    useEffect(() => {
        fetchMembers();
    }, []);

    const handleLogin = () => {
        const user = members.find((member) => member.email === email && member.password === password);

        if (user) {
            setLoggedInUser(user);
            navigate("/panel")
        }
        else {
            return <div>Yanlış şifre veya E-posta</div>
        }
    }



    return (
        <div className='w-full h-[700px] flex justify-center items-center'>
            <div className='bg-[#181818] w-[63%] h-[70%] rounded-[30px] flex flex-col justify-center items-center gap-[30px]'>
                <h1 className='text-white big-text '>Enter Mail</h1>
                <input
                    className='border border-[#E3E3E3] px-6 py-8 gap-2 rounded-[54px] w-[32%] h-[67px]'
                    placeholder='Enter Your Mail'
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <h1 className='text-white big-text '>Enter Password</h1>
                <input
                    placeholder='Enter Your Password'
                    className='border border-[#E3E3E3] px-6 py-8 gap-2 rounded-[54px] w-[32%] h-[67px]'
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleLogin}
                    className='yellow-button'>
                    <p>Submit</p>
                </button>
            </div>
        </div>
    )
}

export default Login
