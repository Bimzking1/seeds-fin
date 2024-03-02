"use client"

import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addUser } from '../../redux/slices/usersSlice';

import DarkModeSwitcher from '../../components/DarkModeSwitcher';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaHome } from "react-icons/fa";
import { PasswordField } from './../../components/passwordField';

const page = () => {

    const router = useRouter()
    const users = useSelector((state: any) => state.users);
    // const [user, setUser] = useState([])
    // const dispatch = useDispatch();
    // const [initialized, setInitialized] = useState(false);
    
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // useEffect(() => {
    //   const storedUsers = localStorage.getItem('users');
    //   if (storedUsers && !initialized) {
    //     setUser(JSON.parse(storedUsers));
    //     setInitialized(true);
    //   }
    // }, [initialized]);
  
    // useEffect(() => {
    //   if (initialized) {
    //     localStorage.setItem('users', JSON.stringify(users));
    //   }
    // }, [initialized, users]);

    async function handleSubmit (){

        const check = await users.find((a: { id: string; username: string; password: string; }) =>
            a.username === username && a.password === password
        )

        if (check) {
            localStorage.setItem("username", username !== undefined ? username : '');
            localStorage.setItem("password", password !== undefined ? password : '');

            toast.success('Login berhasil!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
    
            setTimeout(() => { 
                router.push('/')
            }, 2000)

        } else if ((username === '') || (password === '')) {

            toast.error('Form tidak boleh kosong!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {

            toast.error('Username atau Password salah!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div className=''>
            <div className="h-[100vh] shadow-default">
                <div className="h-[100vh] flex flex-wrap items-center">
                    <div className="hidden w-full xl:block h-full xl:w-1/2 bg-[#FBFAF5] dark:bg-[#1c1c1c] duration-300">
                        <div className="text-center h-full flex justify-center items-center">
                            <div className="flex flex-col justify-center items-center text-[#1c1c1c] dark:text-[#FBFAF5]">
                                <Link href={'/'} className='flex justify-center items-center'>
                                    <Image
                                        className="rounded-xl px-4 mb-16"
                                        src={'/seeds.png'}
                                        width={800}
                                        height={800}
                                        style={{ height: '80%', width: '80%' }}
                                        alt="Logo"
                                    />
                                </Link>
                                <div className='text-5xl font-bold h-fit bg-gradient-to-r from-[#9A76FE] to-[#3AC4A0] flex text-transparent bg-clip-text w-fit '>
                                    LOREM IPSUM
                                </div>
                                <div className='w-[500px] h-fit dark:bg-gradient-to-r dark:from-[#9A76FE] dark:to-[#3AC4A0] flex dark:text-transparent dark:bg-clip-text duration-300'>
                                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, 
                                    consectetur, adipisci velit..."
                                </div>
                                <div className='h-fit dark:bg-gradient-to-r dark:from-[#9A76FE] dark:to-[#3AC4A0] flex dark:text-transparent dark:bg-clip-text w-fit duration-300'>
                                    "There is no one who loves pain itself, who seeks after it"
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full xl:w-1/2 xl:border-l-2 h-full flex flex-col justify-center items-center bg-[#FBFAF5] dark:bg-[#1c1c1c] duration-300">
                        
                        <div className='mb-4 xl:mb-8 w-full flex justify-end px-4 xl:px-32 gap-2'>
                            <DarkModeSwitcher/>
                            <Link href={'/'} className='flex justify-center items-center'>
                                <FaHome className='w-full h-full text-[#1c1c1c] dark:text-[#FBFAF5] hover:text-gray-500 dark:hover:text-gray-500 duration-300'/>
                            </Link>
                        </div>
                        <div className="w-full p-4 sm:p-12.5 xl:px-32 h-fit">
                            <div className="h-fit bg-gradient-to-r from-[#9A76FE] to-[#3AC4A0] flex text-transparent bg-clip-text w-fit justify-start items-center mb-6 text-3xl xl:text-7xl font-bold sm:text-title-xl2">
                                Silahkan LogIn
                            </div>
                            <div className="w-full flex justify-start items-center mb-6 text-md xl:text-xl text-[#666666] dark:text-[#FBFAF5] sm:text-title-xl2 duration-300">
                                Masukkan Username dan password anda untuk masuk
                            </div>

                            <form className='text-[#1c1c1c] dark:text-[#FBFAF5]'>
                                <div className="mb-4">
                                    <label className="mb-2.5 block font-semibold text-[#666666] dark:text-[#FBFAF5] duration-300">
                                        Username
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Username anda..."
                                            className="w-full rounded-full border border-[#494949] bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="mb-2.5 block font-semibold text-[#666666] dark:text-[#FBFAF5] duration-300">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <PasswordField password={password} setPassword={setPassword} />
                                    </div>
                                    </div>

                                    <div className="mb-5">
                                    <div
                                        onClick={handleSubmit}
                                        className="w-full text-center font-bold cursor-pointer rounded-full bg-[#3AC4A0] text-[#FBFAF5] dark:bg-[#3AC4A0] dark:text-[#FBFAF5] p-4 transition duration-300 hover:bg-[#DCFCE4] hover:text-[#106B6E] dark:hover:bg-[#DCFCE4] dark:hover:text-[#106B6E]"
                                    >
                                        Masuk Sekarang
                                    </div>
                                </div>

                                <div className="mt-6 text-center">
                                    <Link href={'/auth/register'} className='text-[#1c1c1c] dark:text-[#FBFAF5] w-full flex justify-center align-items-center text-center gap-2 duration-300'>
                                        <p className='font-semibold'>Belum punya akun?</p>
                                        <p className="font-semibold text-[#9A76FE]">Daftar Sekarang</p>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      
            <ToastContainer />
        </div>
    )
}

export default page