import React from 'react'
import ReactPlayer from 'react-player'
import Iframe from 'react-iframe'
function Livestream() {
    return (
        <>

            <div className='h-screen hidden md:block'>
                <Iframe url="https://embedstreams.me/ipl/punjab-kings-vs-delhi-capitals-stream-1"
                    width="800px"
                    height="460px"
                    id=""
                    className=""
                    display="block"
                    position="relative" />

                <h2 className='mt-400px text-orange-400'>This website does not create or host or share any video. All video streams are embed here from external websites that are available freely online.</h2>


            </div>
            <div className='h-screen md:hidden'>
                <Iframe url="https://embedstreams.me/ipl/punjab-kings-vs-delhi-capitals-stream-1"
                    width="400px"
                    height="260px"
                    id=""
                    className=""
                    display="block"
                    position="relative" />

                <h2 className='mt-400px text-orange-400'>This website does not create or host or share any video. All video streams are embed here from external websites that are available freely online.</h2>
            </div>

            <div className='h-screen'>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5569807454817546"
                    crossorigin="anonymous"></script>
            </div>
        </>


    )
}

export default Livestream
