import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import './buttton.scss'

const Button = (props) => {
  return (
    <>
      <NavLink to={props.Link}>
        <button className='btn-grad border-0 btn' onClick={props.function}>
          {props.value}
        </button>
      </NavLink>
    </>
  )
}

export default Button
