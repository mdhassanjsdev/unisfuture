import Link from 'next/link'
import React from 'react'

function Title() {
    return (
        <div className='home-bg'>
            <div className='home-bg-gradiant'>
                <div className='container mx-auto'>
                    <div className='absolute top-1/4 mx-3 sm:mx-0 sm:left-20'>
                        <p className='text-[28px] font-normal text-[#38A065] pb-7'>Experts of Studying Abroad</p>
                        <h1 className='text-[34px] sm:text-[58px] text-white font-bold pb-3'>Study in English at your selected</h1>
                        <p className='text-[21px] font-normal text-white pb-8'>university anywhere around the world!</p>
                        <Link href='/StudyInEurope' className='text-white bg-[#38A065] px-10 py-4 mt-6'>Take a Tour</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title