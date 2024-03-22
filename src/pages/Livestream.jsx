import React from 'react'
import ReactPlayer from 'react-player'
import Iframe from 'react-iframe'
function Livestream() {
    return (
        <>

            <div className='h-screen hidden md:block'>
                <Iframe url="https://embedstreams.me/ipl/chennai-super-kings-vs-royal-challengers-bangalore-stream-1"
                    width="800px"
                    height="460px"
                    id=""
                    className=""
                    display="block"
                    position="relative" />

            </div>
            <div className='h-screen md:hidden'>
                <Iframe url="https://embedstreams.me/ipl/chennai-super-kings-vs-royal-challengers-bangalore-stream-1"
                    width="400px"
                    height="260px"
                    id=""
                    className=""
                    display="block"
                    position="relative" />

                <h1 className='mt-400px'>K xa kta haru</h1>
            </div>
        </>


    )
}

export default Livestream
