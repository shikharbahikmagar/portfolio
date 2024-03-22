import React from 'react'
import lotie from '../assets/lotie.json'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import ma from '../assets/ma.png'
import LowerSec from './LowerSec'
import Header from './Header'

function MainSec() {
    return (
        <>
            <Header />
            <section className='scroll-smooth'>
                <motion.div
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ delay: .3, type: 'spring', stiffness: 100 }}>
                    <h1 className='text-center text-4xl text-slate-300'>LET ME <span className='text-[#c770f0]'>INTRODUCE</span> MYSELF</h1>
                </motion.div>
                <div className='md:grid md:grid-cols-12'>
                    <motion.div
                        initial={{ x: 100 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true, amount: .1 }}
                        transition={{ delay: .3, type: 'spring', stiffness: 100 }} className='m-4 text-slate-300 text-xl font-serif col-span-7 mt-[130px] ml-[35px] md:ml-[130px]'>
                        <h2>"I'm a web developer with </h2>

                        <h2 className='mt-[50px]'> expertise in <span className='text-[#c770f0] italic'>PHP</span>, particularly <span className='text-[#c770f0] italic'>Laravel,</span> as well as <span className='text-[#c770f0] italic'>Javascript</span> and <span className='text-[#c770f0] italic'>React</span>.</h2>

                        <h2 className='mt-[50px]'>I'm passionate about creating<span className='text-[#c770f0] italic'>Dynamic</span> and <span className='text-[#c770f0] italic'>user-friendly web applications</span>,</h2>
                        <h2 className='mt-[50px]'> leveraging my skills in <span className='text-[#c770f0] italic'>backend</span> and <span className='text-[#c770f0] italic'>frontend</span> development to bring projects to <span className='text-[#c770f0] italic'>life</span>."</h2>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true, amount: .2 }}
                        transition={{ delay: .3, type: 'spring', stiffness: 100 }}
                        className='col-span-4 ml-[50px] md:ml-36 mt-[95px]'>
                        {/* <Lottie animationData={lotie} className='mt-[50px]' /> */}
                        <img src={ma} alt="" className='rounded-full w-80 h-80' />
                    </motion.div>

                </div>
            </section>
            <LowerSec />
        </>
    )
}

export default MainSec
