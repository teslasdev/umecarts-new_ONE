import React from 'react'
import { Link } from 'react-router-dom'

export const Button = (props) => {
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


export const PrimaryButton = ({
  classNameButton,
  type,
  link,
  name,
  click
}) => {
  return (
    <div>
      {type ?
        <button onClick={click} className={`${classNameButton}`}>{name}</button>
        :
        <Link className={`${classNameButton}`} to={link}>{name}</Link>
      }
    </div>
  )
}