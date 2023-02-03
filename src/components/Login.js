import React from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from '../assets/boxel_img.jpg';
import logo from '../assets/boxel_logo.png';

export default function Login() {
    const navigate = useNavigate(); 
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-screen w-full'>
            <div className='hidden md:block '>
                <img className='w-full h-full object-cover' src={loginImg} alt='' />
            </div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <div className=''>
                        <img src={logo} className='w-auto' alt='' />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Username</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='text'/>
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Password</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='password'/>
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox"/> Remember Me</p>
                        <p>Forgot Password</p>
                    </div>
                    <button onClick={() => navigate("/navbar")} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Log In</button>
                </form>
            </div>
        </div>
    )
}