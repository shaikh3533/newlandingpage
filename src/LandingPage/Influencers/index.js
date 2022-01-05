import React from 'react'
import classes from './Influencers.module.css'
import Profile from '../../Assets/img/cardImg.png'
import InfluencersCard from './InfluencersCard'

export default function Influencers() {
    return (
        <div className={classes.margin}>
            <h1 className={`ExtraBold pt-5 ${classes.heading1}`}>What top crypto influencers and traders think of our CopyTrading platform?</h1>
            <div className='row'>
                <InfluencersCard
                    img={Profile}
                    name="Name Lastname"
                    type="Crypto Advisor"
                    title="Amazing platform!"
                    info="“Get the same results as our expert crypto traders by just copying their trades. 100% Hands-off!” "
                />
                <InfluencersCard
                    img={Profile}
                    name="Name Lastname"
                    type="Crypto Advisor"
                    title="Amazing platform!"
                    info="“Get the same results as our expert crypto traders by just copying their trades. 100% Hands-off!” "
                />
                <InfluencersCard
                    img={Profile}
                    name="Name Lastname"
                    type="Crypto Advisor"
                    title="Amazing platform!"
                    info="“Get the same results as our expert crypto traders by just copying their trades. 100% Hands-off!” "
                />
            </div>
            <div className='text-center'>
                    <button className={`mx-auto d-block my-5 ${classes.button}`}>JOIN OTHER USERS NOW!</button>
            </div>
        </div>
    )
}