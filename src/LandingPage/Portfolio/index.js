import React from 'react'
import classes from './Portfolio.module.css'

export default function Portfolio() {
    return (
        <div className={`row ${classes.margin}`}>
            <div className='col-md-8 col-12'>

                <div className={`p-5 ${classes.bgDiv}`}>
                    <div className={`${classes.bgDivInner}`}>
                        <span>You are <bold className={classes.bold}>up 10.87% </bold>today</span>

                    </div>
                </div>
                <div className={`d-flex ms-auto ${classes.adjointBtn} `}>

                    <div className={`text-white Round p-3 ${classes.portfolio1} ${classes.portfolio}`}>
                        <div className={`${classes.Inner}`}>
                            <p className='text-white'>Total Portfolio</p>
                            <p className='text-white mb-0'>$ 43,098.32</p>
                        </div>
                    </div>

                    <div className={`text-white Round py-3 px-4 ${classes.portfolio2} ${classes.portfolio}`}>
                        <div className={`${classes.Inner}`}>
                            <p className='text-white'>Total Profit</p>
                            <p className='text-white mb-0'>$ 6,843.12</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className='col-md-4 col-12 mt-5 my-md-auto'>
                <div className=''>
                    <p>
                        NewsCrypto&#39;s Copy Trading platform will do everything for you and it doesn&#39;t require any previous skill or crypto trading knowledge whatsoever.
                    </p>
                    <p>
                        With NewsCrypto&#39;s Copy Trading platform, you will be able to achieve the same results as the world&#39;s top tier traders!
                    </p>
                    <p>
                        The platform will have a collection of many famous traders that you probably already know and whom you will be able to follow on various tier 1 exchanges.
                    </p>
                    <button className={`mx-auto d-block my-5 ${classes.button}`}>CREATE A USERS ACCOUNT</button>
                </div>
            </div>
        </div>
    )
}
