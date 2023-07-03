import { TopBerIcons } from '@/data/data'
import React from 'react'

const Icons = () => {
    return (
        <div className='bg-white w-full'>
            <div className='h-[195px] flex justify-center items-center'>
                {
                    TopBerIcons.map((item) => (
                        <a href='#' key={item.id} className='px-6'>
                            <item.icon color='#3db166' size={21} />
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Icons