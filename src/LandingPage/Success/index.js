import React from 'react'
import classes from './Success.module.css'
import BoyImg from '../../Assets/img/BoyImg.png'

export default function Success() {
    return (
        <div className={`${classes.margin}`}>
            <div className={classes.bg_1}>
                <div className='row'>
                    <div className={`col-lg-6 col-md-6 col-12 p-5 ${classes.marginDiv}`}>
                        {/* <p className='text-start'>abcd</p> */}
                        <p>You can do all the work and spend years mastering your trading skill or just copy other traders who have already gained top-tier trading expertise.</p>
                        <h1 className={`ExtraBold pt-5 ${classes.heading}`}>When they trade, you copy.</h1>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                        {/* <p className='text-end'>zyxwvu</p> */}
                        <img src={BoyImg} className='d-block mx-auto w-50' alt="" />
                        <button className={`text-white border-0 ExtraBold p-4 ms-auto w-100 d-block ${classes.button}`}>Their success becomes yours too!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
