import React, { useState } from 'react'
import classes from './FavTrader.module.css'
import Computer from '../../Assets/img/ComputerImage.png'
import ChartScreen from '../../Assets/img/ChartScreen.png'
import TradersScreen from '../../Assets/img/TradersScreen.png'
import DataScreen from '../../Assets/img/DataScreen.png'
import FeedScreen from '../../Assets/img/FeedScreen.png'

export default function FavTrader() {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(true)

    const handleClick_1 = () => {
        setShow1(true);
        setShow2(false);
        setShow3(false);
        setShow4(false);
    }
    const handleClick_2 = () => {
        setShow1(false);
        setShow2(true);
        setShow3(false);
        setShow4(false);
    }
    const handleClick_3 = () => {
        setShow1(false);
        setShow2(false);
        setShow3(true);
        setShow4(false);
    }
    const handleClick_4 = () => {
        setShow1(false);
        setShow2(false);
        setShow3(false);
        setShow4(true);
    }
    return (
        <>
            <div className='row'>
                <div className={`${classes.margin}`}>
                    <div className={classes.height}>
                        <p className={`ExtraBold pb-5 ${classes.heading1}`}>Follow your favourite trader and start Copy Trading</p>

                        <div className={`text-center mt-5 py-5 ${classes.bgDiv}`}>
                            <div className={`position-relative ${classes.divRelative}`}>
                                <button className={`ms-auto ${classes.button1}`} onFocus={handleClick_1}>HOME SOCIAL FEED</button>
                                <button className={` ${classes.button2}`} onFocus={handleClick_2} >YOUR TRADING DATA</button>
                                <button className={` ${classes.button3}`} onFocus={handleClick_3}>CHOOSE THE BEST TRADERS</button>
                                <button onFocus={handleClick_4} className={`${show4 ? classes.focus4 : ""}  ${classes.button4}`} >CHARTING</button>

                                <img src={Computer} className={`${classes.computer}`} alt="" />
                                {show1 ? <img src={FeedScreen} className={`mx-auto ${classes.FeedScreen}`} alt="" /> : null}
                                {show2 ? <img src={DataScreen} className={`mx-auto ${classes.DataScreen}`} alt="" /> : null}
                                {show3 ? <img src={TradersScreen} className={`mx-auto ${classes.TradersScreen}`} alt="" /> : null}
                                {show4 ? <img src={ChartScreen} className={`mx-auto ${classes.ChartScreen}`} alt="" /> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
