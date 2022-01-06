import classes from './Home.module.css'
import CopyTrading from './CopyTrading';
import AlreadyDone from './AlreadyDone';
import WhatIsCopyTrading from './WhatIsCopyTrading';
import WhyCopyTrading from './WhyCopyTrading';
import Exchange from './Exchange';
import Portfolio from './Portfolio';
import Influencers from './Influencers';
import Success from './Success';
import FAQ from './FAQs';
import FavTrader from './FavTrader';
import Pros from './Pros';
import HowItWorks from './HowItWorks';

const Home = () => {


    const style = {
        fontSize: '3rem',
        cursor: 'pointer',
        color: 'white',
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: '25px',
        backgroundColor: 'black',
        textAlign: 'center',
    };

    return (
        <>
            <div className="AntiInvert">
                <div className='linesBackGround'>
                    <div class="Section1">
                        <div class="hov Background"></div>
                        <div className="container ">
                            <div className="content">
                                <div className="Py-100 mb-5">
                                    <CopyTrading />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <AlreadyDone />
                        </div>
                    </div>
                    <div className='Section2 my-3'>
                        <div className={`my-5 container containerRight`}>
                            <WhatIsCopyTrading />
                        </div>
                    </div>
                </div>
                <div className='linesBackGround'>
                    <div className='Section3 my-3'>
                        <div className="container">
                            <WhyCopyTrading />
                        </div>
                    </div>
                </div>
                <div className='worldBackGround'>
                    <div className='Section4 my-3'>
                        <div className="container">
                            <Exchange />
                        </div>
                    </div>
                </div>
                <div className='Section5 my-3'>
                    <div className="container containerRight">
                        <FavTrader />
                    </div>
                </div>
                <div className='linesBackGround'>
                    <div className=''>
                        <div className="">
                            <Pros />
                        </div>
                    </div>
                </div>
                <div className='linesBackGround'>
                    <div className='Section5 my-3'>
                        <div className="container my-5">
                            <Portfolio />
                        </div>
                    </div>
                </div>
                <div className='linesBackGround'>
                    <div className='Section5 my-3'>
                        <div className="container my-5">
                            <HowItWorks />
                        </div>
                    </div>
                </div>
                <div className='DuallinesBackGround'>
                    <div className='Section6 my-3'>
                        <div className="container my-5">
                            <Influencers />
                        </div>
                        <div className={`my-5 container containerRight`}>
                            <Success />
                        </div>
                    </div>
                </div>
                <div className='linesBackGround'>
                    <div className='Section7 my-3'>
                        <FAQ />
                    </div>
                </div>
            </div>
            {/* <BackTop style={style} /> */}
        </>
    );
}

export default Home;