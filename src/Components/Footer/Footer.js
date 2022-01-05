import React from 'react'
import classes from './Footer.module.css'
import Twitter from '../../Assets/img/twitter.png'
import Instagram from '../../Assets/img/instagram.png'
import Facebook from '../../Assets/img/facebook.png'
import Youtube from '../../Assets/img/youtube.png'
import Trading from '../../Assets/img/traders.png'
import Linkdin from '../../Assets/img/linkdin.png'
import Telegram from '../../Assets/img/telegram.png'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className={`mt-5 pt-3 ${classes.footerDiv}`}>
            <div className='container mb-2'>
                <div className={`d-flex ${classes.mainDiv}`}>
                    <div className={`d-flex me-auto my-1 ${classes.mainDiv}`}>
                        <div>
                            <NavLink to="/support" className={`mx-3 ${classes.footerLink}`}>
                                Support
                            </NavLink></div>
                        <div>
                            <NavLink to="/termsandconditions" className={`mx-2 ${classes.footerLink}`}>
                                Terms &amp; Conditions
                            </NavLink></div>
                        <div>
                            <NavLink to="/privacypolicy" className={`mx-2 ${classes.footerLink}`}>
                                Privacy Policy
                            </NavLink></div>
                        <div>
                            <NavLink to="/riskdisclosure" className={`mx-2 ${classes.footerLink}`}>
                                Risk Disclosure
                            </NavLink></div>
                        <div>
                            <a href="https://newscrypto.io" className={`mx-2 ${classes.footerLink}`}>
                                NewsCrypto.io
                            </a></div>

                    </div>
                    <div className='d-inline'>
                        <img src={Twitter} className={`mx-3 `} alt="" />
                        <img src={Instagram} className={`mx-3 `} alt="" />
                        <img src={Facebook} className={`mx-3 `} alt="" />
                        <img src={Youtube} className={`mx-3 `} alt="" />
                        <img src={Trading} className={`mx-3 `} alt="" />
                        <img src={Linkdin} className={`mx-3 `} alt="" />
                        <img src={Telegram} className={`mx-3 `} alt="" />
                    </div>
                </div>
            </div >
        </footer >
    )
}
