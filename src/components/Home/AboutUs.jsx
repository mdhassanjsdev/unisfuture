"use client"

import { HomeDetails, HomeDetailsTabs } from '@/data/data'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const AboutUs = () => {

    const [tabId, setTabId] = useState(1)

    return (
        <div className='container mx-auto bg-[#EFEFEF] h-[700px] mb-10 flex justify-center items-center'>
            <div className='bg-white h-[600px] w-[1200px] mx-5'>
                <div className='absolute right-[73px]'>
                    <div className='h-[80px] w-[805px] flex justify-between items-center'>
                        {
                            HomeDetailsTabs?.map((itmes) => (
                                <div key={itmes.id} onClick={() => setTabId(itmes.id)} className={`${tabId === itmes.id ? 'bg-[#fff]' : 'bg-[#F7F7F7]'} py-7 w-[200px] text-center cursor-pointer`}>
                                    <h1>{itmes.tab}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='w-96 h-[600px]'>
                        <Image src={`/images/HomeDetails/tab-1.jpg`} width={390} height={700} className='h-[600px]' alt='tab-1' />
                    </div>
                    <div className='bg-[#fff] w-[800px] h-[600px]'>
                        <div>
                            <h1>hello</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs