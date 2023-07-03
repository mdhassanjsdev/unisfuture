import { university } from '@/data/data'
import Image from 'next/image'
import React from 'react'

const University = () => {
    return (
        <div className='mx-5 sm:mx-0'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between py-10 flex-wrap'>
                    {
                        university?.map((items) => (
                            <div key={items.id}>
                                <Image src={items.image} width={150} height={150} alt={items.image} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default University