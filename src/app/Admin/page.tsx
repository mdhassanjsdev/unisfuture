"use client"

import Card from '@/components/Admin/Card'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Admin = () => {

    const route = useRouter()

    const [loading, setLoading] = useState(false)

    const authenticate = () => {
        const loginStatus = localStorage.getItem("login")

        if (loginStatus !== 'true') {
            alert('please login')
            route.push('/Admin/Login')
        }
    }

    useEffect(() => {
        authenticate();
        setLoading(false)
    }, [])

    return (
        <div>
            {
                loading ? <>
                    <h1>loading</h1>
                </> : <>
                    <div className='bg-[#FAFAFA]'>
                        <div className='container mx-auto py-10'>
                            <Card />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Admin