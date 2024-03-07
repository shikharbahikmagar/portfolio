import React from 'react'
import Lottie from 'lottie-react'
import lotie from '../assets/lotie.json'
import {motion} from 'framer-motion'
import bgr from '../assets/bgr.json'

function Header() {
    return (
        <header className='md:grid md:grid-cols-12 scroll-smooth'>
            <div className='md:col-span-6 h-screen col-span-12 md:mt-[120px] md:ml-[50px]'>
                    <motion.div className='text-green absolute md:ml-[120px] ml-[37px] text-[60px] mt-[70px]'
                        initial={{ x: 100,
                                    opacity: 0 }}
                        animate={{ x: 20, opacity: 1 }}
                        transition={{ delay: .4, type: 'spring', stiffness: 50 }}>

                        <p className='font-light text-purple-300 ml-5 text-center'>Hi There!</p>
                    <p className='mt-[10px] font-mono text-purple-400 text-center font-semibold md:ml-[-90px]'>I am</p>
                        {/* <p className='flex'><hr className='w-40 mt-[-350px] ml-52' /></p> */}
                    </motion.div>
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 10, opacity: 1 }}
                        transition={{ delay: .4, type: 'spring', stiffness: 100 }}
                        className='font-serif absolute text-center mt-[280px] md:ml-[150px] ml-[35px] cursor-pointer'>
                        <span className='text-[90px] antialiased text-purple-500 font-black hover:text-green-200 z-0 text-shadow-lg shadow-slate-800 transition-all duration-1000'>S</span>
                        <span className='text-[90px] antialiased text-purple-500 font-black hover:text-green-200 z-[-50] ml-[-20px] text-shadow-lg shadow-slate-800 transition-all duration-1000'>H</span>
                        <span className='text-[90px] antialiased text-purple-500 font-black hover:text-green-200 z-[-60] ml-[-10px] text-shadow-lg shadow-slate-800 transition-all duration-1000'>i</span>
                        <span className='text-[90px] antialiased text-purple-500 font-black hover:text-green-200 z-[-90] ml-[-10px] text-shadow-lg shadow-slate-800 transition-all duration-1000'>K</span>
                        <span className='text-[90px] antialiased text-purple-500 font-black hover:text-green-200 z-[-90] ml-[-20px] text-shadow-lg shadow-slate-800 transition-all duration-1000'>H</span>
                        <span className='text-[90px] antialiased text-purple-500 font-black hover:text-green-200 z-[-90] ml-[-20px] text-shadow-lg shadow-slate-800 transition-all duration-1000'>A</span>
                        <span className='text-[90px] antialiased text-purple-500 font-black hover:text-green-200 z-[-90] ml-[-20px] text-shadow-lg shadow-slate-800 transition-all duration-1000'>R</span>
                    </motion.div>
                    {/* <Lottie animationData={bgr} /> */}
            </div>
            <motion.div
                initial={{ x: -80 }}
                animate={{ x: 0 }}
                transition={{ delay: .2, type: 'spring', stiffness: 100 }} className='md:col-span-6 mt-[-220px] md:mt-[90px] col-span-12'>
                <Lottie animationData={bgr} className='' />
                
        </motion.div>
        </header>
    )
}

export default Header
