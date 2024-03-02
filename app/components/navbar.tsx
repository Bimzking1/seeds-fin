"use client"

import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { FaRegCircleUser } from "react-icons/fa6";
import DarkModeSwitcher from '../components/DarkModeSwitcher';
import Link from 'next/link';

const navbar = () => {
    
    const router = useRouter();

    // const handleLogout = () => {
    //     localStorage.clear()
      
    //     setTimeout(() => { 
    //         router.push('/login');
    //     }, 2000)
    // }

  return (
    <div className='w-full flex flex-col items-center justify-center bg-[#FBFAF5] dark:bg-[#2e2e2e] z-50 duration-300'>
        <div className='px-4 w-full flex justify-center items-center border-b border-[#FBFAF5] py-4 h-fit bg-[#FBFAF5] dark:bg-[#2e2e2e] duration-300 shadow'>
            <div className='w-full xl:w-[1280px] flex flex-row justify-between items-center'>
                <div className="dark:hidden flex flex-col justify-center items-center text-[#1c1c1c] dark:text-[#FBFAF5] duration-300">
                    <Image
                        className="rounded-xl"
                        src={'/seedsLogo.svg'}
                        width={100}
                        height={100}
                        style={{ height: '80%', width: '80%' }}
                        alt="Logo1"
                    />
                </div>
                <div className="hidden dark:flex flex-col justify-center items-center text-[#1c1c1c] dark:text-[#FBFAF5] duration-300">
                    <Image
                        className="rounded-xl"
                        src={'/seedsLogo2.svg'}
                        width={100}
                        height={100}
                        style={{ height: '80%', width: '80%' }}
                        alt="Logo2"
                    />
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <div className='w-full flex justify-end'>
                        <DarkModeSwitcher/>
                    </div>
                    <Link href={'/auth/login'} className='w-[200px] px-4 py-2 flex justify-center items-center font-bold cursor-pointer rounded-full bg-[#3AC4A0] text-[#FBFAF5] dark:bg-[#3AC4A0] dark:text-[#FBFAF5] transition duration-300 hover:bg-[#DCFCE4] hover:text-[#106B6E] dark:hover:bg-[#DCFCE4] dark:hover:text-[#106B6E]'>
                        Join Us
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default navbar