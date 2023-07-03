import { Jobs } from '@/data/data'
import Link from 'next/link'
import React from 'react'

const JobList = () => {
    return (
        <div className='py-20'>
            <div className='container mx-auto'>
                <div className='text-center mb-10'>
                    <h3 className='text-[#22D3A6] text-base font-semibold pb-[10px]'>JOBS</h3>
                    <h1 className='text-[40px] font-bold text-[#151B46]'>AVAILABLE JOBS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                </div>
                <div className='flex justify-center flex-wrap'>
                    {
                        Jobs?.map((itmes) => (
                            <div key={itmes.id} className='single_job'>
                                <h1 className='text-[30px] py-[10px]'>{itmes.title}</h1>
                                <p className='text-[#22D3A6] text-base font-semibold pb-[10px]'>{itmes.company}</p>
                                <p className='text-[#000] text-base font-normal pb-[10px]'>{itmes.sellary}</p>
                                <p className='text-base pb-[10px]'>{itmes.details}</p>
                                <Link href='/Contact' className='job-apply-button'>Apply Now</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default JobList