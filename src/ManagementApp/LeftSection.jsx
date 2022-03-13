import React from 'react'

function RightSection() {
    return (
        <>
            <div className=' bg-[#121212] space-x-4 space-y-4 px-4 text-left '>
                <div className='mt-7 text-start w-100 h-100'>
                    {/*************************** HBoard **************************/}

                    
                    <h1 className=' font-extrabold text-[40px] font-sans'>HBoard</h1>


                    {/*************************** tools **************************/}
                    <div className='flex flex-col space-y-2 mt-6 !justify-start'>
                        <span className='font-bold text-sm'>
                            Tools
                        </span>
                        <div className='inline-flex  flex-col space-y-2'>
                            <button className=' bg-slate-800 py-3 px-2 rounded-md hover:animate-none hover:bg-blue-600 space-x-2 justify-start items-center flex flex-row'>
                                <span className="material-icons md-36">dashboard</span>
                                <span className='font-bold'>Dashboard</span>
                            </button>

                            <button className=' bg-slate-800 py-3 px-2 rounded-md hover:animate-none hover:bg-blue-600 space-x-2 justify-start items-center flex flex-row'>
                                <span class="material-icons md-36">
                                    savings
                                </span>
                                <span className='font-bold'>Fiance</span>
                            </button>

                            <button className=' bg-slate-800 py-3 px-2 rounded-md hover:animate-none hover:bg-blue-600 space-x-2 justify-start items-center flex flex-row'>
                                <span class="material-icons md-36">
                                    people
                                </span>
                                <span className='font-bold'>People</span>
                            </button>
                            <button className=' bg-slate-800 py-3 px-2 rounded-md hover:animate-none hover:bg-blue-600 space-x-2 justify-start items-center flex flex-row'>
                                <span class="material-icons">
                                    assessment
                                </span>
                                <span className='font-bold'>Statistic</span>
                            </button>

                            <button className=' bg-slate-800 py-3 px-2 rounded-md hover:animate-none hover:bg-blue-600 space-x-2 justify-start items-center flex flex-row'>
                                <span class="material-icons">
                                    all_inbox
                                </span>
                                <span className='font-bold'>Document</span>
                            </button>


                        </div>

                    </div>
                    {/*************************** others **************************/}

                    <div className='flex flex-col space-y-5 mt-5'>
                        <span className='font-bold text-sm'>
                            Other
                        </span>

                        <div className='inline-flex  flex-col space-y-4'>

                            <button className=' bg-slate-800 py-3 px-2 rounded-md hover:animate-none hover:bg-blue-600 space-x-2 justify-between items-center flex flex-row'>
                                <div className=' flex justify-center items-center space-x-1'>
                                    <span className="material-icons md-36">chat</span>
                                    <span className='font-bold'>chat</span>
                                </div>
                                <div>
                                    <span className='bg-gray-600 px-3 py-1 animate-pulse rounded-full font-bold flex justify-start items-center'>
                                        2
                                    </span>
                                </div>
                            </button>

                            <button className=' bg-slate-800 py-3 px-2 rounded-md hover:animate-none hover:bg-blue-600 space-x-2 justify-start items-center flex flex-row'>
                                <span class="material-icons md-36">
                                    support
                                </span>
                                <span className='font-bold'>Support</span>
                            </button>


                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default RightSection;