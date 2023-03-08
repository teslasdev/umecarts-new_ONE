import React from 'react'
import bannerFull from '../../../assets/image/cart banner full.png'

const Banner3 = () => {
  return (
    <>
        <div className='flex gap-2 py-12'>
            <div className='w-full shadow-sm rounded-sm'>
                <img src={bannerFull} className='w-full h-full rounded-sm' alt="" srcset="" />
            </div>
        </div>
    </>
  )
}

export default Banner3