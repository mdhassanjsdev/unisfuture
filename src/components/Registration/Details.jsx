import React from 'react'



const Details = ({ Data }) => {


    return (
        <div className='mt-10'>
            <div className='container mx-auto'>
                <div>
                    <h1 className='text-[45px] font-bold text-[#161616] mb-5'>{Data?.title}</h1>
                    <div className='bg-[#3db166] w-full h-[314px] my-5'>
                        <div className='h-[314px] flex items-center flex-wrap justify-around flex-row'>

                            <div className='space-y-5'>
                                <h1 className='text-[18px] text-white'><span className='font-black pr-3'>Discipline</span>{Data?.Discipline}</h1>
                                <h1 className='text-[18px] text-white'><span className='font-black pr-3'>Duration</span>{Data?.Duration}</h1>
                                <h1 className='text-[18px] text-white'><span className='font-black pr-3'>Attendance</span>{Data?.Attendance}</h1>
                                <h1 className='text-[18px] text-white'><span className='font-black pr-3'>University</span>{Data?.University}</h1>
                            </div>
                            <div className='space-y-5'>
                                <h1 className='text-[18px] text-white'><span className='font-black pr-3'>Country</span>{Data?.Country}</h1>
                                <h1 className='text-[18px] text-white'><span className='font-black pr-3'>Intake</span>{Data?.Intake}</h1>
                                <h1 className='text-[18px] text-white'><span className='font-black pr-3'>Degree type</span>{Data?.Discipline}</h1>
                                <h1 className='text-[18px] text-white'><span className='font-black pr-3'>Fees</span>{Data?.fees}</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Details