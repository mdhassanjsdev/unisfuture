"use client"

import Details from '@/components/Registration/Details'
import React, { useEffect, useState } from 'react'

import Form from '@/components/Registration/Form';

import { usePathname } from 'next/navigation'
import { studyInEurope } from '@/data/data';


const page = () => {

    const pathname = usePathname()

    const [Data, setData] = useState({})

    useEffect(() => {

        const id = pathname.split('/')[2]

        const indexNumber = Number(id)

        setData(studyInEurope[indexNumber])

    }, [pathname])


    return (
        <>
            <Details Data={Data} />
            <Form API={Data?.strie_key} />
        </>
    )
}

export default page