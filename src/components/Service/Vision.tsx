import Link from 'next/link'
import React from 'react'

const Vision = () => {
    return (
        <div className='mx-5 sm:mx-0'>
            <div className='contact-bg flex flex-col justify-center items-center' >

                <h1 className='text-[28px] sm:text-[35px] text-center font-medium mb-3 text-[#38A065]'>Start Learning Today. Grow Your Skill.</h1>
                <p className='mt-[15px] text-base font-normal text-white mb-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <Link href='/StudyInEurope' className='text-white bg-[#38A065] px-10 py-4 mt-6'>Get Started</Link>

            </div>
        </div>
    )
}

export default Vision