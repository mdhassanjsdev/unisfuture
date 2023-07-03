import { TopBerIcons, navber } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <>
            <div className='bg-[#181818] px-5 sm:px-0'>
                <div className='container mx-auto'>
                    <div className='flex pt-[70px] pb-12 flex-col sm:flex-row space-y-8 sm:space-y-0'>
                        <div className='text-center sm:text-start'>
                            <div className='flex justify-center sm:justify-start'>
                                <Image src='/images/logo.png' width={200} height={35} alt={'logo'} />
                            </div>
                            <div>
                                <p className='text-[#ABABAB] leading-7 mt-5'>
                                    Bulgaria, Sofia 1000, <br />
                                    Sq. Preobrazhenie 1 <br />
                                    building B 2, floor 3
                                </p>
                                <p className='mt-5'>
                                    <a className='text-[15px] text-white' href="mailto:admission@unisfuture.com">admissions@unisfuture.com</a>
                                </p>
                            </div>
                        </div>
                        <div className='sm:pl-20 w-[350px]'>
                            <div className='border-b-2 border-b-[#3DB166]'>
                                <h1 className='pb-4 text-white text-base font-semibold'>Menu</h1>
                            </div>
                            <div className='pt-6 space-y-4'>
                                {
                                    navber?.map((item) => (
                                        <div key={item.id}>
                                            <Link href={item.path} className='font-semibold text-base text-[#ABABAB] hover:text-[#3db166] duration-150'>{item.title}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='sm:pl-20 sm:w-[700px]'>
                            <div className='border-b-2 border-b-[#3DB166]'>
                                <h1 className='pb-4 text-white text-base font-semibold'>Unisfuture is part of Education4everybody Foundation</h1>
                            </div>
                            <div className='pt-4'>
                                <p className='font-semibold text-base text-[#ABABAB]'>
                                    Education4everybody purpose is to support the development of strong and resilient education systems in Bulgaria so that more local and international students, especially people from low income countries, will have an access to the education they need and to contribute to building a more prosperous and sustainable world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#202020]'>
                <div className='container mx-auto'>
                    <div className='py-8 flex items-center justify-between flex-col sm:flex-row space-y-5 sm:space-y-0'>
                        <div>
                            <p className='text-[#ABABAB] leading-7 mx-2 sm:mx-0 text-center sm:text-start'>This website is part of the Education4everybody Foundation network</p>
                        </div>
                        <div className='flex justify-center sm:justify-end pr-0 sm:pr-16 gap-5'>
                            {
                                TopBerIcons.map((item) => (
                                    <a href='#' key={item.id} className=''>
                                        <item.icon color='#3DB166' size={18} />
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer