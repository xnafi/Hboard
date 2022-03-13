import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function MiddleSectionCard({ image, id, name, positon, progress }) {


  return (
    <>

     
        <div id={id} className='flex flex-col w-40 hover:scale-105 hover:animate-pulse transition-all h-60 xl:w-48 xl:h-60 col-span-1 rounded-3xl bg-gray-800 items-center justify-center space-y-4 cursor-pointer'>
          <div className='flex items-center justify-center rounded-full'>
            <img src={image} className=' w-28 h-28 rounded-full' alt="" />
          </div>
          <div className='flex flex-col'>
            <span className='text-white font-semibold text-xl lg:text-sm text-center'>
              {name}
            </span>
            <span className='text-zinc-700 text-md font-semibold'>
              {positon}
            </span>
          </div>
          <div className='flex justify-center items-center m-auto space-x-3 lg:space-x-2'>
            <AccessTimeIcon sx={{ fontSize: 18 }} className="h-4 w-4 p-0"></AccessTimeIcon>
            <div className='w-16 lg:w-12 h-1 bg-[#323232] rounded-full'>
              <div className='w-4/5 h-1 bg-orange-500 rounded-full'>

              </div>
            </div>
            <span className='font-semibold text-xs '>
              {progress}
            </span>


          </div>
        </div>
      

    </>
  )
}

export default MiddleSectionCard