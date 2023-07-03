import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className='py-20 mx-[15px] sm:mx-0'>
            <div className='container mx-auto'>
                <div className='flex justify-center flex-col sm:flex-row gap-20 items-center'>
                    <div className='sm:w-[400px]'>
                        <Image src='/images/Home/about.jpg' width={395} height={600} alt='adout' />
                    </div>
                    <div className='sm:w-[700px]'>
                        <h4 className='text-[18px] font-semibold text-[#38A065]'>ABOUT US</h4>
                        <h1 className='text-[42px] font-normal mb-6'>We Provide The Best Way To Success Your Migration</h1>
                        <p className='text-sm leading-7 mb-6'>Bravo World is an abroad education consultancy that has been helping students achieve their dreams of studying abroad since 2013. With a team of experienced and knowledgeable consultants, we strive to provide personalized and comprehensive support to students throughout the entire process of applying to and studying at international universities. The many countries which we provide our assistance for not just include the USA but also UK, Thailand, Australia, Malaysia, Canada, and many more. <br /><br />
                            At Bravo World, we understand that studying abroad is a major decision that can be overwhelming for students and their families. That’s why we take the time to listen to our client’s needs and goals and provide them with customized advice and guidance to ensure that they make the best possible choice for their future.</p>
                        <Link href='/About' className='text-white bg-[#38A065] px-10 py-4 my-6'>More about us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About