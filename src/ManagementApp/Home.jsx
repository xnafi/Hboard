import React, { } from 'react'
import MiddleSection from './MiddleSection'
import LeftSection from './LeftSection'
import RightSection from './RightSection'



function Home() {



    return (
        <>
            <div className='flex flex-row text-center rounded-md overflow-hidden tracking-wider text-white w-screen h-screen bg-[#1f1f1f]'>
                {/*************************** Left Section **************************/}
                <LeftSection />
                {/*************************** Middle Section **************************/}
                <MiddleSection />
                {/*************************** Right Section **************************/}
                <RightSection />


            </div>
        </>

    )
}

export default Home