import React from 'react'

function Projects() {
    return (
       <>
       <h1 className='text-center mt-[150px]'>Projects</h1>
       <div className='mt-[100px] h-screen grid grid-cols-12'>
        
            <div className='flex w-full col-span-6 border-5 border-green-500'>
                    <h2>project 1</h2>
                    <img className='w-[400px] h-[400px]' src="https://media.istockphoto.com/id/487764186/photo/never-ending-peace-and-love.jpg?s=612x612&w=0&k=20&c=nBau5nlbXTk11ln_0csVYS-FUavFEE0QmoAjvzZu5co=" alt="" />
            </div>
       </div>
        </>
    )
}

export default Projects
