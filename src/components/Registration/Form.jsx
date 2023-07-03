"use client"

import { checkout } from '@/lib/checkout'

import React, { useState } from 'react'

const Form = (API) => {

    const [data, setData] = useState({
        name: '',
        email: '',
        Degree: ''
    })

    const inputHandle = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }




    const handleClick = () => {


        checkout({
            lineItems: [
                {
                    price: API.API,
                    quantity: 1
                }
            ]
        })
    }


    return (
        <div className='my-10'>
            <div>
                <h1 className='text-center text-[35px] font-black'>Apply Now</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='pt-10 pb-4'>
                    <input type='text' placeholder='Full Name*' name='name' onChange={inputHandle} className='md:pr-96 pl-8 py-4 outline-none border border-[#d3d3d3]' />
                </div>
                <div className='pb-4'>
                    <input type='text' placeholder='Email*' name='email' onChange={inputHandle} className='md:pr-96 pl-8 py-4 outline-none border border-[#d3d3d3]' />
                </div>
                <div className='pb-4'>
                    <input type='text' placeholder='Degree Name*' name='degree' onChange={inputHandle} className='md:pr-96 pl-8 py-4 outline-none border border-[#d3d3d3]' />
                </div>
                <div>
                    <textarea name="your-message" cols={40} rows={5} className='md:pr-[230px] pl-8 py-4 outline-none border border-[#d3d3d3]' aria-required="true" aria-invalid="false" placeholder="Message*"></textarea>
                </div>
                <div onClick={() => handleClick()} className='flex justify-center items-center px-[20px] md:px-[267px] py-4 bg-[#3db166] cursor-pointer'>
                    <p className='text-center text-white'>SUBMIT NOW</p>
                </div>
            </div>
        </div>
    )
}

export default Form