"use client"

import Image from "next/image";
import Link from 'next/link';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";

import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateUser } from './redux/slices/usersSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Pokemon from "./components/pokemon";

export default function Home() {

  const router = useRouter()
  const users = useSelector((state: any) => state.users);
  
  const [id, setId] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [handphone, setHandphone] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  useEffect(() => {
    if (localStorage.getItem("username") == null) {
      // router.push('/auth/login')
    }
  }, []);

  useEffect(() => {
    for (let i = 0; i < users.length; i++) {
      if (users.length > 1){
        if ((users[i].username === (localStorage.getItem("username"))) && (users[i].password === (localStorage.getItem("password")))) {
          setId(users[i].id)
          setUsername(users[i].username)
          setPassword(users[i].password)
          setHandphone(users[i].handphone)
          setConfirmPassword(users[i].confirmPassword)
          localStorage.setItem("id", users[i].id)
          localStorage.setItem("handphone", users[i].handphone)
          localStorage.setItem("confirmPassword", users[i].confirmPassword)
        }
      }
    }
  }, [])

  // const handleLogout = () => {
  //   localStorage.clear()

  //   toast.success('Logout berhasil!', {
  //       position: "top-center",
  //       autoClose: 4000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //   });
    
  //   setTimeout(() => { 
  //     router.push('/auth/login')
  //   }, 2000)
  // };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar/>

      <Pokemon/>

      <ToastContainer />

      <Footer/>
    </div>
  );
}
