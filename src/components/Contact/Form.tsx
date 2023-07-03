import React from 'react'

const Form = () => {
    return (
        <div className='bg-[#F3F3F3] py-12 px-5 md:px-0'>
            <div className='text-center'>
                <h1 className='text-[43px] font-extrabold text-[#161616]'>Leave us your info</h1>
                <p className='text-[#747474]'>and we will get back to you.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='pt-10 pb-4'>
                    <input type='text' placeholder='Full Name*' className='md:pr-96 pl-8 py-4 border-none outline-none' />
                </div>
                <div className='pb-4'>
                    <input type='text' placeholder='Email*' className='md:pr-96 pl-8 py-4 border-none outline-none' />
                </div>
                <div className='pb-4'>
                    <input type='text' placeholder='Subject*' className='md:pr-96 pl-8 py-4 border-none outline-none' />
                </div>
                <div>
                    <textarea name="your-message" cols={40} rows={5} className='md:pr-[230px] pl-8 py-4 border-none outline-none' aria-required="true" aria-invalid="false" placeholder="Message*"></textarea>
                </div>
                <div className='flex justify-center items-center px-[20px] md:px-[267px] py-4 bg-[#3db166] cursor-pointer'>
                    <p className='text-center text-white'>SUBMIT NOW</p>
                </div>
            </div>
        </div>
    )
}

export default Form