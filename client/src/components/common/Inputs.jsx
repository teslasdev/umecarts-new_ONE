import React from 'react'

export const FormInput = ({
   className,
   label,
   placeholder,
   type,
   Text,
   ...rest
}) => {
   return (
      <div className={`input-box flex ${className}`}>
         <input type={type} className='w-[70%] bg-red-400'  placeholder={placeholder} />
         <button className='text-md input-btn'>{Text}</button>
      </div>
   )
}