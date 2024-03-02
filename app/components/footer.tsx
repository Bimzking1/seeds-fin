import React from 'react'
import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const footer = () => {
  return (
    <div className='w-full flex items-center justify-center bg-[#FBFAF5] dark:bg-[#2e2e2e] z-50'>
      <div className='bg-[#FBFAF5] dark:bg-[#2e2e2e] w-full xl:w-[1280px] text-[#2e2e2e] text-sm text-center md:text-left md:py-8 md:px-8 pb-8'>
        <div className='w-full md:flex'>

            <div className='flex justify-center items-center md:items-start flex-col w-full md:w-1/4 py-2 pt-8 md:pt-2 px-2 pl-4 lg:w-2/5'>
                <a href="#home" className='w-full flex flex-col justify-start items-center md:items-start'>
                    <div className="dark:hidden flex flex-col justify-center items-center text-[#1c1c1c] dark:text-[#FBFAF5]">
                        <Image
                            className="rounded-xl"
                            src={'/seedsLogo.svg'}
                            width={100}
                            height={100}
                            style={{ height: '100%', width: '100%' }}
                            alt="Logo"
                        />
                    </div>
                    <div className="hidden dark:flex flex-col justify-center items-center text-[#1c1c1c] dark:text-[#FBFAF5]">
                        <Image
                            className="rounded-xl"
                            src={'/seedsLogo2.svg'}
                            width={100}
                            height={100}
                            style={{ height: '100%', width: '100%' }}
                            alt="Logo"
                        />
                    </div>
                    <div className='text-[#106B6E] font-bold text-xl mt-4'>
                        Investing, together
                    </div>
                </a>
                <div className='text-lg md:text-sm my-8 px-4 md:px-0 lg:w-4/5 text-gray-500 dark:text-gray-300 duration-300'>
                    Step in the world of investing through our Play Arena-climb the leaderboards, 
                    win exciting prizes, and perfect your investment strategy with ZERO RISK. 
                    Connect with financial experts and like-minded individuals in our strong 
                    and interactive community.
                </div>
                <div className='flex justify-center md:justify-start py-4 gap-4'>
                    <a href='https://www.linkedin.com/company/finance-seeds/' target="_blank" className='w-[40px] md:w-[30px] text-[#1c1c1c] dark:text-[#FBFAF5] duration-300'>
                        <FaLinkedinIn style={{ width: '100%', height: '100%' }}/>
                    </a>
                    <a href='https://instagram.com/seeds_finance' target="_blank" className='w-[40px] md:w-[30px] text-[#1c1c1c] dark:text-[#FBFAF5] duration-300'>
                        <FaInstagramSquare style={{ width: '100%', height: '100%' }}/>
                    </a>
                    <a href="https://facebook.com/seeds.finance" target="_blank" className='w-[40px] md:w-[30px] text-[#1c1c1c] dark:text-[#FBFAF5] duration-300'>
                        <FaFacebook style={{width: '100%', height: '100%'}} />
                    </a>
                    <a href="https://twitter.com/seeds_finance" target="_blank" className='w-[40px] md:w-[30px] text-[#1c1c1c] dark:text-[#FBFAF5] duration-300'>
                        <FaXTwitter style={{width: '100%', height: '100%' }} />
                    </a>
                    <a href="https://www.tiktok.com/@seeds_finance" target="_blank" className='w-[40px] md:w-[30px] text-[#1c1c1c] dark:text-[#FBFAF5] duration-300'>
                        <FaTiktok style={{width: '100%', height: '100%'}} />
                    </a>
                    <a href="https://www.youtube.com/@seeds_id" target="_blank" className='w-[40px] md:w-[30px] text-[#1c1c1c] dark:text-[#FBFAF5] duration-300'>
                        <FaYoutube style={{width: '100%', height: '100%' }} />
                    </a>
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2 dark:text-gray-300 duration-300'>
                <div className='font-bold text-xl mb-2'>
                    Services
                </div>
                <div className='md:py-1'>
                    Invest
                </div>
                <div className='md:py-1'>
                    Business Partner
                </div>
                <div className='md:py-1'>
                    Go International
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2 dark:text-gray-300 duration-300'>
                <div className='font-bold text-xl mb-2'>
                    Products
                </div>
                <div className='md:py-1'>
                    Seeds App
                </div>
                <div className='md:py-1'>
                    Gold Invest
                </div>
                <div className='md:py-1'>
                    CashFlow Feed
                </div>
                <div className='md:py-1'>
                    Learn Together
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2 dark:text-gray-300 duration-300'>
                <div className='font-bold text-xl mb-2'>
                    Download Our App
                </div>
                <div className='w-full flex justify-center items-center gap-4 px-4 md:px-0 md:flex-col'>
                    <a href="https://apps.apple.com/id/app/seeds-investing-together/id6443659980" target="_blank"  className='w-full flex justify-center items-center'>
                        <Image
                            className="rounded-xl"
                            src={'/appstore.svg'}
                            width={100}
                            height={100}
                            style={{ height: '100%', width: '100%' }}
                            alt="Logo"
                        />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.seeds.investment" target="_blank" className='w-full flex justify-center items-center'>
                        <Image
                            className="rounded-xl"
                            src={'/googleplay.svg'}
                            width={100}
                            height={100}
                            style={{ height: '100%', width: '100%' }}
                            alt="Logo"
                        />
                    </a>
                </div>
            </div>

        </div>
        <hr className='mt-8'/>
        <div className='text-center md:flex gap-8 text-xs mt-8 lg:px-4 dark:text-gray-300 duration-300'>
            <div className='mb-2'>
                © Seeds - Bimo 2024. All Rights Reserved
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                About Us
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                User Agreement
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Privacy Policy
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Terms of Services
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Cookie Policy
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Copyright Policy
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Brand Policy
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer