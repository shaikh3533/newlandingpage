import React, { useState } from 'react'
import classes from './HowItWorks.module.css'

export default function HowItWorks() {
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)

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
        <div id='HowItWorks' className={`${classes.margin}`}>
            <b className={`fs-1 ${classes.heading1}`}>How the platform works?</b>
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-12'>
                    <button className={`${show1 ? classes.focus1 : ""}  ${classes.button1}`} onFocus={handleClick_1}><p className={`mb-0 ${classes.Num}`} >1.</p></button>
                    {show1 ? <div>
                        <p className={`${classes.title}`}>REGISTER &amp; VERIFY</p>
                        <p className={classes.paragraph}>Simply create your account by filling in the required data after you click “Register” and add a 2FA (Two-Factor Authentication) method such as Google Authenticator.</p>
                    </div>
                        : null}
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <button className={classes.button2} onFocus={handleClick_2}><p className={`mb-0 ${classes.Num}`} >2.</p></button>
                    {show2 ? <div>
                        <p className={`${classes.title}`}>CONNECT YOUR EXCHANGE</p>
                        <p className={classes.paragraph}>Select the exchange that you want to copy trade on, create an API and copy and paste the API key into the input fields on the Copy Trading platform. Remember to turn off withdrawal permission for the API on your exchange - we only need the key so that you can copy your chosen traders, and the API doesn&#39;t need withdrawal permissions.</p>
                    </div>
                        : null}
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <button className={classes.button3} onFocus={handleClick_3}><p className={`mb-0 ${classes.Num}`} >3.</p></button>
                    {show3 ? <div>
                        <p className={`${classes.title}`}>CONNECT YOUR EXCHANGE</p>
                        <p className={classes.paragraph}>Select the exchange that you want to copy trade on, create an API and copy and paste the API key into the input fields on the Copy Trading platform. Remember to turn off withdrawal permission for the API on your exchange - we only need the key so that you can copy your chosen traders, and the API doesn&#39;t need withdrawal permissions.</p>
                    </div>
                        : null}
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <button className={classes.button4} onFocus={handleClick_4}><p className={`mb-0 ${classes.Num}`} >4.</p></button>
                    {show4 ? <div className={`my-5`}>
                        <p className={`${classes.title}`}>CONNECT YOUR EXCHANGE</p>
                        <p className={classes.paragraph}>Select the exchange that you want to copy trade on, create an API and copy and paste the API key into the input fields on the Copy Trading platform. Remember to turn off withdrawal permission for the API on your exchange - we only need the key so that you can copy your chosen traders, and the API doesn&#39;t need withdrawal permissions.</p>
                    </div>
                        : null}
                </div>
            </div>
        </div>
    )
}
