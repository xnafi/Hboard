import React from 'react'
import MiddleSectionCard from './MiddleSectionCard'
import People from './peoples'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import OverflowScrolling from 'react-overflow-scrolling';


function MiddleSection({ name }) {
    const [Item] = React.useState(People);
    return (
        <>
            {/*************************** Middle Section Header **************************/}

            <div className='text-left border mt-5 px-10 border-y-0 border-l-0 border-gray-500 border-opacity-10 w-8/12 h-screen overflow-scroll scrollbar-none'>
                <div className='mt-7 text-start w-100 h-100 flex flex-row space-x-2'>
                    <h1 className=' font-extrabold text-sm font-sans'>People</h1>
                    <h1 className=' font-extrabold text-sm font-sans'>></h1>
                    <h1 className=' font-extrabold text-sm font-sans'>Design Team</h1>
                </div>
                <div className='mt-7 text-start w-100 h-100 flex flex-row space-x-2'>
                    <h1 className=' font-bold text-3xl'>
                        39 People
                    </h1>
                </div>

                {/*************************** Middle Section SearchBar **************************/}

                <div className="flex flex-row space-x-5 mt-10 w-full">
                    <div className='inline-flex relative items-center w-full'>
                        <input type="text" placeholder='search' className='text-md w-full bg-gray-800 text-white pl-9 py-2 rounded-full focus:outline-none' />
                        <div className=' absolute pl-2'>
                            <ManageSearchIcon></ManageSearchIcon>
                        </div>
                    </div>
                    <div className='w-full'>

                        <select name={name} className="text-md w-full bg-gray-800 text-white px-5 py-2 rounded-full focus:outline-none">
                            <option value="1">Position</option>
                            <option value="2">2</option>
                        </select>


                    </div>
                    <div className='w-full'>

                        <select name={name} className="text-md w-full bg-gray-800 text-white px-5 py-2 rounded-full focus:outline-none">
                            <option value="1">More</option>
                            <option value="2">2</option>
                        </select>




                    </div>
                </div>
                {/*************************** Middle Section Card **************************/}

                <div className='w-full grid grid-cols-3 place-items-center mt-5 space-y-4 mb-9'>
                    {
                        Item.map(current => {
                            return (
                                <MiddleSectionCard key={current.id} {...current} />
                            )
                        })
                    }
                </div>

            </div>





        </>
    )
}

export default MiddleSection