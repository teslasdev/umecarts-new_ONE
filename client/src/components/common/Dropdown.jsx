export const DropdownDefault = ({
   close,
   dropData,
   options
}) => {
  return (
   <>
      { close &&
      <div className='relative'>
         <div className='absolute w-full overflow-y-scroll top-0 p-4 min-h-[40px] bg-white rounded-sm shadow-md'>
           <input type="text" className='w-full input-form-search' />
           <ul className='my-3'>
             <li className='pl-2 py-2'>Select Your Country</li>
             {dropData?.map((item , index) => {
               return <li className='pl-2 py-2 cursor-pointer hover:bg-red-500 hover:text-white'>{item.country}</li>
             })}
           </ul>
         </div>
      </div>
      }
   </>
   )
}