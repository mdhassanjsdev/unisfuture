import { studyInEurope } from '@/data/data'
import Link from 'next/link'
import React from 'react'

const Course = () => {
    return (
        <div className='mt-5 mb-5'>
            <div className='container mx-auto'>
                <div className='space-y-10'>
                    {
                        studyInEurope.map((items) => (
                            <div key={items.id} className='space-y-2 border border-[#E6E6E6] py-5 px-5 rounded'>
                                <h1 className='text-[#6b6b6b] text-[19px] font-extrabold'>{items.title}</h1>
                                <p className='text-[#6B6B6B]'><span className='text-[#6b6b6b] text-[19px] font-extrabold'>Discipline :</span> {items.Discipline}</p>
                                <p className='text-[#6B6B6B]'> <span className='text-[#6b6b6b] text-[19px] font-extrabold'>Country :</span> {items.Country}</p>
                                <p className='text-[#6B6B6B]'><span className='text-[#6b6b6b] text-[19px] font-extrabold'>Degree type :</span> {items.Degree_type}</p>
                                <p className='text-[#6B6B6B]'><span className='text-[#6b6b6b] text-[19px] font-extrabold'>University :</span> {items.University}</p>
                                <div className='py-3'>
                                    <Link href={`/Registration/${items.id}`} className='text-white bg-[#38A065] px-10 py-4 mt-6'>Enroll Now</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Course