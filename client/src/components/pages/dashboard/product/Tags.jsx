import React from 'react'
import { FaCross } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'

const Tags = ({
   color,
   name
}) => {
   return (
      <div>
         <div className={`bg-[${color}] py-1 px-3 flex items-center gap-2`}>
            <span className='text-[14px] font-semibold'>{name}</span>
            <span className='cursor-pointer'>
               <RxCross2 size={13} />
            </span>
         </div>
      </div>
   )
}

export default Tags