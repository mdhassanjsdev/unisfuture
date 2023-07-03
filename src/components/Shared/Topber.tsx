import { TopBerIcons } from '@/data/data'
import React from 'react'

function Topber() {
    return (
        <div className='bg-[#192F59]'>
            <div className='flex justify-center sm:justify-end py-[10px] pr-0 sm:pr-16 gap-5'>
                {
                    TopBerIcons.map((item) => (
                        <a href='#' key={item.id} className=''>
                            <item.icon color='white' size={18} />
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Topber