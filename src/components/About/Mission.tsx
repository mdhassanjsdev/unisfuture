import { missionLinst } from '@/data/data'
import Image from 'next/image'
import React from 'react'

const Mission = () => {
    return (
        <div className='about-mission-bg sm:h-[450px] py-5'>
            <div className='container mx-auto'>
                <div className='flex flex-col sm:flex-row justify-center sm:justify-between sm:h-[450px] gap-12 items-center'>
                    {
                        missionLinst?.map((items) => (
                            <div key={items.id}>
                                <div className='flex justify-center sm:justify-start'>
                                    <Image src={`/images/About/m${items.id}.png`} width={40} height={43} alt={items.title} />
                                </div>
                                <h1 className='text-[18px] font-semibold text-[#3db166] pt-6 text-center sm:text-start'>{items.title}</h1>
                                <p className='font-medium text-white pt-6 leading-7 text-center sm:text-start'>{items.discription}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Mission