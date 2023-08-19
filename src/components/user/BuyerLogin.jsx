import React, { useState } from 'react'
import { Badge } from '../common/Badge'
import {BiErrorCircle} from 'react-icons/bi'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {MdCheckBox,MdCheckBoxOutlineBlank} from 'react-icons/md'

import Button from '../common/Button'
import { Link } from 'react-router-dom'
import Social from '../common/Social'

const Buyer = () => {
  const [checkbox,setCheckbox] = useState(false)
  const [toggle, setToggle] = useState(true)
  return (
    <div className='um-sign-bg'>
      <Badge text="Login"/>
      <div className="um-sign-box h-full w-full py-12 sm:px-0 px-3 flex justify-center items-center">
        <form action="" className='um-sign-form sm:p-8 p-4 bg-white'>
          <div className="um-sign-fields ">
            <h4 className='sm:text-3xl text-xl font-extrabold m-6 sm:mb-12 mb-4 text-center'>Log in to your Account</h4>
            {/* Inputs */}
            <div className='w-full flex flex-col py-4'>
              <input type="email" placeholder='Email Address' className='um-sign-field'/>
              <span class="text-sm text-red-500 font-bold flex items-center gap-1 pt-2"><BiErrorCircle />Information error</span>
            </div>

        
            <div className='relative w-full flex flex-col  py-4'>
              <span className='um-sign-icon'  onClick={() => setToggle(!toggle)} >{toggle ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}</span>
              <input type={toggle ? 'password' : 'text'} placeholder='Password' className='um-sign-field'/>
              <span class="text-sm text-red-500 font-bold flex items-center gap-1 pt-2"><BiErrorCircle />Information error</span>
            </div>


            <div className='flex justify-between gap-2 py-6'>
              <div className='flex gap-1'>
                <input id="agree" type="checkoutput" hidden/>
                <span className='mt-1 cursor-pointer' onClick={() => setCheckbox(!checkbox)}>
                  {checkbox ? <MdCheckBox color='#1F3047'/> : <MdCheckBoxOutlineBlank color='grey' />}
                </span>
                <label htmlFor="agree" className='um-sign-agree flex justify-content'>
                  Keep me logged in
                </label>
              </div>
              <Link to="/forgotPassword" className='decoration-1 text-red-600 text-sm text-end'>Forgotten Password?</Link>
            </div>



            <Button type="um-btn um-btn-filled" name="Login" auth="button"/>

            <div className='mt-12 text-center'>
              <p>Or sign in with</p>
              <Social />
            </div>

            <div className='mt-12 text-center'>
              <p>New on UMECarts?</p>
              <Button type="um-btn um-btn-outline" name="Create an Account" auth="link" link="/user/buyer"/>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Buyer