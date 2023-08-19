import React, { useState } from 'react'
import { Badge } from '../common/Badge'
import {BiErrorCircle} from 'react-icons/bi'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {MdCheckBox,MdCheckBoxOutlineBlank} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import Social from '../common/Social'

const Seller = () => {
  const [checkbox,setCheckbox] = useState(false)
  const [toggle, setToggle] = useState(true)
  return (
    <div className='um-sign-bg'>
      <Badge text="Be a Seller"/>
      <div className="um-sign-box h-full w-full py-12 sm:px-0 px-3 flex justify-center items-center">
        <form action="" className='um-sign-form sm:p-8 p-4 bg-white'>
          <div className="um-sign-fields ">
            <h4 className='text-3xl font-extrabold m-6 mb-12 text-center'>Register Your Shop</h4>
            <p className='my-6'>Kindly fill all inputs so that you can continue to register your seller’s account.</p>
            <div>
                <p className='font-bold py-6'>Basic Information</p>
            </div>
            {/* Inputs */}
            <div className='w-full flex flex-col py-4'>
              <input type="text" placeholder='Firstname' className='um-sign-field'/>
              <span class="text-sm text-red-500 font-bold flex items-center gap-1 pt-2"><BiErrorCircle />Information error</span>
            </div>

            <div className='w-full flex flex-col py-4'>
              <input type="text" placeholder='Email Address' className='um-sign-field'/>
              <span class="text-sm text-red-500 font-bold flex items-center gap-1 pt-2"><BiErrorCircle />Information error</span>
            </div>

            <div className='w-full flex flex-col  py-4'>
              <input type="text" placeholder='Phone number' className='um-sign-field'/>
              <span class="text-sm text-red-500 font-bold flex items-center gap-1 pt-2"><BiErrorCircle />Information error</span>
            </div>


            <div className='relative w-full flex flex-col  py-4'>
              <span className='um-sign-icon'  onClick={() => setToggle(!toggle)} >{toggle ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}</span>
              <input type={toggle ? 'password' : 'text'} placeholder='Password' className='um-sign-field'/>
              <span class="text-sm text-red-500 font-bold flex items-center gap-1 pt-2"><BiErrorCircle />Information error</span>
            </div>

            <div className='relative w-full flex flex-col  py-4'>
              <span className='um-sign-icon'  onClick={() => setToggle(!toggle)} >{toggle ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}</span>
              <input type={toggle ? 'password' : 'text'} placeholder='Confirm Password' className='um-sign-field'/>
              <span class="text-sm text-red-500 font-bold flex items-center gap-1 pt-2"><BiErrorCircle />Information error</span>
            </div>

            <div>
                <p className='font-bold py-6'>Business Information</p>
            </div>

            <div className='relative w-full flex flex-col  py-4'>
              <div className='flex items-center gap-2'>
                <input type='text' placeholder='Shop Name' className='um-sign-field w-4/5'/>
                <p>.umecarts.com</p>
              </div>
              <span class="text-sm flex items-center gap-1 pt-2"><BiErrorCircle />Your shop name will be used as prefix for your personal domain</span>
            </div>

            <div className='w-full flex flex-col  py-4'>
              <input type="text" placeholder='Shop Address' className='um-sign-field'/>
              <span class="text-sm text-red-500 font-bold flex items-center gap-1 pt-2"><BiErrorCircle />Information error</span>
            </div>


            <div className='flex items-start gap-2'>
              <input id="agree" type="checkoutput" hidden/>
              <span className='mt-1 cursor-pointer' onClick={() => setCheckbox(!checkbox)}>
                {checkbox ? <MdCheckBox color='#1F3047'/> : <MdCheckBoxOutlineBlank color='grey' />}
              </span>
              <label htmlFor="agree"className='um-sign-agree'>
                By creating your account, you agree to our <Link to="/" className='text-red-500'>Terms & Conditions </Link> and <Link to="/" className='text-red-500'>Privacy Policy.</Link>
              </label>
            </div>

            <Button type="um-btn um-btn-filled" name="Register Your Shop" auth="button"/>



            <div className='mt-12 text-center'>
              <p>Or register with</p>
              <Social />
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Seller