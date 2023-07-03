import { services } from '@/data/data'
import React from 'react'

const Services = () => {
    return (
        <div className='py-10 mx-6'>
            <div className='container mx-auto'>
                <div className='text-center py-6'>
                    <h1 className='text-[40px] font-bold text-[#151B46]'>See our Top Notch Services</h1>
                </div>
                <div className='space-y-10'>
                    {
                        services.map((itmes) => (
                            <div>
                                <h1 className='text-[#22D3A6] text-base font-semibold pb-[10px]'><span>{itmes.id} . </span>{itmes.title}</h1>
                                <p className='text-sm leading-7'>{itmes.discription}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services