import React from 'react'
import { Link } from 'react-router-dom'

export const Button = ({
  auth,
  className,
  name,
  link,
  isLoading,
  disabled,
  onClick,
  type
}) => {
  return (
    <div>
      {auth === 'button' ?
        <button type={type} onClick={onClick} className={className} disabled={disabled}>{isLoading ? 'Loading....' : name}</button>
        :
        <Link className={className} to={link}>{name}</Link>
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