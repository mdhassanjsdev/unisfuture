import { prisma } from '@/lib/db'
import React, { useEffect } from 'react'

const getTodo = async () => {
    return prisma.User.findMany()
}



const Card = () => {

    useEffect(async () => {
        const todos = await getTodo()

        console.log(todos);

    }, [])


    return (
        <>
            <div className='text-center mb-10'>
                <h3 className='text-[#22D3A6] text-base font-semibold pb-[10px]'>Admin Panel</h3>
                <h1 className='text-[40px] font-bold text-[#151B46]'>Registration List</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            </div>
            <div className="w-full p-4 rounded-lg bg-white border border-gray-100 ">
                <div className="flex flex-row items-center justify-between mb-6">
                    <div className="flex flex-col">
                        <div className="text-sm font-light text-gray-500">Hey, Admin</div>
                        <div className="text-sm font-bold">
                            <span>How are you ?</span>
                        </div>
                    </div>
                </div>
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left table-auto">
                        <thead>
                            <tr>
                                <th className="px-3 py-2 text-xs font-medium tracking-wider text-gray-500 uppercase border-b border-gray-100 leading-4 dark:border-gray-800">ID</th>
                                <th className="px-3 py-2 text-xs font-medium tracking-wider text-gray-500 uppercase border-b border-gray-100 leading-4 dark:border-gray-800">Name</th>
                                <th className="px-3 py-2 text-xs font-medium tracking-wider text-gray-500 uppercase border-b border-gray-100 leading-4 dark:border-gray-800">E-mail</th>
                                <th className="px-3 py-2 text-xs font-medium tracking-wider text-gray-500 uppercase border-b border-gray-100 leading-4 dark:border-gray-800">Degree Name</th>
                                <th className="px-3 py-2 text-xs font-medium tracking-wider text-gray-500 uppercase border-b border-gray-100 leading-4 dark:border-gray-800">Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">RUS</td>
                                <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">Russian Federation</td>
                                <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">Россия</td>
                                <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">Moscow</td>
                                <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">146,599,183</td>
                            </tr>
                            <tr>
                                <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">DEU</td>
                                <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">Germany</td>
                                <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">Deutschland</td>
                                <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">Berlin</td>
                                <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">81,770,900</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Card