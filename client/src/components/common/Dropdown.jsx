import { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"

export const DropdownDefault = ({
   close,
   className,
   options,
   label,
   placeholder,
   disabled,
   type,
   dropLabel
}) => {
  const [isOpen , setOpen] = useState(false)
  return (
   <>
      <div className='relative w-[100%]'>
          <div className={`${className}`}>
            <label className='font-bold'>{label}</label>
            <div type={type} className='um-sign-field bg-white border-[1.5px] border-[#94A3B8] w-full cursor-pointer flex items-center' onClick={() => setOpen(!isOpen)}>
              <input type="hidden" className="bg-transparent cursor-pointer"  placeholder={placeholder} disabled={disabled} onClick={() => setOpen(!isOpen)} />
              <p className="text-[#777777]">{placeholder}</p>
            </div>
            <span className="absolute right-5 top-[55%]">
              {!isOpen ?
                <FaAngleDown /> 
                :
                <FaAngleUp /> 
              }
            </span>
          </div>
          {isOpen &&
          <div className='absolute z-30 w-full overflow-y-scroll top-full p-4 min-h-[40px] bg-white rounded-sm shadow-md'>
            <input type="text" className='w-full input-form-search' />
            <ul className='my-3'>
             <li className='pl-2 py-2'>{dropLabel}</li>
               {options?.map((item , index) => {
                 return <li className='pl-2 py-2 cursor-pointer hover:bg-red-500 hover:text-white border-b border-[#F0F7FF]' key={index} >{item.label}</li>
               })}
            </ul>
         </div>
          }
      </div>
   </>
   )
}