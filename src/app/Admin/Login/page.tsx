"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {

    const route = useRouter()

    const [formData, setFormData] = useState({ email: '', password: '' })


    const handleChange = (e: any) => {

        const { target } = e;
        const { name, value } = target;


        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleClick = (e: any) => {
        e.preventDefault();

        const setemail = 'yourcompany@mail.com'
        const setpassword = 'abcdefghij'

        const { email, password } = formData

        if (!email || !password) {
            return alert('please complete all filds')
        }

        if (email === setemail && password === setpassword) {
            route.push('/Admin')

            localStorage.setItem('login', 'true');

        } else {
            return alert('invalid cradintials')
        }
    }

    return (
        <section className="bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                            Sign in to Admin Panel
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="border-none outline-none sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="name@company.com" required={true} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="border-none outline-none sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white " required={true} />
                            </div>
                            <button onClick={handleClick} type="submit" className="w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#1D4ED8]">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page