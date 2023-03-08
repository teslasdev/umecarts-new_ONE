import React, { useState } from 'react'
import Badge from '../common/Badge'
import {BiErrorCircle} from 'react-icons/bi'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {MdCheckBox,MdCheckBoxOutlineBlank} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import Social from '../common/Social'

const Buyer = () => {
  const [checkbox,setCheckbox] = useState(false)
  const [toggle, setToggle] = useState(true)
  return (
    <div className='um-sign-bg'>
      <Badge text="Create Account"/>
      <div className="um-sign-box">
        <form action="" className='um-sign-form'>
          <div className="um-sign-fields ">
            <h4 className='text-3xl font-extrabold m-6 mb-12 text-center'>Create a New Account</h4>
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


            <div className='flex items-start gap-2'>
              <input id="agree" type="checkoutput" hidden/>
              <span className='mt-1 cursor-pointer' onClick={() => setCheckbox(!checkbox)}>
                {checkbox ? <MdCheckBox color='#1F3047'/> : <MdCheckBoxOutlineBlank color='grey' />}
              </span>
              <label htmlFor="agree"className='um-sign-agree'>
                By creating your account, you agree to our <Link to="/" className='text-red-500'>Terms & Conditions </Link> and <Link to="/" className='text-red-500'>Privacy Policy.</Link>
              </label>
            </div>

            <Button type="um-btn um-btn-filled" name="Create Account" auth="button"/>

            <div className='mt-12 text-center'>
              <p>Or register with</p>
              <Social />
            </div>


            <div className='mt-12 text-center'>
              <p>Already have an Account?</p>
              <Button type="um-btn um-btn-outline" name="Log in" auth="link" link="/auth/login"/>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Buyer