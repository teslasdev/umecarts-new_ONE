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

export const PrimaryInput = ({
   className,
   label,
   placeholder,
   type,
   Text,
   disabled,
   ...rest
}) => {
   return (
      <div className={`${className}`}>
         <label className='font-bold'>{label}</label>
         <input type={type} placeholder={placeholder} className='um-sign-field bg-white' disabled={disabled}/>
      </div>
   )
}

export const TextAreaInput = ({
   className,
   label,
   placeholder,
   type,
   Text,
   disabled,
   ...rest
}) => {
   return (
      <div className={`${className}`}>
         <label className='font-bold'>{label}</label>
         <textarea className='um-sign-field-text-area p-2' placeholder={placeholder}></textarea>
      </div>
   )
}

export const ActionInput = ({
   className,
   label,
   placeholder,
   type,
   Text,
   disabled,
   actionLeft,
   actionText,
   actionClick,
   actionRight,
   ...rest
}) => {
   return (
      <div className={`${className}`}>
         <label className='font-bold'>{label}</label>
         <div className='flex'>
            {actionLeft &&
            <div className='relative z-10 w-[15%] h-[52px] rounded-l-md flex justify-center items-center -mr-2 border border-[#0012291A] bg-[#D1D8E0]'>
               {actionText}
            </div>
            }
            <input type={type} placeholder={placeholder} className='um-sign-field bg-white w-[85%]' disabled={disabled}/>
            {actionRight &&
            <div className='w-[30%] h-[52px] rounded-r-md flex justify-center items-center -ml-5 border border-[#0012291A] bg-[#D1D8E0]'>
               {actionText}
            </div>
            }
         </div>
      </div>
   )
}