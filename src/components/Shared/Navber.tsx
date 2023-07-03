import { navber } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navber() {
    return (
        <div className='container mx-auto'>
            <div className='pt-[49px] flex items-center justify-between'>
                <div>
                    <Image src='/images/logo.png' width={400} height={71} alt='logo' />
                </div>
                <div className='sm:flex justify-end hidden'>
                    <div className='flex gap-10'>
                        {
                            navber?.map((item) => (
                                <div key={item.id}>
                                    <Link href={item.path} className='font-semibold text-base text-[#163269] hover:text-[#3db166] duration-150'>{item.title}</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navber