import React from 'react';
import classes from "./FAQ.module.css";

export default function FAQ() {
    return (
        < div id='FAQ'>
            <div className={`container`}>
                <div>
                    <h1 className={`ExtraBold pt-5 ${classes.heading}`}>FAQ</h1>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className={`accordion-item my-3 ${classes.accordiandiv}`} >
                        <h2 className="accordion-header" id="headingOne">
                            <button className={`accordion-button ${classes.accordianCss}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                What is Copy Trading?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className={`accordion-body ${classes.accordianbody}`}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At adipisci odio nobis in rerum deleniti fuga molestiae deserunt nam tempore, incidunt nulla animi corporis aliquid doloribus laboriosam numquam officiis? Tenetur!
                            </div>
                        </div>
                    </div>
                    <div className={`accordion-item my-3 ${classes.accordiandiv}`}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className={`accordion-button ${classes.accordianCss}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Is NewsCrypto copy trading free?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className={`accordion-body ${classes.accordianbody}`}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At adipisci odio nobis in rerum deleniti fuga molestiae deserunt nam tempore, incidunt nulla animi corporis aliquid doloribus laboriosam numquam officiis? Tenetur!
                            </div>
                        </div>
                    </div>
                    <div className={`accordion-item my-3 ${classes.accordiandiv}`}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className={`accordion-button ${classes.accordianCss}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Who can become a trader on NewsCrypto copy trading?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className={`accordion-body ${classes.accordianbody}`}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At adipisci odio nobis in rerum deleniti fuga molestiae deserunt nam tempore, incidunt nulla animi corporis aliquid doloribus laboriosam numquam officiis? Tenetur!
                            </div>
                        </div>
                    </div>
                    <div className={`accordion-item my-3 ${classes.accordiandiv}`}>
                        <h2 className="accordion-header" id="headingFour">
                            <button className={`accordion-button ${classes.accordianCss}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                How does copy trading work?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className={`accordion-body ${classes.accordianbody}`}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At adipisci odio nobis in rerum deleniti fuga molestiae deserunt nam tempore, incidunt nulla animi corporis aliquid doloribus laboriosam numquam officiis? Tenetur!
                            </div>
                        </div>
                    </div>
                    <div className={`accordion-item my-3 ${classes.accordiandiv}`}>
                        <h2 className="accordion-header" id="headingFive">
                            <button className={`accordion-button ${classes.accordianCss}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Is copy trading risk free?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className={`accordion-body ${classes.accordianbody}`}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At adipisci odio nobis in rerum deleniti fuga molestiae deserunt nam tempore, incidunt nulla animi corporis aliquid doloribus laboriosam numquam officiis? Tenetur!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
