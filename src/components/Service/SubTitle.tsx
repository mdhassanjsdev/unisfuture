import Image from 'next/image'
import React from 'react'

const SubTitle = () => {
    return (
        <div className='my-5 pt-12 mx-6'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className='sm:w-[500px]'>
                        <p className='text-[18px] text-[#747474] italic'>Our Philosophy</p>
                        <h1 className='text-[41px] font-black pb-4'>Our Top Mission</h1>
                        <p className='font-[16px] leading-7 text-[#747474]'>We believe that young people ready to dive into the adventure of study abroad will become the next generation of globally-minded leaders who will change the world. <br /> <br/> Our mission is to enable motivated people anywhere in the world to fulfil their potential through educational achievement, international mobility, and career development. </p>
                    </div>
                    <div className='hidden md:block'>
                        <Image src='/images/Services/sec-1.jpg' width={675} height={571} alt='sec-1' />
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='hidden md:block'>
                        <Image src='/images/Services/sec-2.jpg' width={571} height={673} alt='sec-2' />
                    </div>
                    <div className='sm:w-[650px]'>
                        <p className='text-[18px] text-[#747474] italic'>Our Strategy</p>
                        <h1 className='text-[41px] font-black pb-4'>We Provide Solutions</h1>
                        <p className='font-[16px] leading-7 text-[#747474]'>We believe that young people ready to dive into the adventure of study abroad will become the next generation of globally-minded leaders who will change the world. <br /> <br /> Our mission is to enable motivated people anywhere in the world to fulfil their potential through educational achievement, international mobility, and career development. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubTitle