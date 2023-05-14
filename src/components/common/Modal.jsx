import React from 'react'
import {IoMdClose} from 'react-icons/io'
import {SlHandbag} from 'react-icons/sl'
import {FiShoppingCart} from 'react-icons/fi'
import AOS from 'aos'
import { Link } from 'react-router-dom'

export const FullModal = ({
  Style,
  Label
}) => {
  AOS.init();
  return (
    <>
      <div className='blur-bg fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center text-[#2E486B]'>
        <div className={`relative bg-white min-w-[30%] min-h-[100px]  blur-0 z-45 rounded-md  ${Style}`} data-aos="zoom-in-down">
          <div className='overflow-y-scroll h-[600px] p-5 pb-32'>
            <div className='flex justify-between items-center pr-4'>
              <h3 className='font-bold text-[18px]'>{Label}</h3>
              <span className='bg-gray-hover cursor-pointer'>
                <IoMdClose size={20}/>
              </span>
            </div>

            <div className='flex justify-between pr-20 mt-5 font-semibold border-gray-bottom pb-2'>
              <h5>Product Variation</h5>
              <h5>Quantity</h5>
            </div>


            <div className='flex justify-between my-3 items-center'>
              <h2 className='font-bold'>Size 41</h2>
              <div className='flex gap-5 items-center'>
                <span className='um-product-reading text-[20px]'>-</span>
                <h4>01</h4>
                <span className='um-product-reading text-[20px]'>+</span>
                <p className='text-red-500 text-sm'>(20) Available</p>
              </div>
            </div>


            <div className='flex items-center gap-8 py-2'>
              <span>Colour</span>
              <div className='flex items-end gap-6'>
                  <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#ffffff] p-4'/>
                  <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#EF9F43] p-4' />
              </div>
            </div>


            <div className='flex items-center gap-8 py-2'>
              <span>Price</span>
              <div className='flex items-end gap-6'>
                <h2 className='text-red-700 text-xl font-extrabold'>₦12,500<span className='text-sm text-gray-200 font-light'>/pc</span></h2>
              </div>
            </div>

            <div className='flex justify-between my-3 items-center'>
              <h2 className='font-bold'>Size 42</h2>
              <div className='flex gap-5 items-center'>
                <span className='um-product-reading text-[20px]'>-</span>
                <h4>01</h4>
                <span className='um-product-reading text-[20px]'>+</span>
                <p className='text-red-500 text-sm'>(20) Available</p>
              </div>
            </div>


            <div className='flex items-center gap-8 py-2'>
              <span>Colour</span>
              <div className='flex items-end gap-6'>
                  <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#ffffff] p-4'/>
                  <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#EF9F43] p-4' />
              </div>
            </div>


            <div className='flex items-center gap-8 py-2'>
              <span>Price</span>
              <div className='flex items-end gap-6'>
                <h2 className='text-red-700 text-xl font-extrabold'>₦12,500<span className='text-sm text-gray-200 font-light'>/pc</span></h2>
              </div>
            </div>

            <div className='flex justify-between my-3 items-center'>
              <h2 className='font-bold'>Size 43</h2>
              <div className='flex gap-5 items-center'>
                <span className='um-product-reading text-[20px]'>-</span>
                <h4>01</h4>
                <span className='um-product-reading text-[20px]'>+</span>
                <p className='text-red-500 text-sm'>(20) Available</p>
              </div>
            </div>


            <div className='flex items-center gap-8 py-2'>
              <span>Colour</span>
              <div className='flex items-end gap-6'>
                  <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#ffffff] p-4'/>
                  <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#EF9F43] p-4' />
              </div>
            </div>


            <div className='flex items-center gap-8 py-2'>
              <span>Price</span>
              <div className='flex items-end gap-6'>
                <h2 className='text-red-700 text-xl font-extrabold'>₦12,500<span className='text-sm text-gray-200 font-light'>/pc</span></h2>
              </div>
            </div>
          </div>

          <div className='fixed bottom-0 bg-white p-3 py-4 w-full'>
            <div className='flex items-center gap-8 py-2'>
              <span>Total</span>
              <div className='flex items-end gap-6'>
                <h2 className='text-red-700 text-xl font-extrabold'>₦12,500</h2>
              </div>
            </div>

            <div className='flex gap-3'>
              <Link to='/cart' className='btn-default-full bg-blue-secondary text-lg flex items-center justify-center gap-2'><FiShoppingCart /> Add to Cart</Link>
              <Link className='btn-default-full bg-red-secondary text-lg flex items-center justify-center gap-2'><SlHandbag/> Buy Now</Link>
            </div>
            

          </div>
        </div>
      </div>
    </>
  )
}


export const FormPopup = ({
  Style,
  Label
}) => {
  AOS.init();
  return (
    <>
      <div className='blur-bg fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center text-[#2E486B]'>
        <div className={`relative bg-white min-w-[30%] min-h-[100px] p-6  blur-0 z-45 rounded-md  ${Style}`} data-aos="zoom-in-down">
          <div className='flex justify-between items-center pr-4'>
            <h3 className='font-bold text-[18px]'>{Label}</h3>
            <span className='bg-gray-hover cursor-pointer'>
              <IoMdClose size={20}/>
            </span>
          </div>

          <div>
            <div className='w-full flex flex-col gap-2 py-4'>
              <label className='font-bold'>Address</label>
              <input type="text" placeholder='House Number, Street, Town' className='um-sign-field'/>
            </div>

            <div className='w-full flex flex-col gap-2 py-4'>
              <label className='font-bold'>Country</label>
              <select type="text" placeholder='Country' className='um-sign-field select-field px-10'>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
              </select>
            </div>

            <div className='w-full flex flex-col gap-2 py-4'>
              <label className='font-bold'>State</label>
              <select type="text" placeholder='State' className='um-sign-field select-field px-10'>
                <option>State</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
              </select>
            </div>


            <div className='w-full flex flex-col gap-2 py-4'>
              <label className='font-bold'>City</label>
              <select type="text" placeholder='City' className='um-sign-field select-field px-10'>
                <option>City</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
              </select>
            </div>


            <div className='w-full flex flex-col gap-2 py-4'>
              <label className='font-bold'>Phone Number</label>
              <input type="text" placeholder='Phone Number' className='um-sign-field'/>
            </div>

            <div className='w-[100%] flex justify-center items-center'>
              <button className='h-[52px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2'>Save Address</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

