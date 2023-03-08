import React from 'react'
import {BiHome} from 'react-icons/bi';
import {RxCaretRight} from 'react-icons/rx';
import { Link } from 'react-router-dom';
const Badge = (props) => {
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

export default Badge