import React, { useState } from 'react'
import logo from '../../Assets/img/logo.svg'
import { NavLink } from 'react-router-dom'
import Button from '../atoms/Button'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className='navbar navbar-expand-lg navbar-light pt-4'>
          <div className='container-fluid'>
            <NavLink className='navbar-brand AntiInvert w-25' to='/'>
              <img
                className='Logo w-100'
                style={{ maxWidth: '200px' }}
                src={logo}
                alt='Logo'
              />{' '}
            </NavLink>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <div className="ms-auto mt-2">
                <ul className="navbar-nav">
                  <li className="nav-item my-auto">
                    <a activeClassName='menu_active' href='/#WhatIsCopyTrading' exact className={`nav-link`}>What is Copy Trading</a>
                  </li>
                  <li className="nav-item my-auto">
                    <a activeClassName='menu_active' href='/#WhyCopyTrading' exact className={`nav-link`}>Why Copy Trading</a>
                  </li>
                  <li className="nav-item my-auto">
                    <a activeClassName='menu_active' href='/#Pros' exact className={`nav-link`}>Pros</a>
                  </li>
                  <li className="nav-item my-auto">
                    <a activeClassName='menu_active' href='/#HowItWorks' exact className={`nav-link`}>How it works</a>
                  </li>
                  <li className="nav-item my-auto">
                    <a activeClassName='menu_active' href='/#FAQ' exact className={`nav-link`}>FAQ</a>
                  </li>
                </ul>
              </div>
              <ul className='navbar-nav mb-2 mb-lg-0'>

                <li className='m-2 HalfScreen'>
                  <Button value='REGISTER' Link='/Register' />
                </li>
                <li className='m-2 HalfScreen'>
                  <Button value='LOG IN' Link='/Login' />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Navbar
