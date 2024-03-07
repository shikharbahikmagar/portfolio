import React from 'react'
import hh from '../assets/hh.jpg'
import { motion } from 'framer-motion'

function Navbar() {
    return (
        <nav
            className="flex md:h-[100px] h-[100px] w-full text-xl text-slate-300 items-center">
            <motion.div
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                transition={{ delay: .2, type: 'spring', stiffness: 50 }}
                className='md:ml-[130px] ml-[70px] text-2xl text-slate-300 font-semibold font-serif'>
                Sb.
            </motion.div>

            <motion.ul
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                transition={{ delay: .2, type: 'spring', stiffness: 50 }}
                className='md:flex hidden ml-[40%] cursor-pointer gap-14'>
                <li className='text-xl relative after:bg-purple-400 after:absolute after:h-[2px] after:mt-[5px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full hover:text-purple-400 after:transition-all after:duration-[.7s] cursor-pointer'>Home</li>
                <li className='text-xl relative after:bg-purple-400 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full hover:text-purple-400 after:transition-all after:duration-[.7s] cursor-pointer'>About</li>
                <li className='text-xl relative after:bg-purple-400 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full hover:text-purple-400 after:transition-all after:duration-[.7s] cursor-pointer'>Projects</li>
                <li className='text-xl relative after:bg-purple-400 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full hover:text-purple-400 after:transition-all after:duration-[.7s] cursor-pointer'>Contact</li>
                <li className='text-xl relative after:bg-purple-400 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full hover:text-purple-400 after:transition-all after:duration-[.7s] cursor-pointer'>Links</li>
                {/* <li>
                    <img src={me2} className='rounded-full w-[70px]' alt="" />
                </li> */}
            </motion.ul>
            <motion.div
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                transition={{ delay: .2, type: 'spring', stiffness: 50 }}
                className='ml-[45%]'>
                    <button className='relative group bg-transparent'>
                        <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-purple-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                            <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
                                <div class="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
                                <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
                            </div>
                        </div>
                </button>
            </motion.div>
        </nav>

    )
}

export default Navbar
