import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const ThumbNail = () => {
   return (
      <div className='relative h-[120px] w-[120px] border border-[#D1D8E0] rounded-md'>
         <div className='absolute w-[25px] bg-white h-[25px] shadow-lg -top-3 -right-2 rounded-full flex items-center justify-center'>
            <RxCross2 />
         </div>
         <div className='w-full h-[60%]'>
            image
         </div>
         <div className='bg-[#D1D8E0] h-[40%] text-sm px-2 py-1 rounded-b-sm'>
            <p>Filename... .jpg</p>
            <p>2kb</p>
         </div>
      </div>
   )
}

export default ThumbNail
