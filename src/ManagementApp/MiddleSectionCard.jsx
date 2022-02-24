import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function MiddleSectionCard({ image, id, name, positon, progress }) {


  return (
    <>
      <div className='grid grid-cols-3 w-full mt-7 gap-5 pl-4'>
        
        <div id={id} className='flex flex-col w-36 h-44 xl:w-60 xl:h-60 col-span-1 rounded-3xl bg-[#262626] items-center justify-center space-y-4 cursor-pointer'>
          <div className='flex items-center justify-center h-16 w-16 rounded-full bg-[#323232]'>
            <img src={image} className='h-10 w-10 rounded-full' alt="" />
          </div>
          <div className='flex flex-col'>
            <span className='text-white font-semibold text-xs text-center'>
              {name}
            </span>
            <span className='text-zinc-700 text-xs font-semibold'>
              {positon}
            </span>
          </div>
          <div className='flex justify-center items-center m-auto space-x-1'>
            <AccessTimeIcon sx={{ fontSize: 18 }} className="h-4 w-4 p-0 text-[#323232]"></AccessTimeIcon>
            <div className='w-16 h-1 bg-[#323232] rounded-full'>
              <div className='w-4/5 h-1 bg-orange-500 rounded-full'>

              </div>
            </div>
            <span className='font-semibold text-xs text-zinc-500'>
              {progress}
            </span>

          </div>
        </div>
      </div>
    </>
  )
}

export default MiddleSectionCard