import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <div>
      {props.auth === 'button' ?
        <button className={props.type}>{props.name}</button>
        :
        <Link className={props.type} to={props.link}>{props.name}</Link>
      }
    </div>
  )
}

export default Button