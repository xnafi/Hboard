import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

function RightSection() {
    return (
        <>
            <div className=' w-2/4 px-6 h-full text-center'>
                <div className='m-auto mt-7 text-start w-100 h-100'>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center h-10 w-10 rounded-lg bg-[#262626]'>
                            <SearchIcon className='w-8 h-8'></SearchIcon>
                        </div>

                        <div className='flex justify-center items-center h-10 w-10 rounded-lg bg-[#262626]'>
                            <NotificationsIcon className='w-8 h-8 animate-bounce'></NotificationsIcon>

                        </div>

                    </div>

                    <div className='flex flex-col space-y-8 text-left mt-10'>
                        <span className='text-3xl font-semibold text-white tracking-wider'>
                            Statstic
                        </span>

                        <div className='flex justify-center items-center"'>
                            <div className='flex flex-col z-10 justify-center items-center absolute h-36 w-36 bg-black rounded-full space-y-2'>
                                <span className='text-sm text-zinc-600'>
                                    Time Log
                                </span>
                                <span className='text-4xl font-bold text-white'>
                                    98%
                                </span>
                                <span className='flex text-sm font-semibold text-green-600'>
                                    +23%
                                </span>

                            </div>

                        </div>

                    </div>
                    <div className='flex mt-40 flex-col text-justify'>
                        <span className='text-3xl font-semibold text-white tracking-wider'>
                            Projects
                        </span>
                        <div className='grid grid-cols-2 gap-5 mt-5 justify-center'>
                            <div className=' flex flex-col justify-center h-20 bg-[#262626] rounded-lg space-y-2 cursor-pointer'>
                                <span className='text-sm font-semibold text-zinc-600 ml-5'>
                                    Total
                                </span>
                                <span className='text-xl font-semibold text-white border-l-4 border-green-400 ml-5 pl-3'>
                                    201
                                </span>
                            </div>
                            <div className=' flex flex-col justify-center h-20 bg-[#262626] rounded-lg space-y-2 cursor-pointer'>
                                <span className='text-sm font-semibold text-zinc-600 ml-5'>
                                    Completed
                                </span>
                                <span className='text-xl font-semibold text-white border-l-4 border-green-400 ml-5 pl-3'>
                                    290
                                </span>
                            </div>

                            <div className=' flex flex-col justify-center h-20 bg-[#262626] rounded-lg space-y-2 cursor-pointer'>
                                <span className='text-sm font-semibold text-zinc-600 ml-5'>
                                    In Progress
                                </span>
                                <span className='text-xl font-semibold text-white border-l-4 border-green-400 ml-5 pl-3'>
                                    298
                                </span>
                            </div>

                            <div className=' flex flex-col justify-center h-20 bg-[#262626] rounded-lg space-y-2 cursor-pointer'>
                                <span className='text-sm font-semibold text-zinc-600 ml-5'>
                                    Waiting
                                </span>
                                <span className='text-xl font-semibold text-white border-l-4 border-green-400 ml-5 pl-3'>
                                    11
                                </span>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default RightSection