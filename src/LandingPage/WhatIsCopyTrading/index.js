import React from 'react'
import classes from './WhatIs.module.css'
import laptop from '../../Assets/img/laptop.png'
import Pc1Hover from '../../Assets/img/Pc_1InsideImg.png'
import Moniter from '../../Assets/img/Moniter.png'
import Notepad from '../../Assets/img/Notepad.png'
import Mobile from '../../Assets/img/Mobile.png'

export default function WhatIsCopyTrading() {
    return (
        <div className='position-relative' id='WhatIsCopyTrading'>
            <div className='row mt-5'>
                <div className='col-xl-4 col-lg-5 col md-5 col-12'>
                    <h1 className={`ExtraBold pt-5 fs-1 ${classes.heading1}`}>What is CopyTrading?</h1>
                    <p className="py-3 my-3 ">Copy Trading lets you automatically copy all of the trades of your favorite professional traders. With just a few clicks, you can follow their strategies and make the same profits as the pros, without having to do any work of your own. While the professional traders execute trades on your behalf, you can also learn from the best by observing their trading system. It’s the perfect tool whether you’re a beginner in the space or you simply don’t have time to constantly monitor the markets. </p>
                    <div className="HalfScreen">
                        <div className="pt-3 full hoverBig">
                            <button className={`${classes.button}`}>CREATE A USERS ACCOUNT</button>
                        </div>
                    </div>
                </div>
                <div className={`col-xl-8 col-lg-7 col-12 my-5 ${classes.Screens}`} id='Screens'>
                    <div className={`pb-3 ${classes.height}`}>
                        <div className={classes.backgroundImage}></div>
                        <img src={Moniter} className={classes.pc1} alt="" />
                        <img src={Pc1Hover} className={classes.hoverImg} alt="" />
                        <img src={laptop} className={classes.pc2} alt="" />
                        <img src={Notepad} className={classes.notepad} alt="" />
                        <img src={Mobile} className={classes.mobile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}