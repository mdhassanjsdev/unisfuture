import { news } from '@/data/data'
import Image from 'next/image'
import React from 'react'

const News = () => {
    return (
        <div className='mx-[15px] sm:mx-0'>
            <div className='container mx-auto'>
                <div>

                </div>
                <div className='flex justify-between flex-wrap'>
                    {
                        news?.map((items) => (
                            <div className='mb-8 max-w-[400px] cursor-pointer'>
                                <Image src={`/images/news/${items.id}.png`} width={400} height={200} alt={items.title} className='hover:opacity-70 duration-300' />
                                <p className='pt-4 text-[16px] font-medium'>{items.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default News