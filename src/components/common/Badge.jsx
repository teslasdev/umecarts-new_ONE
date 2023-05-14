import React from 'react'
import {BiHome} from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb'
import { CgCreditCard } from 'react-icons/cg'
import {RxCaretRight} from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { BsCheck2Circle } from 'react-icons/bs';
export const Badge = (props) => {
  return (
    <div className='um-sign-badge'>
        <BiHome />
        <Link to="/">Home</Link>
        <RxCaretRight />
        {props.text2 === 'true'  ? <><Link to="/auth/login">Login</Link><RxCaretRight /></>  : '' }
        <span>{props.text}</span>
    </div>
  )
}


export const CartBadge = ({}) => {
  return (
    <>
      <div className='w-full py-6 flex justify-center items-center gap-5 text-[#ccc]'>
        <div className='flex justify-center items-center flex-col'>
          <FiShoppingCart size={40}/>
          <p className='text-xs'>1. My cart</p>
        </div>
        <RxCaretRight size={30} />
        <div className='flex justify-center items-center flex-col'>
          <IoLocationOutline size={40}/>
          <p className='text-xs'>2. Shipping info</p>
        </div>
        <RxCaretRight size={30} />
        <div className='flex justify-center items-center flex-col'>
          <TbTruckDelivery size={40}/>
          <p className='text-sm'>3. Delivery info</p>
        </div>
        <RxCaretRight size={30} />
        <div className='flex justify-center items-center flex-col'>
          <CgCreditCard size={40}/>
          <p className='text-sm'>4. Payment</p>
        </div>
        <RxCaretRight size={30} />
        <div className='flex justify-center items-center flex-col'>
          <BsCheck2Circle size={40}/>
          <p className='text-sm'>5. Confirmation</p>
        </div>
      </div>
    </>
  )
}
