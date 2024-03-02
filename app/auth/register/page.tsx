"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import DarkModeSwitcher from '../../components/DarkModeSwitcher';
import { addUser } from '../../redux/slices/usersSlice';
import { useRouter } from 'next/navigation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaHome } from "react-icons/fa";
import { PasswordField } from './../../components/passwordField';

const page = () => {
    
    const [username, setUsername] = useState<string>('');
    const [handphone, setHandphone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const dispatch = useDispatch();
    const users = useSelector((state: any) => state.users);
    const router = useRouter()

    async function handleAddUser (e: any) {
      e.preventDefault();

      const duplicate = await users.find((a: { id: string; username: string; password: string; }) =>
          a.username === username && a.password === password
      )
  
      if (!username && !handphone && !password && !confirmPassword) return;
      if ((username === '') || (handphone === '') || (password === '') || (confirmPassword === '')) {

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

        return
      };
      if (duplicate) {

        toast.error('Username dan Password ini sudah terpakai!', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        return
      }
  
      const newUser = {
        id: Date.now().toString(),
        username: username,
        handphone: handphone,
        password: password,
        confirmPassword: confirmPassword,
      };
  
      dispatch(addUser(newUser));

      toast.success('Register berhasil!', {
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
        router.push('/auth/login')
      }, 2000)
    };

    return (
        <div className=''>
            <div className="h-[100vh] shadow-default">
                <div className="h-[100vh] flex flex-wrap items-center">

                    <Link href={'/'} className="hidden xl:flex absolute top-[100px] left-[100px] flex-col justify-center items-center text-[#1c1c1c] dark:text-[#FBFAF5]">
                        <Image
                            className="rounded-xl px-4 mb-16"
                            src={'/seeds2.png'}
                            width={200}
                            height={200}
                            style={{ height: '80%', width: '80%' }}
                            alt="Logo"
                        />
                    </Link>

                    <div className="w-full h-full flex flex-col justify-center items-center bg-[#FBFAF5] dark:bg-[#1c1c1c]">
                        
                        <div className='mb-4 xl:mb-8 w-full flex justify-end px-4 xl:px-32 gap-2'>
                            <DarkModeSwitcher/>
                            <Link href={'/'} className='flex justify-center items-center'>
                                <FaHome className='w-full h-full text-[#1c1c1c] dark:text-[#FBFAF5] hover:text-gray-500 dark:hover:text-gray-500 duration-300'/>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/2 p-4 sm:p-12.5 xl:p-0 xl:px-32">
                            <h1 className="h-fit bg-gradient-to-r from-[#9A76FE] to-[#3AC4A0] text-transparent bg-clip-text duration-300 w-full flex justify-start items-center mb-4 text-3xl xl:text-6xl font-bold sm:text-title-xl2">
                                Daftarkan Akun
                            </h1>
                            <h1 className="w-full flex justify-start items-center mb-4 text-md xl:text-xl text-[#666666] dark:text-[#FBFAF5] sm:text-title-xl2 duration-300">
                                Daftar akun anda  dengan mengisi form dibawah
                            </h1>

                            <form onSubmit={handleAddUser} className='text-[#1c1c1c] dark:text-[#FBFAF5]'>
                                <div className="mb-2">
                                    <label className="mb-2.5 block font-semibold text-[#666666] dark:text-[#FBFAF5] duration-300">
                                        Username
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Ketik nama anda disini..."
                                            className="w-full rounded-full border border-[#494949] bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>
                                </div>
                                
                                <div className="mb-2">
                                    <label className="mb-2.5 block font-semibold text-[#666666] dark:text-[#FBFAF5] duration-300">
                                        Nomor Handphone
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={handphone}
                                            onChange={(e) => setHandphone(e.target.value)}
                                            placeholder="Nomor handphone anda"
                                            className="w-full rounded-full border border-[#494949] bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <label className="mb-2.5 block font-semibold text-[#666666] dark:text-[#FBFAF5] duration-300">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <PasswordField password={password} setPassword={setPassword} />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="mb-2.5 block font-semibold text-[#666666] dark:text-[#FBFAF5] duration-300">
                                        Konfirmasi Password
                                    </label>
                                    <div className="relative">
                                        <PasswordField password={confirmPassword} setPassword={setConfirmPassword} />
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <button
                                        onClick={handleAddUser}
                                        className="w-full text-center font-bold cursor-pointer rounded-full bg-[#3AC4A0] text-[#FBFAF5] dark:bg-[#3AC4A0] dark:text-[#FBFAF5] p-4 transition duration-300 hover:bg-[#DCFCE4] hover:text-[#106B6E] dark:hover:bg-[#DCFCE4] dark:hover:text-[#106B6E]"
                                    >
                                        Daftar Sekarang
                                    </button>
                                </div>

                                <div className="mt-6 text-center">
                                    <Link href="/auth/login" className='text-[#1c1c1c] dark:text-[#FBFAF5] w-full flex justify-center align-items-center text-center gap-2'>
                                        <p className='font-semibold duration-300'>Sudah punya akun?</p>
                                        <p className="font-semibold text-[#9A76FE]">Masuk Sekarang</p>
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