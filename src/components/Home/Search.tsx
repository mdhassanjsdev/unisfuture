import { chooseUs } from '@/data/data'
import Image from 'next/image'
import React from 'react'

const Search = () => {
    return (
        <div className='home-search-bg'>
            <div className='absolute right-5'>
                <div className='sm:w-[600px] h-[500px]'>
                    <h1 className='text-center text-[34px] font-normal mb-6 text-gray-300 mt-20'>Why Choose Us ?</h1>
                    <div className='flex flex-wrap gap-10 justify-center mt-20'>
                        {
                            chooseUs?.map((items) => (
                                <div key={items.id} className='text-center flex flex-col items-center space-y-2'>
                                    <Image src={`/images/About/m${items.id}.png`} width={40} height={43} alt={items.title} />
                                    <h1 className='text-2xl text-gray-300'>{items.number}</h1>
                                    <p className='text-gray-400'>{items.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search