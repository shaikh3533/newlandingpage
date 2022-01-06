import React, { useState } from 'react'
import classes from './Pros.module.css'

export default function Pros() {
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(false)

    const handleClick1 = () => {
        setShow1(true);
        setShow2(false);
    }
    const handleClick2 = () => {
        setShow1(false);
        setShow2(true);
    }

    return (
        <div id='Pros'>
            <div className={`container ${classes.margin}`}>
                <p className={`mb-5 mb-5 ${classes.heading1} ${classes.textColor}`}>Benefits for our users and traders</p>
            </div>
            <button className={`me-auto ${show1 ? classes.focus1 : ""}  ${classes.button1}`} onFocus={handleClick1}>Why you should start with Copy Trading?</button>

            <button className={`ms-auto ${classes.button2}`} onFocus={handleClick2}>Why should you become a trader?</button>

            <div className='container text-center w-100'>
                <div className=''>
                    {show1 ?
                        <ul className={classes.list1}>
                            <li>- Automatically copy top-performing traders</li>
                            <li>- Build a network by interacting with other members</li>
                            <li>- Make the top traders work for you</li>
                            <li>- Learn new trading strategies</li>
                            {/* <button className={`my-5 ${classes.button_11}`}>Trade On Auto-Pilot</button> */}
                        </ul> : <ul className={classes.list2}>
                            <li>- Leave a mark in the social trading revolution</li>
                            <li>- Create your brand as a trade</li>
                            <li>- Interact with other professional traders in the space</li>
                            <li>- Provide guidance and knowledge to new players entering the space</li>
                            <li>- Earn a commission from other users that copy your trades</li>
                            {/* <button className={`myb-5 ${classes.button_22}`}>Trade On Auto-Pilot</button> */}
                        </ul>}
                    {/* {show2 ?
                    <ul className={classes.list2}>
                        <li>- Leave a mark in the social trading revolution</li>
                        <li>- Create your brand as a trade</li>
                        <li>- Interact with other professional traders in the space</li>
                        <li>- Provide guidance and knowledge to new players entering the space</li>
                        <li>- Earn a commission from other users that copy your trades</li>
                        <button className={`myb-5 ${classes.button_22}`}>Trade On Auto-Pilot</button>
                    </ul> : null} */}
                </div>
            </div>
            {show1 ? <button className={`my-5 ${classes.button_11}`}>Trade On Auto-Pilot</button>
                : <button className={`myb-5 ${classes.button_22}`}>Trade On Auto-Pilot</button>}
        </div>
    )
}
