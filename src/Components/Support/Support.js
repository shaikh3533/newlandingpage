import React, { useState, useLayoutEffect } from 'react';
import classes from "./Support.module.css";

export default function Support() {
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    const submitMessage = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        setUserInput(e.target.value);
    }


    return (
        <>
            <div className='container my-5'>
                <div>
                    <h3 className={`fs-1 mb-5 ${classes.heading1}`}>Support</h3>
                </div>
                <div className={`my-4 ${classes.paragraph}`}>
                    <p>Are you experiencing a problem using NewsCrypto Copy Trading platform?<br />Fill in the request below and we will get back to you as soon as possible.</p>
                </div>
                <form>
                    <div className='row my-5'>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <label>Name</label>
                            <div className='my-2'>
                                <input type="text" className={`form-control  ${classes.formField}`} placeholder='Name Lastname' value={userInput.name} id='name' required onChange={handleChange} />
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <label>Your Email Address</label>
                            <div className='my-2'>
                                <input type="email" className={`form-control ${classes.formField}`} placeholder='Enter Your Email Address' value={userInput.email} id='email' required onChange={handleChange} />
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <label>Subject Field</label>
                            <div className='my-2'>
                                <input type="text" className={`form-control ${classes.formField}`} placeholder='Enter Subject' value={userInput.subject} id='subject' required onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className='my-4'>
                        <label>Describe what you would like us to update/address. Be specific, detailed and concise. Review our data to understand our policies.</label>
                        <div className='my-2'>
                            <textarea className={`form-control ${classes.messageField}`} placeholder='Enter a description.' value={userInput.message} id='message' required onChange={handleChange} rows="6" />
                        </div>
                    </div>
                    <div className='my-2'>
                        <button type='submit' className={` ${classes.sendbutton}`}>SEND</button>
                    </div>
                </form>
            </div>
        </>
    )
}
