import React from 'react'
import classes from './Influencers.module.css'

export default function InfluencersCard(props) {
    return (
        <div className='col-lg-4 col-md-6 col-12 g-3'>
            <div className={`p-3 p-md-4 Round ${classes.cardContainer}`}>
                <div className='d-inline-flex'>
                    <img src={props.img} className={classes.cardImg} alt="" />
                    <div className='ms-2 my-auto'>
                        <p className={`ExtraBold t-grey Font30 mb-0 ${classes.cardName}`}>{props.name}</p>
                        <p className={`mb-0 Font20 ${classes.cardType}`}>{props.type}</p>
                    </div>
                </div>
                <h5 className={`mt-4 mb-3 Font20 ${classes.cardTitle}`}>{props.title}</h5>
                <p className="Font20">{props.info}</p>
            </div>
        </div>
    )
}
